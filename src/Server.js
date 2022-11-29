const hapi = require('@hapi/hapi');
const Routes = require('./Routes.js');
const Notes = require('./Notes.js');
const init=async()=>{
    const server = hapi.server({
        port: 5000,
        host:'localhost',
        routes: {
            cors: {
                origin: ['*'],
                credentials: true
            },
            
        }
    });

    
    server.route(Routes);

    await server.start();
    console.log(`Server Berjalan di ${server.info.uri}`);
}

init();