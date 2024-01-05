import React, { useState ,useEffect} from "react";
import {Link , useLocation} from "react-router-dom";

export default function NavBar(){
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('status')) || [])
    },[location])

    const logoutClick = ()=>{
        localStorage.removeItem('status');
    }
    return (
        <nav id="nav" className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <Link className="navbar-brand main_logo" to="/">
                <img src="images/main_logo.png" alt="" />
            </Link>
            <span className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img src="images/menu_icon.svg" alt="" />
                </span>
            </span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-lg-auto me-auto mb-2 mb-lg-0 mt-3 mt-lg-0 ms-md-0 main_menu">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mens">MENS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/womens">WOMENS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">BRANDS <i className="fa-solid fa-chevron-down side_icon"></i></Link>
                        <ul className="sub_menu">
                            <li><Link to="/titen">Titen</Link></li>
                            <li><Link to="/rado">Rado</Link></li>
                            <li><Link to="/sylvi">Sylvi</Link></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">ABOUT US</Link>
                    </li>
                </ul>
                <form className="d-flex ms-0 login_frm" id="lg_form">
                    <button className="btn login_btn ms-lg-0" type="submit">
                        {data === "You Are Already Logged In..." ?(<Link to="/login" onClick={logoutClick} style={{textDecoration: "none"}}>LogOut</Link>) :(<Link to="/login" style={{textDecoration: "none"}}>LOGIN</Link>) }
                    </button>
                </form>
            </div>
        </div>
    </nav>
    );
}