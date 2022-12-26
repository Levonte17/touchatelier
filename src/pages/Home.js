import About from '../components/About';
import { Link } from 'react-router-dom';
import Review from '../components/Review';
import OmbreT from '../components/OmbreT';
import HennaB from '../components/HennaB';

function Home(props) {
    return(
<div className="home1">
<div className="home">
        
    <h1>
      Touch Atelier
    </h1>

    <h2>
        Your Touch Atelier Experience Starts Here
    </h2>

<Link to="book" >
    <button>
        BOOK NOW
    </button>
</Link>
</div>

<div className='home2'>

<h3>
    I Just Want The Best For Your Brows
    <p>
        - Touch Atelier
    </p>
</h3>
</div>
<About />
<HennaB />
<OmbreT />
<Review />

</div>

        
    )
};

export default Home;