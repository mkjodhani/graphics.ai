from traceback import print_tb
from flask import Flask, request, send_from_directory, jsonify
from werkzeug.utils import secure_filename
from flaskr.transformer import BlurImage, TransformImage
from time import time
from flask_cors import CORS, cross_origin


global file_index
global background_index
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app.debug = True


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET, POST, PATCH, DELETE, OPTIONS')
    return response


@app.route("/public/<path:path>")
@cross_origin()
def static_dir(path):
    return send_from_directory("public", path)


@app.route('/user/<name>')
def hello_world(name):
    return name


@app.route('/transform', methods=['POST'])
def transform():
    return "Transform"


# @app.route('/uploader/<type>', methods=['GET', 'POST'])
# @cross_origin()
# def upload_file(type):
#     if request.method == 'POST':
#         epoch = round(time())
#         imageFile = request.files['image']
#         backgroundFile = request.files['background']
#         if type == "changeBackground":
#             name = str(epoch)+"_3." + imageFile.filename.split('.')[1]
#         else:
#             name = str(epoch)+"_2." + imageFile.filename.split('.')[1]
#         print(name)
#         imageFile.save("public/images/files/" +
#                        secure_filename(str(epoch)+"." + imageFile.filename.split('.')[1]))
#         backgroundFile.save("public/images/background/" +
#                             secure_filename(str(epoch)+"." + backgroundFile.filename.split('.')[1]))
#         try:
#             transformObj = TransformImage(secure_filename(str(epoch)+"." + imageFile.filename.split(
#                 '.')[1]), secure_filename(str(epoch)+"." + backgroundFile.filename.split('.')[1]), type)
#             transformObj.tranform()
#         except Exception as e:
#             print(e)
#         return jsonify({
#             "status": 200,
#             "message": 'file uploaded successfully',
#             "fileName": name
#         })


@app.route('/uploader/blur', methods=['GET', 'POST'])
@cross_origin()
def upload_file_blur():
    if request.method == 'POST':
        epoch = round(time())
        imageFile = request.files['image']
        name = str(epoch)+"_blured." + imageFile.filename.split('.')[1]
        imageFile.save("public/images/files/" +
                       secure_filename(str(epoch)+"." + imageFile.filename.split('.')[1]))
        try:
            blurObj = BlurImage(secure_filename(str(epoch)+"." + imageFile.filename.split(
                '.')[1]))
            blurObj.blur()
        except Exception as e:
            print(e)
        return jsonify({
            "status": 200,
            "message": 'file uploaded successfully',
            "fileName": name
        })


@app.route('/uploader/changeBackground', methods=['GET', 'POST'])
@cross_origin()
def upload_file_changeBackground():
    if request.method == 'POST':
        epoch = round(time())
        imageFile = request.files['image']
        backgroundFile = request.files['background']
        name = str(epoch)+"_3." + imageFile.filename.split('.')[1]
        imageFile.save("public/images/files/" +
                       secure_filename(str(epoch)+"." + imageFile.filename.split('.')[1]))
        backgroundFile.save("public/images/background/" +
                            secure_filename(str(epoch)+"." + backgroundFile.filename.split('.')[1]))
        try:
            transformObj = TransformImage(secure_filename(str(epoch)+"." + imageFile.filename.split(
                '.')[1]), secure_filename(str(epoch)+"." + backgroundFile.filename.split('.')[1]))
            transformObj.tranform()
        except Exception as e:
            print(e)
        return jsonify({
            "status": 200,
            "message": 'file uploaded successfully',
            "fileName": name
        })


if __name__ == '__main__':
    app.run()
