# Shoezap

Shoezap is an innovative web application that allows users to find the perfect shoe based on their prompts. Users can interact with the system using natural language through a chat interface powered by the Gemini API. Once a shoe is selected, users can virtually try it on in 2D using advanced machine learning models.

## Watch the Shoezap Video

[![Watch the Shoezap Video](https://img.shields.io/badge/Watch_the_Video-%23007bff?style=for-the-badge&logo=video&logoColor=white)](https://github.com/user-attachments/assets/ed89006b-5b2d-4409-9c12-cd0296971254)


 
## Features

- Chat with Gemini API: Users can describe their ideal shoe, and the system will recommend options based on their prompts.
- 2D Virtual Try-On: After selecting a shoe, users can see how it would look on their feet in a 2D environment.
- Fantastic UI: Shoezap features a modern, user-friendly interface that enhances the shopping experience.
- Background Removal: Clean and professional product images with backgrounds automatically removed.
- Real-time Object Detection: YOLOv8 is used for accurate and efficient shoe detection and virtual try-on placement.

## Technology Stack
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png" alt="Flask" title="Flask"/></code>
</div>

- Backend:
  - Flask: A lightweight Python web framework used to build the backend API for the application.
  - Gemini API: Powers the chat functionality, enabling natural language processing and shoe recommendations.

- Frontend:
  - HTML/CSS/JavaScript: For building the interactive and responsive user interface.
  
- Machine Learning Models:
  - YOLOv8: Used for shoe detection and positioning in the virtual try-on feature.
  - Background Remover: Removes the background from shoe images for a cleaner visual presentation.
  - Text2Image: Generates images of shoes based on user prompts, creating a visual representation of the description provided.

## Installation

### Prerequisites

- Python 3.x
- Flask
- YOLOv8
- Node.js and npm (for managing frontend dependencies)
- A virtual environment (recommended)

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/Abishekmrgstar/shoezap.git
   cd shoezap
2. *Create and activate a virtual environment:*:
   ``` bash
     python -m venv venv
     source venv/bin/activate  # On Windows, use venv\Scripts\activate
3. Install backend dependencies:::
   ```bash
    pip install -r requirements.txt
4. *GO TO /flask_clone/Gemini-Bot DIRECTORY :*
```bash
   cd flask_clone
   cd Gemini-Bot

```
## Download `best.pt` File
### and kindly edit code in all py files and js based on the correct file path

You can download the `best.pt` file from the following link and store in gemini-bot file:

[Download best.pt](https://drive.google.com/file/d/10bGUTIv01ES-RzUPWLUPV9KmCjf9M0E1/view?usp=sharing)
  
       
5. **Run web app **:
    ```bash
      python app.py

## Usage

### Open the application:
Navigate to the URL where the Flask server is running (e.g., [http://127.0.0.1:8080/](http://127.0.0.1:8080/)).
![image](https://github.com/user-attachments/assets/1ffd84ed-55da-4e0c-9191-f1640616c747)

### Chat with the Gemini API:
1. Enter a description of your ideal shoe in the chat interface.
2. The system will suggest shoes based on your input.
3. ![image](https://github.com/user-attachments/assets/8864e4b2-eef2-4c4f-9ce1-0e2701fb7c5f)

### Virtual Try-On:
1. Select a shoe from the recommendations.
   ![image](https://github.com/user-attachments/assets/92ccf2c7-27af-4ae4-ad1b-783b71854f6a)

2. Use the virtual try-on feature to see how the shoe looks in 2D on your feet.

![image](https://github.com/user-attachments/assets/e00c5780-69d8-460b-a21c-544eaa900b6a)


![iWITHSHOES](https://github.com/user-attachments/assets/400888d6-fb6a-41f6-bca8-85fca84051c3)



## Models Used
- YOLOv8: For detecting the shoe in images and accurately placing it on the user's foot in the virtual try-on.
- Background Remover: Removes unnecessary background from shoe images to provide a clean visual.
- Text2Image: Converts text descriptions into shoe images, helping users visualize their desired shoes.
![image](https://github.com/user-attachments/assets/a4bd3c2e-b4cf-4a17-898e-b5becefa5527)
![image](https://github.com/user-attachments/assets/46144ba8-c88f-45a7-9d62-903c60d6edc6)

## BEFORE
![blue](https://github.com/user-attachments/assets/5928fb5a-f37b-4303-9795-9c638212a06e)

## AFTER
![image](https://github.com/user-attachments/assets/0a0c0ef0-5790-43ca-8919-1d943b057290)




## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
- YOLOv8 for providing the object detection framework.
- Flask for the web framework.
- Gemini API for powering the chat functionality.

### Collaborators

- **[PriyaDharshini22-2005](https://github.com/PriyaDharshini22-2005)**
- **[Devakesavan](https://github.com/Devakesavan)**
- **[Dhatchayani2006](https://github.com/Dhatchayani2006)**
- **[Abishek Arun](https://github.com/Abishekmrgstar/)**
## Contact

For any inquiries, please contact us at [byteknightsbk24@gmail.com](mailto:byteknightsbk24@gmail.com)
