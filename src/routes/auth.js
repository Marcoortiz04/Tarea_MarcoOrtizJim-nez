import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { get_db } from '../db.js';

const router = express.Router();


function get_user_by_email(db, email) {
    return new Promise((resolve, reject) => {
        db.get("SELECT id, email, password_hash FROM users WHERE email = ?", [email], (err, user) => {
            if (err) return reject(err);
            resolve(user);
        });
    });
}


router.post('/signup', async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

    try {
        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);
        const db = get_db();
        
        db.run("INSERT INTO users (email, password_hash) VALUES (?, ?)", [email, password_hash], function(err) {
            if (err) {
                if (err.message.includes("UNIQUE constraint failed")) {
                    return res.status(409).json({ error: "Email already exists" });
                }
                return res.status(500).json({ error: `Database error: ${err.message}` });
            }
            return res.status(201).json({ id: this.lastID, email: email });
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const db = get_db();
        
   
        const user = await get_user_by_email(db, email);
        if (!user) {
          
            return res.status(401).json({ error: "Invalid credentials" }); 
        }

        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const secret = process.env.JWT_SECRET || "mi_secreto_super_seguro"; 
        const token = jwt.sign(
            secret, 
            { expiresIn: '1h' } 
        );

        return res.status(200).json({ token: token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

export const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Unauthorized: Token missing" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const secret = process.env.JWT_SECRET || "mi_secreto_super_seguro";
        const decoded = jwt.verify(token, secret);

        req.user = {
            id: decoded.sub
        };

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};

export default router;