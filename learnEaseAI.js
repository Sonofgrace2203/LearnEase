

// Iinput variables
const topicInput = document.getElementById("topicInput");
const pdfInput = document.getElementById("pdfInput");
const submitBtn = document.getElementById("submitBtn");

// button options variables
const explainBtn = document.getElementById("explainBtn");
const summarizeBtn = document.getElementById("summarizeBtn");
const quizBtn = document.getElementById("quizBtn");

// output container variables
const explanationContainer = document.getElementById("explanationContainer");
const explanationContent = document.getElementById("explanationContent");

const quizContainer = document.getElementById("quizContainer");
const quizContent = document.getElementById("quizContent");


// Keep track of selected options
let selectedActions = {
    explain: false,
    summarize: false,
    quiz: false
};


// Toggle Button Function
function toggleAction(button, key) {
    button.classList.toggle("active");

    // Update selection state
    selectedActions[key] = button.classList.contains("active");
}


// Apply toggle listeners
explainBtn.addEventListener("click", () => toggleAction(explainBtn, "explain"));
summarizeBtn.addEventListener("click", () => toggleAction(summarizeBtn, "summarize"));
quizBtn.addEventListener("click", () => toggleAction(quizBtn, "quiz"));


// TEMPORARY PDF text extractor
function extractPDFText(file) {
    return new Promise((resolve) => {
        // Placeholder text until you integrate a backend
        resolve("<< Extracted text from uploaded PDF >>");
    });
}


// SUBMIT BUTTON HANDLER
submitBtn.addEventListener("click", async () => {

    const textNote = topicInput.value.trim();
    const file = pdfInput.files[0];

    // Validate options
    if (!selectedActions.explain && !selectedActions.summarize && !selectedActions.quiz) {
        alert("Please select at least one option: Explain, Summarize, or Generate Quiz.");
        return;
    }

    // Validate input (text or PDF)
    if (!textNote && !file) {
        alert("Please enter a topic/notes or upload a PDF.");
        return;
    }
}

    // Reset display
    explanationContent.innerHTML = "";
quizContent.innerHTML = "";
explanationContainer.style.display = "none";
quizContainer.style.display = "none";

// Process PDF if uploaded
let pdfText = "";
if (file) {
    pdfText = await extractPDFText(file);
}

// Combine text + pdfText
const finalText = textNote + "\n" + pdfText;

// Show loaders for selected actions
if (selectedActions.explain) {
    explanationContainer.style.display = "block";
    explanationContent.innerHTML = "<p>Loading explanation...</p>";
}

if (selectedActions.quiz) {
    quizContainer.style.display = "block";
    quizContent.innerHTML = "<p>Generating quiz...</p>";
}

// Fake API wait time (you will replace with real backend fetch)
setTimeout(() => {

    if (selectedActions.explain) {
        explanationContent.innerHTML = `
                <p>This is a placeholder explanation based on your provided notes.</p>
            `;
    }
});



// fetching data from the backend
const form = document.getElementById("askForm");
const promptInput = document.getElementById("prompt");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const prompt = promptInput.value;

    try {
        const res = await fetch("http://localhost:3000/api/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        outputDiv.textContent = data.response;
    } catch (err) {
        console.error("Error:", err);
        outputDiv.textContent = "Something went wrong!";
    }
});
