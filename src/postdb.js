const mongoose = require("mongoose");
async function main() {
  // mongoose.connect("mongod://localhost:27017/todolistDb", {
  //   useNewUrlParser: true,
  // });
  await mongoose.connect(
    "mongodb+srv://yashsuman04:Yash%400412@blogweb.mgqce.mongodb.net/BlogDB",
    { useNewUrlParser: true }
  );
  mongoose.set('strictQuery', false);

  // mongoose.connect("mongodb://127.0.0.1:27017/myblog") for local DB
  console.log("post connected");
}

main()
const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    thumbnail:String,
    date:Number,
    like:Number,
    likedby:[String]
    });
  
    

const PosT = mongoose.model("post", postSchema);
module.exports = PosT