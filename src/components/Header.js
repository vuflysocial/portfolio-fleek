// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Mike McMath" />

            <div className='header__content'>
                <h1>Hi, I'm Mike McMath</h1>
                <p>React JS Blockchain Developer</p>
                <a href="mailto:thisuserdevelops@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;