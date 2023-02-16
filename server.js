const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

let MEDICAL_BILLS = [];

app.get("/items", (req,res) => {
    res.send(MEDICAL_BILLS);
})  

app.post("/items", (req,res) => {
    const { name, address, hospital, date, bill } = req.body;
    
    // Fields cannot be empty
    if (!name || !address || !hospital || !date || !bill) {
        res.status(400).json("Failed. All fields required.");
    } else {
        const data = {
            name: name,
            address: address,
            hospital: hospital,
            date: date,
            bill: bill,
        }

        MEDICAL_BILLS.push(data);
        res.send(data);
    }
})

app.listen(port, () => {
    console.log("Server started at port:", port);
});