import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import axios from "axios";

const Food = () => {
    let title = "All Posts"
    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get("http://localhost:4000/posts")
            const data = await res.data
            console.log(data);
            setPosts(data)
        }
        fetchData()
    })

    return (
        <div className="food">
            <Banner data={title} />
            <div className="posts_list d-flex flex-wrap my-5">
                {posts.map((post) => {
                    return(
                        <div className="post mx-3" key={post._id}>
                            <Link to={`/posts/${post._id}`}><img src={post.image} className="rounded-2 PostImage" width="300" height="350" alt="" /></Link>
                            <div className="info mt-3">
                                <h2 style={{ fontFamily: "inherit" }}>{post.title}</h2>
                                <p className="text-dark"> Written by {post.author}</p>
                                <Link to={`/home/food/${post._id}`} className="btn btn-success rounded-4 homeBtn">Read more &gt;</Link>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Food;
