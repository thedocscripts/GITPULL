const express = require('express');
const app = express();
const {exec} = require('child_process');

app.use(express.urlencoded({extended: false}))






app.post('/arttribe/push', function(req, res){
    exec("cd C:/Users/thedoc/Documents/ATTTRIBE && git pull", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`ACABAS DE PULEAR PERRO`);
        console.log("ACABAS DE PULEAR PERRO")
    });
})


app.listen(5000, function(){
    console.log("http://127.0.0.1:5000")
})