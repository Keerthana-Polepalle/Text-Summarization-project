async function summarizeText() {
    let inputText = document.getElementById("inputText").value;
    let button = document.querySelector("button");

    if (inputText.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    // Disable button to prevent multiple submissions
    button.disabled = true;
    button.innerText = "Summarizing...";

    let response = await fetch('/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText })
    });

    let data = await response.json();
    document.getElementById("summaryText").innerText = data.summary;

    // Re-enable button
    button.disabled = false;
    button.innerText = "Summarize";
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", summarizeText);
});
document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent accidental form submissions
});
