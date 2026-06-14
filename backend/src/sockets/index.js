import { Server } from 'socket.io';
export function attachSockets(server){const io=new Server(server,{cors:{origin:process.env.CLIENT_ORIGIN||'http://localhost:5173',credentials:true}});io.on('connection',(socket)=>{socket.on('join',room=>socket.join(room));socket.on('message',payload=>io.to(payload.chatId).emit('message',payload));});return io;}
