let text_area = document.querySelector('textarea');
let all_chats = document.querySelector('div.chats');
let ask_btn = document.querySelector('button#submit');
const excludedPrompts = ['hi', 'hii', 'hiiii', 'helloo', 'hello', 'heyyy', 'hey', 'how are you'];

// Function to display a popup notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '15px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);

    // Remove the notification after 3 seconds
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// Get response via fetch from the server
async function get_response(query) {
    let response = await fetch("/chat", {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ query })
    });
    return response.json();
}

ask_btn.addEventListener("click", async () => {
    let query = text_area.value;
    text_area.value = "";
    ask_btn.disabled = true;
    ask_btn.firstElementChild.style.opacity = "0.8";
    
    // Hide the "Helloo" message on first prompt
    document.getElementById("welcome_message").style.display = "none";
    document.querySelector(".subtitle").style.display = "none";

    // Create a new chat container
    let chatContainer = document.createElement('div');
    chatContainer.setAttribute("class", "chat");

    // User part
    let user_query = document.createElement('div');
    user_query.setAttribute('class', 'user');

    // Create a div for the user avatar
    let user_avatar_div = document.createElement('div');
    user_avatar_div.innerHTML = `<img class="avatar" src="static/person_avatar.png" style="margin-left: auto;"/> <span></span>`;

    let user_question = document.createElement('p');
    user_question.innerText = query;
    user_query.append(user_question, user_avatar_div);

    // Gemini-Bot/Gemini part
    let gemini_response = document.createElement('div');
    gemini_response.setAttribute('class', 'gemini');
    let gemini_avatar_div = document.createElement('div');
    gemini_avatar_div.innerHTML = `<img class="avatar" src="static/logo.png"/><span></span>`;
    let gemini_ans = document.createElement('p');
    gemini_ans.innerHTML = "<div id='loading_div'>Generating your content<span id='loading'></span></div>";
    gemini_response.append(gemini_avatar_div, gemini_ans);

    chatContainer.append(user_query);
    chatContainer.append(gemini_response);
    all_chats.append(chatContainer);

    // Get the chatbot's response
    const response = await get_response(query);
    gemini_ans.innerHTML = response; // Set the chatbot's response

    // Only show the image if the query is not in the excluded prompts
    if (!excludedPrompts.includes(query.toLowerCase())) {
        showMatchingImage(chatContainer); // Pass the chat container to the function
    }

    ask_btn.disabled = false;
    ask_btn.firstElementChild.style.opacity = "1";

    // To retrieve all the items after refresh, using sessionStorage to store them
    setTimeout(() => {
        if (sessionStorage.getItem("query_array_7_48")) {
            let queries = JSON.parse(sessionStorage.getItem("query_array_7_48"));
            queries.push(chatContainer.outerHTML); // Store the entire chat container
            sessionStorage.setItem("query_array_7_48", JSON.stringify(queries));
        } else {
            sessionStorage.setItem("query_array_7_48", JSON.stringify([chatContainer.outerHTML]));
        }
    }, 0);
});

text_area.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        ask_btn.click();
    }
});

window.addEventListener("load", () => {
    let whole_html = "";
    let firstPromptGiven = false;

    if (sessionStorage.getItem("query_array_7_48")) {
        let queries = JSON.parse(sessionStorage.getItem("query_array_7_48"));
        if (queries.length > 0) {
            firstPromptGiven = true;
        }
        for (query of queries) {
            whole_html += query;
        }
    }

    all_chats.innerHTML = whole_html;

    // Show "Helloo" message if no prompt has been given yet
    if (!firstPromptGiven) {
        document.getElementById("welcome_message").style.display = "block";
        document.querySelector(".subtitle").style.display = "block";
    }
});

