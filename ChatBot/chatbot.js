const form = document.getElementById("chatForm");
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("msg");

    if (sender === "user") {
        div.classList.add("msg--user");
    } else {
        div.classList.add("msg--bot");
    }

    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

async function getBotResponse(userMessage) {

    try {

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },

            body: JSON.stringify({
                model: "llama-3.1-8b-instant",

                messages: [
                    {
                        role: "system",
                        content: "You are a helpful AI assistant."
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ],

                temperature: 0.7,
                max_tokens: 200
            })

        });

        if (!response.ok) {
            const error = await response.json();
            console.log(error);
            throw new Error(error.error.message);
        }

        const data = await response.json();

        return data.choices[0].message.content;

    } catch (error) {

        console.error(error);

        return "Error: " + error.message;
    }
}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    const typing = document.createElement("div");
    typing.className = "msg msg--bot msg--typing";
    typing.textContent = "Typing...";
    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;

    const reply = await getBotResponse(text);

    typing.remove();

    addMessage(reply, "bot");
});