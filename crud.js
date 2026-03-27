const User = require('./models/User.js');
const Comment = require('./models/Comment.js');
const Post = require('./models/Post.js');
const Product = require('./models/Product.js');
const Category = require('./models/Category.js');
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

// product schema
//create 
const createProduct = async () => {
    const result = await Product.create({
        name: "laptop",
        quantinty: 0,
        price: 30000

    });

    console.log('product created successfully:'+result);
}
 
// read products
const readProduct = async () => {
    const result = await Product.find();
    console.log('our data are:'+result);
}

//update products
const updateProduct = async () => {
    const result = await Product.findByIdAndUpdate("69c5002be1f576e92bf13f02", {
        name: "desktop"
    })
    console.log('product updated successfully:'+result);
}

// delete products
const deleteProduct = async () => {
    await Product.findByIdAndDelete("69c5002be1f576e92bf13f02")

    console.log('product deleted seccessfully');
}

 connectDB().then(deleteProduct);

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
        author: user1._id,
        category: category1._id
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
// create category
const createCategory = async () => {
    const result = await Category.create({
        name: "electronics"
    });
    console.log('category created successfully:'+result);
}
// read category
const readCategory = async () => {
    const result = await Category.find();
    console.log('our data are:'+result); 
}   
//update category
const updateCategory = async () => {
    const result = await Category.findByIdAndUpdate('69c5002be1f576e92bf13f02',{name: "electronic devices"})
    console.log('category updated successfully:'+result);
}
//delete category
const deleteCategory = async () => {
    const result = await Category.findByIdAndDelete('69c5002be1f576e92bf13f02')
    console.log('category deleted successfully:'+result);
}

connectDB().then(seedData);