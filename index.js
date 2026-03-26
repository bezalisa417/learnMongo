const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db.js');
const User = require('./models/User.js');
const Comment = require('./models/Comment.js');
const Post = require('./models/Post.js');
//create
const createUser = async () => {
   const result =  await User.create({
    name: "bertrand",
    email: "bertrand@gmail.com",
    phone: 7234568234
   });

   console.log('user added successfully'+result)
}

//read
const readUser = async () => {
    const result = await User.find();
    console.log('our data are: '+result);

}

//update 
const updateUser  = async () => {
    const result = await User.findByIdAndUpdate("69c397ad4c7af87f18e31eaf",{
        name: "random"
    })

    console.log('user updated successfully'+result);

} 

//delete
const deleteUser = async () => {
    await User.findByIdAndDelete("69c397ad4c7af87f18e31eaf")

    console.log('user deleted successfully');
}



// seed blog data
const seedData= async() => {
    //clear database
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany(); 

    console.log('data cleared successfully')

    //create account
    const user1 = await User.create({
        name: "lisa",
        email: "lisa@gmail.com",
        phone: 7111111111
    })

    const user2 = await User.create ({
        name:"joyce",
        email:"joyce@gmail.co",
        phone:7222222222
    })

    console.log('accounts created successfully');

    //create a post 
    const post1 = await Post .create({
        title:"Let me ask you something!",
        body: "How is the internship?",
        author: user1._id
    })

    console.log('post was successfully added')

    //create a comment
    const comment = await Comment.create({
        text: "Super Excited",
        author: user2._id,
        post: post1._id
    })

    const comment2 = await Comment.create({
        text: "Me too!",
        author: user1._id,
        post: post1._id
    })
    console.log("comments added successfully")

    //read post with populate
    const readPost = await Post.find().populate('author','name');
    console.log("post are:"+readPost)

    //read comment with populate
    const readComment = await Comment.find()
    .populate('author','name')
    .populate('post','title');

    console.log('comments are:'+readComment)

}


connectDB().then(seedData);