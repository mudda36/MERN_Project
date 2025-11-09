import {Routes,Route} from "react-router-dom"
import About from "./about";
import AddPosts from "./AddPosts";
import Food from "./food";
import Home from "./FoodieHome";
import Navbar from './navbar';
import SinglePost from "./singlePost";

const HomePortal = () => {
    return ( 
        <div className="HomePortal">
           <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add-post" element={<AddPosts/>}/>
                <Route path="/food" element={<Food/>}/>
                <Route path="/food/:id" element={<SinglePost/>}/>
                
            </Routes>
        </div>
     );
}
 
export default HomePortal;