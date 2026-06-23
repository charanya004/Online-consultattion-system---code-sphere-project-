const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {

    const { name, password } = req.body;

    if (name && password) {
        res.json({
            message: "Login Successful"
        });
    } else {
        res.json({
            message: "Enter details"
        });
    }

});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.get('/appointment', (req, res) => {
    res.sendFile(__dirname + '/appointment.html');
});
