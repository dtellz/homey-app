import './style.css'
import { InputGroup, InputLeftElement, Input, Icon, Text, Box, Button, propNames } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { Fragment } from 'react';
import { IoPerson } from 'react-icons/io5';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const DashboardHeader = (props) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('session_token')
        sessionStorage.removeItem('session_token')
        navigate('/login')
    }

    return (
        <Box className='dashboard-header__container'>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input borderRadius={20} bg='white' w={200} type='tel' placeholder='Type here...' />
            </InputGroup>
            <div className='header__element'>
                <Icon color='gray.500' as={IoPerson} />
                <Link to={props.type === 'private' ? '/dashboard' : '/common-dashboard'} className='header__link' ><Text color='gray.500' fontWeight={700}>{props.type}</Text></Link>
            </div>
            <Button onClick={handleLogOut} w={60} marginLeft='1.5rem' borderRadius={15} color='white' bg='gray.300' variant='solid'>
                Log out
            </Button>
        </Box >

    )
}

export default DashboardHeader;