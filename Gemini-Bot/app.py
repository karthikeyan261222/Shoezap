from flask import Flask, render_template, request, jsonify, send_from_directory
from bot import shoe_recommender_assistant, chat_with_model, process_image
from markdown import markdown
import subprocess
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('templates/images', filename)

# Ensure this path exists and is writable
UPLOAD_FOLDER = r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\static'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'success': False, 'message': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'success': False, 'message': 'No selected file'}), 400
    
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'test1.jpg')
    file.save(file_path)
    return jsonify({'success': True, 'message': 'File successfully uploaded'}), 200

@app.route("/chat", methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        user_input = request.json['query']
        if len(user_input.strip()) == 0:
            return jsonify("Please enter something!")

        greeting_response = shoe_recommender_assistant(user_input)
        if greeting_response:
            return jsonify(greeting_response)

        responsek = chat_with_model(user_input)
        return jsonify(markdown(responsek))
    else:
        return render_template("chats.html")

@app.route('/run-script', methods=['POST'])
def run_script():
    script_path = r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\text2image.py'
    try:
        # Run the script
        subprocess.run(['python', script_path], check=True)
        return jsonify({'status': 'success'}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/virtual-try-on', methods=['POST'])
def virtual_try_on():
    script_path = r'E:\shoezapfinale\shoezapfinale2\flask_clone\Gemini-Bot\Virtualtrypa.py'
    try:
        # Run the script
        subprocess.run(['python', script_path], check=True)
        return jsonify({'status': 'success'}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == "__main__":
    app.run(port=8080, debug=True)