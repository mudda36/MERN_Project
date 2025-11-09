const express = require('express');
const app = express();
const cors = require('cors')

//!require database models
const User = require('./models/users')
const Post = require('./models/post')

//!midlaware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())//! cors it is used to connect the frontend and backend (origin resource sharing)


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const dnURL = "mongodb://localhost:27017/foodie"
mongoose.connect(dnURL).then(() => {
    console.log("connected to database");
})

//!login
app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            if (req.body.password == userData.password) {
                res.send({ message: 'login successfull' })
            } else {
                res.send({ message: "login failed" })
            }
        }
        else {
            res.send({ message: "no account is matching to your email" })
        }
    })
})


app.post('/signUp', async (req, res) => {  //!check the user is present or not based on email
    User.findOne({ email: req.body.email } || { mobile: req.body.mobile }, (err, userData) => {
        if (userData) {
            res.send({ message: "User already exit" })
        } else {
            const data = new User({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password

            })
            data.save(() => {
                if (err) {
                    res.send({ message: err })
                } else {
                    res.send({ message: "User registered successfully" })

                }
            })

        }

    })

})

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {

    }
})

app.get('/users', async (req, res) => {
    try {
        let users = await User.find()
        res.send(users)
    } catch (error) {
   console.log(error);
    }
})

app.post('/add-post', async (req, res) => {
    let postData = new Post({
        author: req.body.author,
        title: req.body.title,
        summary: req.body.summary,
        image: req.body.image,
        location: req.body.location

    })
    try {
        await postData.save()
        res.send({ message: "Post added successfully" })
    } catch (err) {
        res.send({ message: "Failed to add post" })

    }
})

app.get('/posts/:id', async (req, res) => {
    const { id } = req.params
    try {
        const singlePost = await Post.findById(id)
        res.send(singlePost)
    } catch (error) {
        res.send(error)
    }
})




const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listining on port ${PORT}`);

})