import homieLogo from '../../assets/homie_app_logo.png'
import './style.css'

const Header = () => {
    return (
        <div className='header__main-container'>
            <img className='header__logo' src={homieLogo} ></img>
            <p>hola</p>
            <p>hola</p>
        </div>
    )
}

export default Header;