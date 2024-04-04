
import jwt from 'jsonwebtoken';


import Token from '../model/token.js';

const ACCESS_SECRET_KEY='de37bbab03b0380009e4b2f9c6fa6dcf95ae3acfc63125ce7b580d8d490eb6f92579843a4ce44011998dbec04fab568e5de224b042b2c2cf284acfbe03f1f4a6'
const REFRESH_SECRET_KEY='a60327222ffaa884573490fc0574d69f3f5d1925a98479fb4ef184ebc99fab84cbb9edcc41434b58a07b66188a75152916ed7b46b2031afa5b5c0f046cacb726'

export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) {
        return response.status(401).json({ msg: 'token is missing' });
    }

    jwt.verify(token, ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            return response.status(403).json({ msg: 'invalid token' })
        }

        request.user = user;
        next();
    })
}

export const createNewToken = async (request, response) => {
    const refreshToken = request.body.token.split(' ')[1];

    if (!refreshToken) {
        return response.status(401).json({ msg: 'Refresh token is missing' })
    }

    const token = await Token.findOne({ token: refreshToken });

    if (!token) {
        return response.status(404).json({ msg: 'Refresh token is not valid'});
    }

    jwt.verify(token.token, REFRESH_SECRET_KEY, (error, user) => {
        if (error) {
            response.status(500).json({ msg: 'invalid refresh token'});
        }
        const accessToken = jwt.sign(user, ACCESS_SECRET_KEY, { expiresIn: '15m'});

        return response.status(200).json({ accessToken: accessToken })
    })


}