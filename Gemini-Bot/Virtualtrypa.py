import os
import shutil
from ultralytics import YOLO
from PIL import Image
import numpy as np
from rembg import remove
import cv2
import matplotlib.pyplot as plt

# Define paths
input_image_path = r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\static\output.png'
output_image_path = r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\static\bgnew.png'
model_path = r"E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\best.pt"
input_image_for_yolo = r"E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\static\test1.jpg"
output_base_dir = r"E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\runs\detect\predict"
annotation_file_path = os.path.join(output_base_dir, "labels", "test1.txt")
output_image_final = r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\static\manoutput.png'

def process_image(image_path, output_image_path):
    # Open the PNG image
    input_image = Image.open(image_path)

    # Remove the background
    output_image = remove(input_image)

    # Save the output image
    output_image.save(output_image_path)
    print(f"Background removed and saved to {output_image_path}")

def clear_previous_results(output_dir):
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)

def perform_yolo_inference(model_path, input_image_path, output_base_dir):
    infer = YOLO(model_path)
    clear_previous_results(output_base_dir)
    results = infer.predict(input_image_path, save=True, save_txt=True, imgsz=640, conf=0.5)
    return results[0].save_dir

def load_images(original_path, replacement_path):
    original_img = cv2.imread(original_path)
    if original_img is None:
        raise FileNotFoundError(f"Original image not found at '{original_path}'")

    replacement_shoe = Image.open(replacement_path).convert("RGBA")
    return original_img, replacement_shoe

def remove_white_background(shoe_image):
    data = shoe_image.getdata()
    new_data = [(255, 255, 255, 0) if item[:3] == (255, 255, 255) else item for item in data]
    shoe_image.putdata(new_data)
    return shoe_image

def get_annotation(annotation_path):
    if not os.path.exists(annotation_path):
        raise FileNotFoundError(f"Annotation file not found at {annotation_path}")

    with open(annotation_path) as file:
        annotation = file.readline().split()
    return list(map(float, annotation[1:]))

def calculate_shoe_dimensions(original_img, x_center, y_center, width, height):
    image_height, image_width, _ = original_img.shape
    x_center_pixel = int(x_center * image_width)
    y_center_pixel = int(y_center * image_height)
    width_pixel = int(width * image_width)
    height_pixel = int(height * image_height)
    return x_center_pixel, y_center_pixel, width_pixel, height_pixel

def resize_and_rotate_shoe(replacement_shoe, width_pixel, height_pixel):
    aspect_ratio = replacement_shoe.width / replacement_shoe.height
    new_width = int(width_pixel * 1.21)  # Increased by 1% more
    new_height = int(new_width / aspect_ratio)
    resized_shoe = replacement_shoe.resize((new_width, new_height), Image.LANCZOS)
    return np.array(resized_shoe)

def blend_images(original_img, shoe_np, x_center_pixel, y_center_pixel):
    shoe_bgr = cv2.cvtColor(shoe_np, cv2.COLOR_RGBA2BGRA)
    shoe_rgb = shoe_bgr[:, :, :3]
    shoe_alpha = shoe_bgr[:, :, 3] / 255.0

    shift_amount = int(original_img.shape[0] * 0.015)
    y_center_pixel -= shift_amount

    y_min = max(0, y_center_pixel - shoe_bgr.shape[0] // 2)
    x_min = max(0, x_center_pixel - shoe_bgr.shape[1] // 2)
    y_max = min(original_img.shape[0], y_min + shoe_bgr.shape[0])
    x_max = min(original_img.shape[1], x_min + shoe_bgr.shape[1])

    shoe_region = shoe_bgr[max(0, -y_min):shoe_bgr.shape[0] - max(0, y_max - original_img.shape[0]),
                           max(0, -x_min):shoe_bgr.shape[1] - max(0, x_max - original_img.shape[1])]
    shoe_rgb = shoe_region[:, :, :3]
    shoe_alpha = shoe_region[:, :, 3] / 255.0

    for i in range(shoe_region.shape[0]):
        for j in range(shoe_region.shape[1]):
            if shoe_alpha[i, j] > 0:
                original_img[y_min + i, x_min + j] = (
                    shoe_rgb[i, j] * shoe_alpha[i, j] +
                    original_img[y_min + i, x_min + j] * (1 - shoe_alpha[i, j])
                )

    return original_img

def main():
    # Step 1: Process image to remove background
    if os.path.exists(input_image_path):
        process_image(input_image_path, output_image_path)
    else:
        print(f"The file {input_image_path} does not exist.")
        return

    # Step 2: Perform YOLO inference
    output_dir = perform_yolo_inference(model_path, input_image_for_yolo, output_base_dir)

    # Step 3: Load images
    original_img, replacement_shoe = load_images(input_image_for_yolo, output_image_path)
    replacement_shoe = remove_white_background(replacement_shoe)

    # Step 4: Get annotation
    x_center, y_center, width, height = get_annotation(annotation_file_path)

    # Step 5: Calculate shoe dimensions
    x_center_pixel, y_center_pixel, width_pixel, height_pixel = calculate_shoe_dimensions(original_img, x_center, y_center, width, height)

    # Step 6: Resize and rotate shoe
    shoe_np = resize_and_rotate_shoe(replacement_shoe, width_pixel, height_pixel)

    # Step 7: Blend images
    result_img = blend_images(original_img, shoe_np, x_center_pixel, y_center_pixel)

    # Step 8: Display and save result
    
    cv2.imwrite(output_image_final, result_img)
    print(f"Result saved to {output_image_final}")

if __name__ == "__main__":
    main()
