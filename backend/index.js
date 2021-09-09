
const express= require('express');
const cors= require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let students = [
    {   id:1,
        name:'deepak',
        email:'abc@a.com',
        mobie:854564,
        clss:'x',
        percent:90,
        dob:"12-02-2002"

    }
];

app.post('/add',(req,res)=>{
    res.json(200);
})
app.get('/delete/:id',(req,res)=>{
    res.send(200);
})
app.get('/view',(req,res)=>{
    res.json(students)
} )
app.listen(3001, ()=>{
    console.log("server is running");
})