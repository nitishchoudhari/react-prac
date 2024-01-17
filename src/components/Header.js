import { useState } from "react";

const Header = () => {
    let [login, setLogin] = useState('Login')
    return (
        <div className="header">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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