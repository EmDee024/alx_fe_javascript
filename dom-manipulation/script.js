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
// Array of quotes
const quotes = [
  { text: "Believe you can and you're halfway there.", category: "Motivation" },
  { text: "Happiness is not by chance, but by choice.", category: "Happiness" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", category: "Motivation" },
  { text: "Do something today that your future self will thank you for.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  if (quotes.length === 0) return; // handle empty array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Update DOM
  const quoteEl = document.getElementById("quote");
  const categoryEl = document.getElementById("category");

  if (quoteEl) quoteEl.textContent = quote.text;
  if (categoryEl) categoryEl.textContent = quote.category;
}

// Function to add a new quote
function addQuote(text, category) {
  if (!text || !category) return;
  quotes.push({ text, category });
}

// Function to create the form dynamically
function createAddQuoteForm() {
  const form = document.createElement("form");
  form.id = "add-quote-form";

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = "new-quote-text";
  textInput.placeholder = "Enter quote text";

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.id = "new-quote-category";
  categoryInput.placeholder = "Enter category";

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.textContent = "Add Quote";

  submitBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    const category = categoryInput.value.trim();
    if (text && category) {
      addQuote(text, category);
      displayRandomQuote();
      textInput.value = "";
      categoryInput.value = "";
    } else {
      alert("Please enter both text and category!");
    }
  });

  form.append(textInput, categoryInput, submitBtn);
  document.body.appendChild(form);
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  createAddQuoteForm();

  // Create a button for random quote
  const btn = document.createElement("button");
  btn.id = "new-quote-btn";
  btn.textContent = "Show Random Quote";
  btn.addEventListener("click", displayRandomQuote);
  document.body.appendChild(btn);

  // Add placeholders for quote display
  const quoteDisplay = document.createElement("p");
  quoteDisplay.id = "quote";
  const categoryDisplay = document.createElement("p");
  categoryDisplay.id = "category";

  document.body.appendChild(quoteDisplay);
  document.body.appendChild(categoryDisplay);

  // Display a random quote initially
  displayRandomQuote();
});
