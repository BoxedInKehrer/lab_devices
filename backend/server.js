const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for frontend communication

const PORT = process.env.PORT || 5000;

// Mock data
const data = {
    categories: [
        {
            id: 1,
            name: "Electronics",
            subcategories: [
                {
                    id: 101,
                    name: "Smartphones",
                    attributes: [
                        {
                            name: "Brand",
                            values: ["Apple", "Samsung", "Xiaomi"]
                        },
                        {
                            name: "OS",
                            values: ["iOS", "Android"]
                        }
                    ]
                },
                {
                    id: 102,
                    name: "Laptops",
                    attributes: [
                        {
                            name: "Brand",
                            values: ["Dell", "HP", "Lenovo"]
                        },
                        {
                            name: "RAM",
                            values: ["8GB", "16GB", "32GB"]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Home Appliances",
            subcategories: [
                {
                    id: 201,
                    name: "Refrigerators",
                    attributes: [
                        {
                            name: "Brand",
                            values: ["Whirlpool", "Samsung", "LG"]
                        },
                        {
                            name: "Type",
                            values: ["Top Freezer", "Bottom Freezer", "Side-by-Side", "French Door"]
                        }
                    ]
                },
                {
                    id: 202,
                    name: "Microwaves",
                    attributes: [
                        {
                            name: "Brand",
                            values: ["Panasonic", "Samsung", "LG"]
                        },
                        {
                            name: "Capacity",
                            values: ["20L", "25L", "30L"]
                        }
                    ]
                }
            ]
        }
        // Additional categories and subcategories can be added here
    ]
};


app.get('/categories', (req, res) => {
    res.json(data.categories);
});

// Additional endpoints as needed

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
