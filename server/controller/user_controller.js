const User = require("../models/user_schema");


const Signup = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(403).json({ msg: "User Already Registered !!" })
        }
        else {
            user = await User.create(req.body);
            return res.status(201).json({ msg: "User Successfull Created !!" });
        }
    }
    catch (error) {
        res.status(500).json({ msg: "Error !!", error: error.message });
    }
}



const Login = async (req, res) => {

    let { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "User Not Found !!" });
        }

        let isMatch = await (password, user.password);

        if (!isMatch) {
            return res.status(404).json({ msg: "Invalid Password !!" });
        }


        return res.status(200).json({ msg: "User Log-In Successfull !!" });

    }
    catch (error) {
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

module.exports = { Signup, Login, GetUser, deleteuser};
