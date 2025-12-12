// Our array of quotes
let quotes = [
  { text: "Growth begins at the edge of your comfort zone.", category: "Motivation" },
  { text: "Healing is not linear.", category: "Healing" },
  { text: "Happiness is a daily choice.", category: "Happiness" }
];

// Get DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");

// Function 1: Show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "No quotes available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p><strong>Category:</strong> ${quote.category}</p>
    <blockquote>${quote.text}</blockquote>
  `;
}

// Function 2: Add new quote dynamically
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText === "" || newCategory === "") {
    alert("Fill both fields, abeg 🙏");
    return;
  }

  // Add new quote to array
  quotes.push({
    text: newText,
    category: newCategory
  });

  // Clear inputs
  textInput.value = "";
  categoryInput.value = "";

  alert("Quote added successfully!");
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// Show a quote immediately on page load
showRandomQuote();
