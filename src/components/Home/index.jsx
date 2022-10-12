
import { Link } from 'react-router-dom';
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home = () => {

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi!, <br /> I'm
               
                Gerardo Consiglio
                <br />
                
                </h1>
                
                <h2>Full Stack Developer / IT specialist</h2>
                <h2>Thanks for visit my work!</h2>
               
                
                <p><Link to="/contact" className='flat-button' >DOWNLOAD RESUME</Link></p>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />

        </>
    )
}
export default Home;