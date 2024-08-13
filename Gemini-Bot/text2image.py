import os
import torch
from PIL import Image
import matplotlib.pyplot as plt
from transformers import CLIPProcessor, CLIPModel

# Load the CLIP model and processor
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch16")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch16")

def load_images_from_folder(folder):
    images = []
    for filename in os.listdir(folder):
        img_path = os.path.join(folder, filename)
        if os.path.isfile(img_path) and img_path.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            images.append(img_path)  # Store only valid image paths
    return images

def find_best_matching_image(prompt, image_paths, features_path):
    # Process the prompt
    inputs = processor(text=prompt, return_tensors="pt", padding=True, truncation=True)

    # Get the text features
    with torch.no_grad():
        text_features = model.get_text_features(**inputs)

    # Load the image features from the file
    all_image_features = torch.load(features_path)

    best_match = None
    best_similarity = -1  # Initialize to a very low value

    for i, image_features in enumerate(all_image_features):
        # Calculate cosine similarity
        similarity = torch.cosine_similarity(text_features, image_features).item()

        # Update best match if this one is better
        if similarity > best_similarity:
            best_similarity = similarity
            best_match = image_paths[i]

    if best_match:
        return Image.open(best_match)
    else:
        return None

def display_image(image):
    if image is not None:
        plt.imshow(image)  # Display the image as is
        plt.axis('off')  # Hide axes
        plt.show()
    else:
        print("No matching image found.")

def save_image(image, output_path):
    if image is not None:
        image.save(output_path)  # Save the image to the specified path
        print(f"Image saved to {output_path}")
    else:
        print("No matching image found.")

def get_prompt_from_file(file_path):
    with open(file_path, 'r') as file:
        prompt = file.read().strip()
    return prompt

# Load prompt from check.txt
prompt_file_path = r"E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\check.txt"  # Path to your check.txt file
prompt = get_prompt_from_file(prompt_file_path)

# Load images from the 'shoes' folder
shoe_folder = r"E:\shoezapfinale\shoezapfinale2\flask_clone\shoes"  # Change this to your local path
shoe_image_paths = load_images_from_folder(shoe_folder)

# Specify the path for features.pt
features_path = r"E:\shoezapfinale\shoezapfinale2\flask_clone\features.pt"

# Find the best matching image
matching_image = find_best_matching_image(prompt, shoe_image_paths, features_path)

# Display the image


# Save the output image to the specified path
output_path = r"static/output.png"  # Change this to your desired output path
save_image(matching_image, output_path)
