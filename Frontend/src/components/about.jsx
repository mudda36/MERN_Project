import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "./Banner";

const About = () => {
    let title = 'About Page'
    const [posts, setposts] = useState([])
    const [users, setusers] = useState([])

    useEffect(() => {
        let fecthing = async () => {
            let res1 = await axios.get("http://localhost:4000/posts")
            let res2 = await axios.get("http://localhost:4000/users")
            let data1 = await res1.data
            let data2 = await res2.data
            setposts(data1)
            setusers(data2)
        }
        fecthing()
    })

    return (
        <div className="about">
            <Banner data={title} />
            <div className="aboutFoodie my-5 d-flex justify-content-center">
                <div className="aboutImage">
                    <img className="rounded-2" width="450" height="600" src="/images/pexels-monstera-5876741.jpg" alt="" />
                </div>
                <div className="aboutInfo w-50 p-5">
                    <h2 className="fw-bolder fs-1">About Food</h2>
                    <div className="line my-3"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tenetur, voluptate quod quis laboriosam vitae?</p>
                    <div className="lists d-flex flex-wrap justify-content-between me-3 mt-2">

                        <div className="list bg-success p-5 border text-center  my-2 " style={{ width: "48%" }}>
                            <h1 className="fw-bolder">10</h1>
                            <p className="text-light">Year of Expirience</p>
                        </div>
                        <div className="list bg-warning p-5 border text-center  my-2 " style={{ width: "48%" }}>
                            <h1 className="fw-bolder">{posts.length}</h1>
                            <p className="text-light">Foods</p>
                        </div>
                        <div className="list bg-danger p-5 border text-center  my-2 " style={{ width: "48%" }}>
                            <h1 className="fw-bolder">300</h1>
                            <p className="text-light">Lifestyle</p>
                        </div>
                        <div className="list bg-primary p-5 border text-center  my-2 " style={{ width: "48%" }}>
                            <h1 className="fw-bolder">{users.length}</h1>
                            <p className="text-light">Happy customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About