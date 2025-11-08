require('dotenv').config()


const express = require('express')  // importing expreess
const app = express()  
const port = 3000 // virtual port 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
  res.send('<h1>please login at rahul.com')
})
app.get('/signup',(req,res)=>{
  res.send('<h2> please signup at rahul.com')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`);
  
})

