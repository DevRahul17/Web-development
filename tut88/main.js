//Introduction to Express Js
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/blog/:slug', (req, res) => {
    //For URL:
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.params.slug}`);
})
// app.get('/about', (req, res) =>{
//     res.send('Hello about');
// })
// app.get('/contact', (req, res) =>{
//     res.send('Hello contact');
// })
// app.get('/blog/into-to-js', (req, res) =>{
//     //logic to fetch intro to js from the db
//     res.send('Hello blog');
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})