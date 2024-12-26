
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ msg: "hello node js" });
});


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT} !!`);
});
