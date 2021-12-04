import './style.css'
import { useNavigate } from 'react-router-dom';



const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer__main-container'>
            <div className='footer__left-block'>
                <div>
                    <p>@2021, Homey App. Actividad 3</p>
                    <p>Alena Nikolaeva</p>
                    <p>Diego Téllez Barrero</p>
                    <p>Rober Alonso Herraiz</p>
                </div>
            </div>
            <div className='footer__right-block'>

                <p onClick={() => navigate('/public-dashboard')}>Home</p>
                <p onClick={() => navigate('/public-dashboard')}>Contact</p>
                <p onClick={() => navigate('/public-dashboard')}>FAQ</p>
                <p onClick={() => navigate('/public-dashboard')}>About company</p>

            </div>
        </div>
    )
}

export default Footer;