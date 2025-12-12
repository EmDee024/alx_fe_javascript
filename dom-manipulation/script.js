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
// Initial quotes array
let quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up."
];

// Load quotes from local storage on init
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Show a random quote
function showRandomQuote() {
  if (quotes.length === 0) return alert("No quotes available.");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').textContent = quote;

  // Optional: save last viewed quote in session storage
  sessionStorage.setItem('lastQuote', quote);
}

// Add new quote
function addQuote() {
  const input = document.getElementById('newQuote');
  const newQuote = input.value.trim();
  if (newQuote === "") return alert("Quote cannot be empty!");
  quotes.push(newQuote);
  saveQuotes();
  input.value = "";
  alert("Quote added!");
}

// Export quotes to JSON
function exportQuotes() {
  const data = JSON.stringify(quotes, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();
  URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      if (!Array.isArray(importedQuotes)) throw new Error("Invalid JSON format");
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    } catch (err) {
      alert('Failed to import quotes: ' + err.message);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

// Load quotes on page start
loadQuotes();

// Optional: load last viewed quote from session storage
const lastQuote = sessionStorage.getItem('lastQuote');
if (lastQuote) document.getElementById('quote').textContent = lastQuote;
// Initial quotes array with categories
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don't let yesterday take up too much of today.", category: "Productivity" },
  { text: "It's not whether you get knocked down, it's whether you get up.", category: "Resilience" }
];

// Load quotes and last selected category from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) quotes = JSON.parse(storedQuotes);

  const lastCategory = localStorage.getItem('lastCategory');
  if (lastCategory) document.getElementById('categoryFilter').value = lastCategory;

  populateCategories();
}

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Populate category dropdown dynamically
function populateCategories() {
  const select = document.getElementById('categoryFilter');
  const categories = [...new Set(quotes.map(q => q.category))];

  // Clear existing options except "All Categories"
  select.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  // Restore last selected category
  const lastCategory = localStorage.getItem('lastCategory');
  if (lastCategory) select.value = lastCategory;
}

// Show a random quote based on selected category
function showRandomQuote() {
  const filter = document.getElementById('categoryFilter').value;
  const filteredQuotes = filter === 'all' ? quotes : quotes.filter(q => q.category === filter);

  if (filteredQuotes.length === 0) return alert("No quotes available in this category.");
  
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  document.getElementById('quote').textContent = filteredQuotes[randomIndex].text;

  // Save last viewed quote in session storage
  sessionStorage.setItem('lastQuote', document.getElementById('quote').textContent);
}

// Add new quote
function addQuote() {
  const text = document.getElementById('newQuote').value.trim();
  const category = document.getElementById('newCategory').value.trim();

  if (!text || !category) return alert("Both quote and category are required.");

  quotes.push({ text, category });
  saveQuotes();
  populateCategories();
  document.getElementById('newQuote').value = '';
  document.getElementById('newCategory').value = '';
  alert("Quote added!");
}

// Filter quotes when category changes
function filterQuotes() {
  const filter = document.getElementById('categoryFilter').value;
  localStorage.setItem('lastCategory', filter);
  showRandomQuote();
}

// Export quotes to JSON
function exportQuotes() {
  const data = JSON.stringify(quotes, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();
  URL.revokeObjectURL(url);
}

// Import quotes from JSON
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      if (!Array.isArray(importedQuotes)) throw new Error("Invalid JSON format");
      importedQuotes.forEach(q => {
        if (!q.text || !q.category) throw new Error("Quotes must have text and category");
      });
      quotes.push(...importedQuotes);
      saveQuotes();
      populateCategories();
      alert('Quotes imported successfully!');
    } catch (err) {
      alert('Failed to import quotes: ' + err.message);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

// Load quotes and last viewed quote on page load
loadQuotes();
const lastQuote = sessionStorage.getItem('lastQuote');
if (lastQuote) document.getElementById('quote').textContent = lastQuote;
// Global variable to track selected category
let selectedCategory = 'all';

// Filter quotes when category changes
function filterQuotes() {
  selectedCategory = document.getElementById('categoryFilter').value;
  localStorage.setItem('lastCategory', selectedCategory);
  showRandomQuote();
}

// Show a random quote based on selected category
function showRandomQuote() {
  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  if (filteredQuotes.length === 0) return alert("No quotes available in this category.");
  
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  document.getElementById('quote').textContent = filteredQuotes[randomIndex].text;

  // Optional: save last viewed quote in session storage
  sessionStorage.setItem('lastQuote', document.getElementById('quote').textContent);
}
let quotes = [];
let selectedCategory = 'all';
const notification = document.getElementById('notification');
const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts'; // mock API

// --- Local Storage Handling ---
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) quotes = JSON.parse(storedQuotes);

  const lastCategory = localStorage.getItem('lastCategory');
  if (lastCategory) selectedCategory = lastCategory;

  populateCategories();
}

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// --- Populate categories dynamically ---
function populateCategories() {
  const select = document.getElementById('categoryFilter');
  const categories = [...new Set(quotes.map(q => q.category))];
  
  select.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  select.value = selectedCategory;
}

// --- Show random quote based on selected category ---
function showRandomQuote() {
  const filtered = selectedCategory === 'all' ? quotes : quotes.filter(q => q.category === selectedCategory);
  if (filtered.length === 0) return alert("No quotes available in this category.");
  
  const randomIndex = Math.floor(Math.random() * filtered.length);
  document.getElementById('quote').textContent = filtered[randomIndex].text;

  sessionStorage.setItem('lastQuote', document.getElementById('quote').textContent);
}

// --- Add new quote ---
function addQuote() {
  const text = document.getElementById('newQuote').value.trim();
  const category = document.getElementById('newCategory').value.trim();

  if (!text || !category) return alert("Both quote and category are required.");

  quotes.push({ text, category });
  saveQuotes();
  populateCategories();
  document.getElementById('newQuote').value = '';
  document.getElementById('newCategory').value = '';
  alert("Quote added!");
}

// --- Filter quotes ---
function filterQuotes() {
  selectedCategory = document.getElementById('categoryFilter').value;
  localStorage.setItem('lastCategory', selectedCategory);
  showRandomQuote();
}

// --- JSON Export/Import ---
function exportQuotes() {
  const data = JSON.stringify(quotes, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      imported.forEach(q => {
        if (!q.text || !q.category) throw new Error("Quotes must have text and category");
      });
      quotes.push(...imported);
      saveQuotes();
      populateCategories();
      alert('Quotes imported successfully!');
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
  };
  reader.readAsText(event.target.files[0]);
}

// --- Server Sync ---
async function fetchServerQuotes() {
  try {
    const response = await fetch(SERVER_URL);
    const serverData = await response.json();
    
    // Convert server data to our quote format (simulate)
    const serverQuotes = serverData.slice(0, 5).map(post => ({ text: post.title, category: 'Server' }));

    // Conflict resolution: server takes precedence
    const merged = [...quotes.filter(q => q.category !== 'Server'), ...serverQuotes];
    
    if (merged.length !== quotes.length) {
      notification.textContent = "Quotes updated from server!";
      setTimeout(() => notification.textContent = '', 3000);
    }

    quotes = merged;
    saveQuotes();
    populateCategories();
  } catch (err) {
    console.error("Failed to sync with server:", err);
  }
}

// --- Periodic Sync (every 30s) ---
setInterval(fetchServerQuotes, 30000);

// --- Initial Load ---
loadQuotes();
const lastQuote = sessionStorage.getItem('lastQuote');
if (lastQuote) document.getElementById('quote').textContent = lastQuote;
showRandomQuote();
