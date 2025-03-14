function toggleChat() {
    let chatContainer = document.getElementById("chat-container");
    let chatToggle = document.getElementById("chat-toggle");

    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
        chatToggle.style.display = "none";
    } else {
        chatContainer.style.display = "none";
        chatToggle.style.display = "block";
    }
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return;

    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    let botResponse = getBotResponse(userInput);
    chatBox.innerHTML += `<p><strong>NateBot:</strong> ${botResponse}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm here to help!",
        "what is your name": "I'm NateBot, your friendly assistant!",
        "bye": "Goodbye! Have a great day!",

        // Eric's Background
        "tell me about eric": "Eric Nathaniel is an aspiring cybersecurity architect with experience in IT, business continuity, and technical support. How else can I help?",
        "what is eric's experience?": "Eric has worked as a Tech Specialist at Apple, an intern at Metroplus Health, and a Sales Associate at Snipes. Would you like details on a specific role?",
        "where did eric study?": "Eric is currently studying Computer Technology at Bowie State University.",
        "show me eric's resume": "Sure! You can view it here: [Insert Resume Link].",

        // Navigation
        "help me navigate the site": "I can take you to different sections: Home, Experience, Education, or Contact. Where would you like to go?",

        // Skills Section (Fixed)
        "what are eric's skills": "Eric has expertise in IT support, cybersecurity, and business continuity.",
        "what technical skills does eric have": "Eric specializes in network security, risk assessment, and troubleshooting IT systems.",
        "does eric have cybersecurity knowledge": "Yes! Eric has a strong background in cybersecurity, including ethical hacking and vulnerability management.",
        "what programming languages does eric know": "Eric is familiar with Java, Python, HTML, CSS, and JavaScript.",
        "what soft skills does eric have": "Eric excels in communication, leadership, and teamwork.",
        "does eric have leadership experience": "Yes! Eric has experience managing teams and leading IT projects.",

        // Default response
        "default": "I'm not sure about that. Try asking about Eric's experience, education, skills, or resume."
    };

    return responses[input.toLowerCase()] || responses["default"];
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}