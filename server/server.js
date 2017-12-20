const express = require( 'express' );
const app = express();
const port = 23567;
app.use(express.static('server/public'));
app.listen( port, function(){
    console.log( 'server up on:', port );
}); 