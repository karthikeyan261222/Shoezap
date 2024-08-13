import os
from dotenv import load_dotenv
import google.generativeai as genai
import fitz  # PyMuPDF
from PIL import Image

# Load environment variables and configure API
load_dotenv('.env')
genai.configure(api_key=os.getenv('API_KEY'))

# Initialize models
model = genai.GenerativeModel('gemini-pro')
chat_model = model.start_chat(history=[])
img_model = genai.GenerativeModel('gemini-pro-vision')

def extract_text_from_pdf(pdf_path):
    try:
        if not os.path.exists(pdf_path):
            print(f"PDF file not found at path: {pdf_path}")
            return "PDF file not found."
        
        text = ""
        doc = fitz.open(pdf_path)
        for page in doc:
            text += page.get_text()
        doc.close()
        
        if not text.strip():
            print("PDF file is empty or could not be read properly.")
            return "PDF file is empty or could not be read properly."
        
        print(f"Successfully extracted {len(text)} characters from the PDF.")
        return text
    except Exception as e:
        print(f"Error extracting text from PDF: {str(e)}")
        return f"Error extracting text from PDF: {str(e)}"

# Use the specific file path provided
pdf_path = r"E:\shoezapfinale\shoezapfinale2\flask_clone\shoefile.pdf"
pdf_text = extract_text_from_pdf(pdf_path)

def shoe_recommender_assistant(user_input):
    if user_input.lower() in ['hi', 'hii', 'hiiii', 'helloo', 'hello', 'heyyy', 'hey', 'how are you']:
        return "Hi! How can I assist you today?"
    return None

def chat_with_model(user_input):
    if pdf_text.startswith("Error") or pdf_text.startswith("PDF file"):
        return f"I'm sorry, but I'm having trouble accessing the shoe information. {pdf_text} Please try again later or contact support."

    prompt = f"""
    You are a personal assistant specialized in recommending shoes. Use the following context from the user's custom data to inform your recommendations:

    {pdf_text}

    Now, please recommend one shoe only based on the following user input:
    {user_input}

   display one shoe name first


   then explain valid reason but not in points just a small para with 3 lines in detail"""
    try:
        response = chat_model.send_message(prompt)
        response_text = response.text
        write_response_to_file(response_text)
        return response_text
    except Exception as e:
        print(f"Error in chat_with_model: {str(e)}")
        return f"I'm sorry, but I encountered an error while processing your request: {str(e)}"
def write_response_to_file(response_text):
    with open(r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\check.txt', 'w') as file:
        file.write(response_text + '\n')

def process_image(query, image_file):
    try:
        image = Image.open(image_file)
        response = img_model.generate_content([query, image])
        return response.text
    except Exception as e:
        print(f"Error in process_image: {str(e)}")
        return f"I'm sorry, but I encountered an error while processing your image: {str(e)}"

# Print debug information when the module is imported
print(f"PDF path: {pdf_path}")
print(f"PDF text length: {len(pdf_text)}")
print(f"First 100 characters of PDF text: {pdf_text[:100]}")