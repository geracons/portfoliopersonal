
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';
import ParticlesComponent from '../Particles/Particles';

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
               
                
                <p><a href="https://drive.google.com/file/d/1v5INifNkUzt6pp4Axkezfz12BEBtYYV4/view?usp=sharing" target="_blank" className='flat-button' rel="noreferrer">RESUME - CV</a></p>
            </div>
            {/*<Logo />*/}
        </div>
        <Loader type='pacman' />
        <ParticlesComponent />
        </>
    )
}
export default Home;