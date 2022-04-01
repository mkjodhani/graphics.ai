import os
import cv2
# from cv2 import CV_64F
import numpy
from pixellib.torchbackend.instance import instanceSegmentation
class TransformImage(object):
<<<<<<< HEAD
    def __init__(self, fileName, backgroundName, type) -> None:
        self.filename = "server/public/images/files/" + fileName
        self.bg_filename = "server/public/images/background/" + backgroundName
        self.type = type
=======
    def __init__(self, fileName, backgroundName) -> None:
        self.type = type
        self.filename = "public/images/files/" + fileName
        self.bg_filename = "public/images/background/" + backgroundName
>>>>>>> 087ae64b372030eb82b1096391467bc6abd6ea6a
        pass

    def create_mask(self, detected_objects):
        detected_objects = detected_objects.astype(int)
        detected_objects = numpy.where(
            detected_objects == [1], 255, detected_objects)

        mask = detected_objects[:, :, 0]
        no_of_objects = len(self.segmap[0]['class_names'])
        for i in range(1, no_of_objects):
            mask += detected_objects[:, :, i]

        frame = numpy.shape(mask)

        whole_mask = numpy.ones((frame[0], frame[1], 3))
        for x in range(0, frame[1]):
            for y in range(0, frame[0]):
                if mask[y, x] == 255:
                    whole_mask[y, x] = [255, 255, 255]
        return whole_mask

    def bg_style_transfer(self, bg_file, img_frame, img):
        new_bg = cv2.imread(bg_file)
        bg_frame = numpy.shape(new_bg)
        
        # img_aspect_ratio = img_frame[1]/img_frame[0]
        # bg_aspect_ratio = bg_frame[1]/bg_frame[0]

        width_ratio = img_frame[1] / bg_frame[1]
        height_ratio = img_frame[0] / bg_frame[0]

        max_ratio = max(width_ratio, height_ratio)

        new_bg = cv2.resize(new_bg, (int(bg_frame[1] * max_ratio), int(bg_frame[0] * max_ratio)))

        # cv2.imwrite("server/public/images/converted/bgresized.jpg", new_bg)
        bg = numpy.shape(new_bg)
        shift_x = abs(bg[1] - img_frame[1]) // 2
        shift_y = abs(bg[0] - img_frame[0]) // 2

        new_bg = new_bg[shift_y: shift_y +
                              img_frame[0], shift_x: shift_x + img_frame[1]]
        output = numpy.where(self.mask != [255, 255, 255], new_bg, img)
        return output

    def tranform(self):
        fname, extension = os.path.basename(self.filename).split('.')
<<<<<<< HEAD
        output_fname = "/public/images/converted/" + fname + " preview."+extension
=======
        output_fname = "public/images/converted/" + fname + "_1."+extension

>>>>>>> 087ae64b372030eb82b1096391467bc6abd6ea6a
        ins = instanceSegmentation()
        ins.load_model("server/flaskr/transformer/pointrend_resnet50.pkl")
        self.segmap = ins.segmentImage(self.filename, extract_segmented_objects=True,
                                  output_image_name=output_fname)

        # cv2.imwrite("public/images/coverted/extracted."+extension, segmap[1])

        # TODO improve mask accuracy
        self.mask = self.create_mask(self.segmap[0]['masks'])
        # cv2.imwrite("server/public/images/converted/" + fname + " masked_img."+extension, self.mask)

        self.img = cv2.imread(self.filename)
<<<<<<< HEAD

        if self.type == "Blur":
            # '''creating bokeh image'''
            blurred_img = cv2.GaussianBlur(self.img, (25, 25), 0)
            # cv2.imwrite("server/public/images/converted/" + fname + " blurred_img."+extension, blurred_img)

            output = numpy.where(self.mask != [255, 255, 255], blurred_img, self.img)
            cv2.imwrite("server/temporary/"+fname + "bg_blurred."+extension, output)
        else:
            '''creating style transfer'''
            output = self.bg_style_transfer(self.bg_filename, numpy.shape(self.mask), self.img)
            cv2.imwrite("server/temporary/"+fname + "style_transfer."+extension, output)
=======
        blurred_img = cv2.GaussianBlur(self.img, (25, 25), 0)
        # cv2.imwrite("server/public/images/converted/" + fname + " blurred_img."+extension, blurred_img)
        
        '''creating style transfer'''
        output = self.bg_style_transfer(self.bg_filename, numpy.shape(self.mask), self.img)
        cv2.imwrite("public/images/converted/" + fname + "_3."+extension, output)

class BlurImage(object):
    def __init__(self, fileName) -> None:
        self.filename = "public/images/files/" + fileName
        pass

    def create_mask(self, detected_objects):
        detected_objects = detected_objects.astype(int)
        detected_objects = numpy.where(
            detected_objects == [1], 255, detected_objects)

        mask = detected_objects[:, :, 0]
        no_of_objects = len(self.segmap[0]['class_names'])
        for i in range(1, no_of_objects):
            mask += detected_objects[:, :, i]

        frame = numpy.shape(mask)

        whole_mask = numpy.ones((frame[0], frame[1], 3))
        for x in range(0, frame[1]):
            for y in range(0, frame[0]):
                if mask[y, x] == 255:
                    whole_mask[y, x] = [255, 255, 255]
        return whole_mask

    def gaussian_blur(self, img, blur_factor):
        return cv2.GaussianBlur(img, (blur_factor, blur_factor), 0)

    def save_image(self, path, image):
        cv2.imwrite(path, image)

    def blur(self):
        fname, extension = os.path.basename(self.filename).split('.')
        output_fname = "public/images/converted/" + fname + "_1."+extension

        ins = instanceSegmentation()
        ins.load_model("pointrend_resnet50.pkl")
        self.segmap = ins.segmentImage(self.filename, extract_segmented_objects=True,
                                  output_image_name=output_fname)

        # cv2.imwrite("public/images/coverted/extracted."+extension, segmap[1])

        # TODO improve mask accuracy
        self.mask = self.create_mask(self.segmap[0]['masks'])
        # cv2.imwrite("server/public/images/converted/" + fname + " masked_img."+extension, self.mask)

        # '''creating bokeh image'''
        self.img = cv2.imread(self.filename)
        blurred_img = cv2.GaussianBlur(self.img, (25, 25), 0)
        # cv2.imwrite("server/public/images/converted/" + fname + " blurred_img."+extension, blurred_img)
        output = numpy.where(self.mask != [255, 255, 255], blurred_img, self.img)
        cv2.imwrite("public/images/converted/"+ fname + "_blured."+extension, output)
>>>>>>> 087ae64b372030eb82b1096391467bc6abd6ea6a
