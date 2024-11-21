// import json server

const jsonServer=require('json-server')

// create server for media player application

const Mpserver=jsonServer.create()

// create middleware
const middilware=jsonServer.defaults()

// set up route for json file in server
const route=jsonServer.router('db.json')

// set port for running server app
const PORT=3000 || process.env.PORT

Mpserver.use(middilware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`mediaplayer server running at port ${PORT} and waiting for client request`);
    
})