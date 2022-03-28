const express = require ('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.use(express.static(path.join(__dirname, 'assets')));

// Listening on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`),
  // console.log('Follow this link to get there http://localhost:3001/api/db 🚀')
);
