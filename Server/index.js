import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router  from './routes/post.js';

const app = express();


app.use(bodyParser.json({limit:'30mb', extended:'true'}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:'true'}));
app.use(cors());
app.use('/post',router);

mongoose.connect('mongodb+srv://mohemed:ijas1420@cluster0.wt5qu7d.mongodb.net/merntutorial?retryWrites=true&w=majority',{
    useNewUrlParser:true, 
    useUnifiedTopology:true
});

app.listen(3001,()=>{
    console.log('server runs');  
});