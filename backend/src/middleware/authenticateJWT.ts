import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

function authenticateJWT(req: Request, res: Response, next: NextFunction): any {

    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid or expired token.' });
    }
}

export default authenticateJWT;
