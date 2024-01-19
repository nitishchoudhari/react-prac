import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [login, setLogin] = useState('Login')
    return (
        <div className="header">
            <ul>
                <li> <Link to="/"> Home</Link></li>
                <li><Link to="/about"> About Us </Link></li>
                <li><Link to="/contact">Contact Us </Link></li>
            </ul>
            <button onClick={()=>{
                login === 'Login'? setLogin('Logout') : setLogin('Login')
            }}>
                {login}
            </button>
        </div>
    )
}

export default Header;