import cv2
# from cv2 import CV_64F
import numpy
from pixellib.torchbackend.instance import instanceSegmentation
class TransformImage(object):
    def __init__(self, fileName, backgroundName) -> None:
        self.filename = "public/images/files/" + fileName
        self.bg_filename = "public/images/background/" + backgroundName
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

    def bg_style_transfer(self, bg_file, img_frame):
        # img = cv2.imread(img_file)
        # img_frame = numpy.shape(img)

        new_style = cv2.imread(bg_file)
        bg_frame = numpy.shape(new_style)

        if (bg_frame[0] > img_frame[0] and bg_frame[1] < img_frame[1]):
            bg_aspect_ratio = bg_frame[1]/bg_frame[0]
            new_style = cv2.resize(
                new_style, (int(img_frame[0]/bg_aspect_ratio), img_frame[1]))

        if (bg_frame[0] < img_frame[0] and bg_frame[1] > img_frame[1]):
            bg_aspect_ratio = bg_frame[1]/bg_frame[0]
            new_style = cv2.resize(
                new_style, (img_frame[0], int(img_frame[1]/bg_aspect_ratio)))

        bg = numpy.shape(new_style)
        shift_x = abs(bg[1] - img_frame[1]) // 2
        shift_y = abs(bg[0] - img_frame[0]) // 2
        print(shift_x, shift_y)
        new_style = new_style[shift_y: shift_y +
                              img_frame[0], shift_x: shift_x + img_frame[1]]

        output = numpy.where(self.mask != [255, 255, 255], new_style, self.img)
        return output

    def tranform(self):
        fname, extension = self.filename.split('.')
        output_fname = fname+" preview."+extension

        ins = instanceSegmentation()
        ins.load_model("pointrend_resnet50.pkl")
        self.segmap = ins.segmentImage(self.filename, extract_segmented_objects=True,
                                  output_image_name="public/images/coverted/"+output_fname)

        # cv2.imwrite("public/images/coverted/extracted."+extension, segmap[1])

        self.mask = self.create_mask(self.segmap[0]['masks'])
        cv2.imwrite(
            "public/images/coverted/masked_img."+extension, self.mask)

        '''creating bokeh image'''
        self.img = cv2.imread(self.filename)
        blurred_img = cv2.GaussianBlur(self.img, (25, 25), 0)
        cv2.imwrite(
            "public/images/coverted/blurred_img."+extension, blurred_img)

        output = numpy.where(self.mask != [255, 255, 255], blurred_img, self.img)
        cv2.imwrite("public/images/coverted/" +
                    fname+"bg_blurred."+extension, output)

        # '''creating style transfer'''
        output = self.bg_style_transfer(self.bg_filename, numpy.shape(self.mask))
        cv2.imwrite("public/images/coverted/" +
                    fname+"style_transfer."+extension, output)
