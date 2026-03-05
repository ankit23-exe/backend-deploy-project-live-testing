import express from 'express';


const app = express();
const port = 3000; 
app.get('/', async (req, res) => {
  try {
    res.send("hellow this is working fine");
  } catch (err) {
    res.status(500).send('Error interacting with Redis');
  }
});

app.get('/health', async (req, res) => {

    res.send("health is good");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



