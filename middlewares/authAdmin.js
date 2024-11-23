import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const atoken = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"
        if (!atoken) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        // Verify the token
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

        // Check if the email in the token payload matches the admin email
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: 'Forbidden. Invalid Admin Access.' });
        }

        // Proceed to the next middleware or route
        next();
    } catch (error) {
        console.error('Auth Admin Error:', error.message);
        res.status(401).json({ success: false, message: 'Invalid or Expired Token. Please Login Again.' });
    }
};

export default authAdmin;
