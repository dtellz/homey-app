import homieLogo from '../../assets/homie_app_logo.png'
import './style.css'
import { Icon } from '@chakra-ui/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; //signup
import PersonIcon from '@mui/icons-material/Person'; //profile
import VpnKeyIcon from '@mui/icons-material/VpnKey'; // sign in
import DashboardIcon from '@mui/icons-material/Dashboard'; // dashboard

const Header = () => {
    return (
        <div className='header__main-container'>
            <div className='header__element'>
                <img className='header__logo' src={homieLogo} />
                <p>Homey App</p>
            </div>

            <div className='header__element'>
                <div className='header__element'>
                    <img className='header__element' src={homieLogo} />
                    <p>DASHBOARD</p>
                </div>
                <div className='header__element'>
                    <img className='header__element' src={homieLogo} />
                    <p>PROFILE</p>
                </div>
                <div className='header__element'>

                    <p>SIGN UP</p>
                </div>
                <div className='header__element'>
                    <img className='header__element' src={homieLogo} />
                    <p>SIGN IN</p>
                </div>
            </div>




        </div>
    )
}

export default Header;