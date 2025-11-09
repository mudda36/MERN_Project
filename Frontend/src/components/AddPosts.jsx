import Banner from "./Banner";
import axios from "axios";
import { useState } from "react";


const AddPost = () => {
    let data = "Add Post"
    let [title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [image, setImage] = useState("")
    let [author, setAuthor] = useState("")
    let [location, setLocation] = useState("")

    let addPost = (e) => {
        e.preventDefault()
        let data = {title,summary,image,location,author}
        if (title === "" || summary === "" || location === "") {
            alert("Please fill all the fields")
        }
        else {
            axios.post("http://localhost:4000/add-post",data)
                .then(res => {
                    alert(res.data.message)
                })
                .catch(err => {
                    alert(err.data.message)
                })
        }
        console.log();
    }
    return (
        
        <div className="addPost">
            
            <Banner data={data} />
            <div className="postForm my-5 d-flex justify-content-center align-items-center">
                <div className="image col-5">
                    <img src="/images/pexels-kristina-paukshtite-1998920.jpg" loading='lazy' className="rounded-2" width="500" height="670" alt="" />
                </div>
                <div className="form col-5">
                    <h1 className="fw-bolder fs-1 text-decoration-underline">ADD POST</h1>
                    <div className="line my-3"></div>
                    <form action="" onSubmit={addPost}>
                        <div className="author">
                            <label htmlFor="author">Author</label>
                            <input type="text" className="form-control my-2 rounded-0" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div className="title">
                            <label htmlFor="">Title</label>
                            <input name="title" className="form-control my-2 rounded-0" type="text" placeholder="title of the post" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="summary">
                            <label htmlFor="">Summary</label>
                            <textarea rows="5" name="summary" className="form-control my-2 rounded-0" type="text" placeholder="summary of the post" value={summary} onChange={(e) => setSummary(e.target.value)} />
                        </div>
                        <div className="image">
                            <label htmlFor="">Image</label>
                            <input name="image" className="form-control my-2 rounded-0" type="text" placeholder="image of the post" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="location">
                            <label htmlFor="">Location</label>
                            <input name="location" className="form-control my-2 rounded-0" type="text" placeholder="location of the post" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <button type='submit' className="btn btn-outline-success orange rounded-2 btn-lg my-4 fw-bolder">Submit Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;