function showMatchingImage(chatContainer) {
    // Create and show the loading animation
    const loadingDiv = document.createElement('div');
    loadingDiv.setAttribute('id', 'loading_div');
    loadingDiv.innerHTML = `
        Generating image...<span id='loading'></span>
    `;

    // Append the loading animation to the chat container
    chatContainer.appendChild(loadingDiv);

    fetch('/run-script', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        // Remove the loading animation
        chatContainer.removeChild(loadingDiv);

        if (data.status === 'success') {
            const timestamp = new Date().getTime();

            // Create the image container
            const imageContainer = document.createElement('div');
            imageContainer.setAttribute('id', 'image_container');
            imageContainer.style.textAlign = 'center';
            imageContainer.style.display = 'block';
            imageContainer.style.padding = '0 0 50px 0';
            imageContainer.style.marginTop = '10px';

            const outputImage = document.createElement('img');
            outputImage.setAttribute('id', 'output_image');
            outputImage.src = `static/output.png?t=${timestamp}`;
            outputImage.alt = "Generated Image";
            outputImage.style.maxWidth = '50%';
            outputImage.style.height = 'auto';

            // Create the "Virtual Try On" button
            const tryOnButton = document.createElement('button');
            tryOnButton.innerText = "Virtual Try On";
            tryOnButton.style.marginTop = '10px'; 
            tryOnButton.style.backgroundColor = 'red';
            tryOnButton.style.color = 'white';
            tryOnButton.style.border = 'none';
            tryOnButton.style.padding = '10px 20px';
            tryOnButton.style.cursor = 'pointer';
            tryOnButton.style.display = 'block';
            tryOnButton.style.marginLeft = 'auto';
            tryOnButton.style.marginRight = 'auto';
            
            // Attach click event to run the Virtual Try On script
            tryOnButton.addEventListener('click', () => {
                const tryOnLoadingDiv = document.createElement('div');
                tryOnLoadingDiv.setAttribute('id', 'loading_div');
                tryOnLoadingDiv.innerHTML = `
                    Processing Virtual Try On...<span id='loading'></span>
                `;

                // Append the loading animation to the chat container
                chatContainer.appendChild(tryOnLoadingDiv);

                fetch('/virtual-try-on', {
                    method: 'POST'
                })
                .then(response => response.json())
                .then(data => {
                    // Remove the loading animation
                    chatContainer.removeChild(tryOnLoadingDiv);

                    if (data.status === 'success') {
                        // Create the output image container
                        const tryOnImageContainer = document.createElement('div');
                        tryOnImageContainer.setAttribute('id', 'tryon_image_container');
                        tryOnImageContainer.style.textAlign = 'center';
                        tryOnImageContainer.style.display = 'block';
                        tryOnImageContainer.style.padding = '0 0 50px 0';
                        tryOnImageContainer.style.marginTop = '10px';

                        const tryOnImage = document.createElement('img');
                        tryOnImage.setAttribute('id', 'tryon_output_image');
                        tryOnImage.src = `static/manoutput.png?t=${timestamp}`;
                        tryOnImage.alt = "Virtual Try On Output";
                        tryOnImage.style.maxWidth = '50%';
                        tryOnImage.style.height = 'auto';

                        // Append the image to the container
                        tryOnImageContainer.appendChild(tryOnImage);

                        // Append the container to the chat container
                        chatContainer.appendChild(tryOnImageContainer);
                    } else {
                        alert('Failed to execute Virtual Try On script: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    chatContainer.removeChild(tryOnLoadingDiv);
                });
            });

            // Append the image and button to the image container
            imageContainer.appendChild(outputImage);
            imageContainer.appendChild(tryOnButton);
            
            chatContainer.appendChild(imageContainer);
        } else {
            alert('Failed to execute script: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        chatContainer.removeChild(loadingDiv);
    });
}

function deleteChats() {
    // Clear the chat area
    all_chats.innerHTML = "";

    // Clear the chat history from sessionStorage
    sessionStorage.removeItem("query_array_7_48");

    // Show the "Helloo" message again
    document.getElementById("welcome_message").style.display = "block";
    document.querySelector(".subtitle").style.display = "block";
}

// Handle file upload
function handleFileUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                showNotification('Image successfully uploaded');
            } else {
                showNotification('Failed to upload image: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Error uploading image');
        });
    }
}

// Add event listener to the file input
document.getElementById('file_upload').addEventListener('change', handleFileUpload);