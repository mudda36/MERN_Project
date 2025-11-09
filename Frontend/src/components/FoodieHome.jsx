import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.css'
const Home = () => {
    const [list, setList] = useState([
        {
            image: "/images/bread.jpg",
            title: "Breakfast",
            description: "Tasty and Delicious Food",
        },
        {
            image: "/images/croissants.jpg",
            title: "Breakfast",
            description: "Tasty and Delicious Food",
        },
        {
            image: "/images/nougat.jpg",
            title: "Breakfast",
            description: "Tasty and Delicious Food",
        },
        {
            image: "/images/pasta.jpg",
            title: "Breakfast",
            description: "Tasty and Delicious Food",
        }
    ])
    return (
        <div className="Home ">
            
            <div className="hero d-flex justify-content-center">
                <img src="/images/pexels-engin-akyurt-2673353.jpg" className="col-8" loading="lazy" height="600" alt="" />
                <div className="infoSection col-4">
                    <div className="info" style={{ height: "530px", backgroundColor: "#ffd615", padding: "48px" }}>
                        <p style={{ color: "rgb(0,0,0,0.4)" }}>Featured Posts</p>
                        <h1 className="" style={{ fontWeight: "900", fontSize: "52px" }}>Love the Delicious & Tasty Foods</h1>
                        <div className="line mb-4"></div>
                        <p style={{ color: "rgb(0,0,0,0.4)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni ipsam vel? Saepe ducimus non omnis </p>
                        <Link to="/home/add-post" className="btn btn-success btn-lg rounded-5 homeBtn">Add a Post &gt; </Link>
                    </div>
                    <Link to="/home/food/" className="btn col-12 border  fw-bold fs-4 rounded-0 btn-dark" style={{ height: "70px", padding: "20px" }}>Read more &gt;</Link>
                </div>
            </div>
            <div className="contents_section my-5">
                <div className="title p-4">
                    <h1 className="fw-bolder fs-1">Popular Stories</h1>
                    <div className="line"></div>
                </div>
                <div className="contents d-flex">
                    <div className="miniPosts col-6 d-flex flex-wrap">
                        {list.map(item => (
                            <div className="lists mx-3 h-50">
                                <img src={item.image} className="rounded-2 homePostImage" width="280" height="200" alt="" />
                                <div className="info mt-3">
                                    <h4 className="text-secondary" style={{ fontFamily: "inherit" }}>{item.title}</h4>
                                    <p className="m-0">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mainPost col-5">
                        <img src="/images/cookies.webp" className="rounded-2" width="620" height="700" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;