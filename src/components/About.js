import aboutw from '../assets/aboutw.png'

function About(props) {
    return(
<div className='sidebyside'>
    <div className='sidebyside1'>
<p>
    Hello everyone! I am Gabrielle, the owner of Touch Atelier 
    I specialize in semi-permanent makeup, henna brows, and brow tint
    Take a look around and feel free to contact me with any questions that you may have 
    I look forward to meeting you 
    and providing you with an amazing experience!
</p>
<img src={ aboutw } className='sidebysideimg' alt='about'/> 
    </div>
</div>
    )
};

export default About;