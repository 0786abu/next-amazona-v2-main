import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://saher79129:VC99sEf0yjVWWOk5@cluster0.czc0f5h.mongodb.net/nextamazona?retryWrites=true&w=majority&appName=Cluster0")
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default dbConnect
