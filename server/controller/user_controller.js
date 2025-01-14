const User = require("../models/user_schema");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const Signup = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(403).json({ msg: "User Already Registered !!", user })
        }
        else {
            const hash = await bcrypt.hash(password, 10);
            req.body.password = hash;
            user = await User.create(req.body);
            const tokenData = {
                email: user.email,
                id: user.id,
                username: user.username,
            };
            const token = jwt.sign(tokenData, "private-key");
            return res.status(201).json({
                msg: "User created",
                user: user,
                token,
            });
        }
    }
    catch (error) {
        res.status(500).json({ msg: "Error !!", error: error.message });
    }
}

const Login = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Email and Password are required!" });
    }
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User Not Found !!" });
        }
        if (!user.password) {
            return res.status(500).json({ msg: "User password not found in the database" });
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ msg: "Invalid Password !!" });
        }
        let data = {
            email: user.email,
            id: user.id,
            username: user.username,
        };
        let token = await jwt.sign(data, "private-key", { expiresIn: '1h' });
        return res.status(200).json({
            msg: "User logged in",
            token: token,
            email: email,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error !!", error: error.message });
    }
};


const GetUser = async (req, res) => {
    let user = await User.find();
    res.status(200).json(user);
};

const deleteuser = async (req, res) => {

    let { id } = req.params

    try {
        let user = await User.findByIdAndDelete(id)
        res.status(200).json({ msg: "Delete user", user })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ msg: "Server Error", error })

    }

}

module.exports = { Signup, Login, GetUser, deleteuser };
