const http=require("http");
const express =require('express');
const path=require('path')
const {Server}=require("socket.io");
const { Socket } = require("dgram");


const app=express();
const server=http.createServer(app);
const io=new Server(server)


// Socket.io
io.on('connection',(socket)=>{
    //  console.log("A new User has Connected ",socket.id)

    socket.on('user-message',(message)=>{
        // console.log("A new User message",message)
        io.emit('message',message)
    })
})

app.use(express.static(path.resolve("./public")))

app.get('/',(req,res)=>{
    res.sendFile("/public/index.html")
})

server.listen(9000,()=>{
    console.log("Server started at port")
})


