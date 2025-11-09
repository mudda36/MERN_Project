import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar py-3 navbar-expand bg-white justify-content-around px-4 align-items-center">
            <div className="logo d-flex align-items-center">
                <Link to='/'><img src="/images/brand.png" className="brand" width="100" alt="" /></Link>
                 <h1 className="fw-bolder text-warning  rounded-5 fs-2 ">Foodie</h1> 
                
            </div>
            <div className="links">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="mx-2 nav-link text-primary fw-bold " to="/home">Home</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link fw-bold " to="/home/about">About</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link text-dark fw-bold " to="/home/food">Foods</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link text-dark fw-bold " to="/home/add-post">Add Post</Link></li>
                    <li className="nav-item"><Link className="mx-2 nav-link text-danger fw-bold " to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;