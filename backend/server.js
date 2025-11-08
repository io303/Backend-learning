import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("server is working fine");
});
// get a list of five jokes
app.get('/api/jokess',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:'this as a funny jokes'
        },
          {
            id:2,
            title:'a2 joke',
            content:'this as a funny jokes2'
        },
          {
            id:3,
            title:'a joke3',
            content:'this as a funny jokes3'
        },
          {
            id:4,
            title:'a joke4',
            content:'this as a funny jokes4'
        },


    ];
    res.send(jokes)
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});