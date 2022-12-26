import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Logo(props) {
    return(
    <section className='logo'>
            <Link to="/">
                <img className='logoimg'
                    src={ logo }
                    alt="logo"
                />
            </Link>
    </section>
    )
};

export default Logo;