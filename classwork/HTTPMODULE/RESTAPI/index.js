import express from "express";

const app = express();

app.use(express.json());

let users = [
    {
        id: 1,
        name: "A",
        email: "abcd@gmail"
    },
    {
        id: 2,
        name: "B",
        email: "bcd@gmail"
    }
];

// GET - Get all users
app.get("/users", (req, res) => {
    res.json(users);
});


// POST - Create a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


// PUT - Update a user
app.put("/users/:id", (req, res) => {

    const user = users.find(
        u => u.id == req.params.id
    );

    // Check if user exists
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json({
        message: "User updated",
        user: user
    });
});


// Start server
app.listen(8000, () => {
    console.log("Server running at http://localhost:8000/users");
});
//create restapi for 100 products with name price 