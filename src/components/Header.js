import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Header(props) {
    return (
        <div className="nav">
            <Link to="/">
                <div className='nav-logo'><FaHome /></div>
            </Link>
            <Link to="/book">
                <div className='nav-logo'>BOOK</div>
            </Link>
            <Link to="/policy">
                <div className='nav-logo'>POLICY</div>
            </Link>
        </div>
    );
}


export default Header;