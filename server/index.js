let express = require('express')
let fs = require('fs');
let bodyParser = require('body-parser');

let app = express()

app.use(bodyParser.json())

app.get('/location',(req,res)=>{
    fs.readFile("./db.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        let json = JSON.parse(jsonString)
        res.send(json)
      });
})

app.post('/location', (req, res) => {
    const newItem = req.body;
  
    fs.readFile("./db.json", 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading database file');
      }
  
      const db = JSON.parse(data);
    //   console.log(db)
    console.log(newItem)
      db.location.push(newItem);
  
      fs.writeFile('./db.json', JSON.stringify(db), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error writing to database file');
        }
  
        res.json(newItem);
      });
    });
  });





app.listen(5000,()=>{
    console.log("listening on port 5000")
})