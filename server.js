const express = require ('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();



// ***************************************************************************************************************************//

/* At the top, with other redirect methods before other routes redirects http to https */

// COMMENT OUT FOR DEVELOPMENT

app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://www.thomburt.com'+req.url)
  else
    next() 
})




// ***************************************************************************************************************************//

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.use(express.static(path.join(__dirname, 'assets')));

// Listening on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`),
  // console.log('Follow this link to get there http://localhost:3001/api/db 🚀')
);
