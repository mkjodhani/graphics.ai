from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from flaskr.transformer import TransformImage
from time import time
global file_index
global background_index
app = Flask(__name__)
# app.debug = True


@app.route('/user/<name>')
def hello_world(name):
    return name


@app.route('/transform', methods=['POST'])
def transform():
    return "Transform"


@app.route('/uploader', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        epoch = round(time())
        imageFile = request.files['image']
        backgroundFile = request.files['background']
        imageFile.save("public/images/files/" +
                       secure_filename(str(epoch)+"." + imageFile.filename.split('.')[1]))
        backgroundFile.save("public/images/background/" +
                            secure_filename(str(epoch)+"." + backgroundFile.filename.split('.')[1]))
        try:
            transformObj = TransformImage(secure_filename(str(epoch)+"." + imageFile.filename.split('.')[1]),secure_filename(str(epoch)+"." + backgroundFile.filename.split('.')[1]))
            transformObj.tranform()
        except Exception as e:
            print(e)
        return 'file uploaded successfully'


if __name__ == '__main__':
    app.run()
