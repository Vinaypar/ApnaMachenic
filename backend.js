async function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
    document.getElementById("userInput").value = "";

    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    chatbox.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;

    if (data.action === "booking") {
        chatbox.innerHTML += `<div><strong>Bot:</strong> Please provide your vehicle type, issue, and preferred date/time.</div>`;
    }
}
