
const express = require('express');
const dbconnect = require('./config/db');
const { userRouter } = require('./router/user_router');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ msg: "hello node js" });
});


app.use("/user", userRouter)

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT} !!`);
    dbconnect();
});
