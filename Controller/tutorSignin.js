const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const Tutor = require('../Model/tutor');

const secreat = "vasi"
const signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const OldUser = await Tutor.findOne(({ email }))
        if (OldUser)
            return res.status(400).json({ message: "User already Exist" })

        const hashpassword = await bcrypt.hash(password, 12)

        const result = await Tutor.create({
            email,
            password: hashpassword,
            name,
        });

        const token = jwt.sign({ email: result.email, id: result._id }, secreat, { expiresIn: "1h" })
        return res.status(201).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: "Something went Wrong" })
        console.log(error)

    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const OldUser = await Tutor.findOne({ email });
        if (!OldUser) {
            return res.status(400).json({ message: "User Does not exist!" });
        }
        const ispasswordCorrect = await bcrypt.compare(password, OldUser.password);
        if (!ispasswordCorrect) {
            return res.status(400).json({ message: "Invalid credientials" });
        }
        const token = jwt.sign({ email: OldUser.email, id: OldUser._id }, secreat,{ expiresIn: '1h' });
        res.status(200).json({ result: OldUser, token })
    } catch (error) {
        res.status(500).json({ message: "Something went Wrong" })
        console.log(error)

    }
}




module.exports = signUp;
module.exports = signin;
