const express = require("express");
const app = express();
const port = 3000;

// Sample data
const items = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Chair", category: "Furniture" },
    { id: 3, name: "Camera", category: "Electronics" },
    { id: 4, name: "Notebook", category: "Stationery" },
];

// Route to handle filtering with query parameters
app.get("/api/items", (req, res) => {
    const searchQuery = req.query.search?.toLowerCase(); // Get the 'search' query parameter (if provided)

    // Filter items if a search query is provided
    let filteredItems = items;
    if (searchQuery) {
        filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery)
        );
    }

    // Respond accordingly
    if (filteredItems.length > 0) {
        res.json(filteredItems);
    } else {
        res.status(404).json({ message: "No items match the search criteria." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
