import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) mongoose.connect(MONGO_URI).then(()=>console.log('MongoDB connected')).catch(console.error);

const messageSchema = new mongoose.Schema({name:String,email:String,message:String,createdAt:{type:Date,default:Date.now}});
const Message = mongoose.model('Message', messageSchema);

app.post('/api/contact', async (req,res)=>{
  if(!MONGO_URI) return res.status(503).json({message:'MongoDB is not configured. Use the email/LinkedIn links for now.'});
  try{ await Message.create(req.body); res.json({message:'Message received'}); }catch(e){res.status(400).json({message:'Could not save message'});}
});

app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'..','dist','index.html')));
app.listen(process.env.PORT||5000,()=>console.log(`Server running on http://localhost:${process.env.PORT||5000}`));
