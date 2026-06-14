import jwt from 'jsonwebtoken';
export const signAccessToken=(user)=>jwt.sign({sub:user.id,role:user.role},process.env.JWT_ACCESS_SECRET||'dev-access',{expiresIn:'15m'});
export const signRefreshToken=(user)=>jwt.sign({sub:user.id,typ:'refresh'},process.env.JWT_REFRESH_SECRET||'dev-refresh',{expiresIn:'30d'});
