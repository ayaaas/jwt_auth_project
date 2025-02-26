import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt"; 
dotenv.config();

export async function signUp(req, resp) {
    const user = req.body;
    const salt = await bcrypt.genSalt();
    user.pwd = await bcrypt.hash(user.pwd, salt);
    await UserModel.create(user);
    resp.status(201).json({ "message": "utilisateur bien créé" });
}

export async function signIn(req, resp) {
    const user = await UserModel.findOne({ "email": req.body.email });
    if (user) {
        const result = await bcrypt.compare(req.body.pwd, user.pwd); // 
        if (result) {
            const jwtToken = jwt.sign({ "email": user.email }, process.env.SECRET_KEY, { expiresIn: "2h" });
            return resp.status(200).json(jwtToken);
        }
    }
    resp.status(401).json({ "message": "Invalid email or password" }); // 
}
