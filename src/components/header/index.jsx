import './style.css'
import { Icon } from '@chakra-ui/react'
import { IoIosCube } from "react-icons/io";
import { IoPerson, IoPersonCircle, IoKey } from 'react-icons/io5';
import { HiHome } from "react-icons/hi";
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"



const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header__main-container'>
            <div className='header__element homelink'>
                <Icon as={HiHome} />
                <Link to='/login' className='header__big-link' >Homey App</Link>
            </div>

            <div className='header__element'>
                <div className='header__element'>
                    <Icon as={IoIosCube} />
                    <Link to='/common-dashboard' className='header__link' >DASHBOARD</Link>
                </div>
                <div className='header__element'>
                    <Icon as={IoPerson} />
                    <Link to='/profile' className='header__link' >PROFILE</Link>
                </div>
                <div className='header__element'>
                    <Icon as={IoPersonCircle} />
                    <Link to='/register' className='header__link' >SIGN UP</Link>
                </div>
                <div className='header__element'>
                    <Icon as={IoKey} />
                    <Link to='/login' className='header__link' >SIGN IN</Link>
                </div>
            </div>

            <div className='header__button'>
                <Button
                    bg='gray.700'
                    borderRadius='30px'
                    color='white'
                    width='150px'
                    fontSize='10px'
                    fontWeight='700'

                >
                    About us
                </Button>
            </div>




        </div>
    )
}

export default Header;