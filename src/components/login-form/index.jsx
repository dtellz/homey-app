import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Switch,
    Alert,
    AlertIcon,
    CloseButton
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { Fragment, useState } from 'react'

import users from '../../database/users.json'

import './style.css'


const LoginForm = () => {

    const navigate = useNavigate();
    const [isRemembered, setIsRemembered] = useState(false); // this variable will be used to remember user on login setting the session token on localStorage instead of sessionStorage.
    const [isErrored, setIsErrored] = useState(false);
    const validateUser = (email, pass) => {
        return users.find(e => e.email === email && e.password === pass)
    }

    const handleSwitch = () => {
        isRemembered ? setIsRemembered(false) : setIsRemembered(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateUser(e.target.email.value, e.target.password.value)) {
            isRemembered ? localStorage.setItem('session_token', 'asda') : sessionStorage.setItem('session_token', 'userSessionIsValidatedAndThisIsNotARealToken');
            navigate('/common-dashboard')
        } else {
            setIsErrored(true)
        }
    }
    const handleAlertClose = () => {
        setIsErrored(false)
    }



    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Text fontSize='32px' fontWeight='700' color='teal.300'>Welcome Back</Text>
                <Text fontSize='14px' fontWeight='700'>Enter your email and password to sign in.</Text>

                <FormControl className='login-form__element' id='email' isRequired>
                    <FormLabel fontSize='14px'>Email</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='email' placeholder='Your email address' />
                </FormControl>

                <FormControl className='login-form__element' id='password' isRequired>
                    <FormLabel fontSize='14px'>Password</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='password' placeholder='Your password' />
                </FormControl>

                <FormControl className='login-form__element' display='flex' alignItems='center' justifyContent='space-evenly' id='remember'>
                    <Switch colorScheme='teal' id='remember' name='remember' onChange={handleSwitch} />
                    <FormLabel fontSize='12px' htmlFor='remember-me' mb='0'>
                        Remember me
                    </FormLabel>
                    <Text className='login-form__password-reset' onClick={() => navigate('/password-reset')}>Forgot your password?</Text>
                </FormControl>
                <Button
                    mt={8}
                    bg='teal.300'
                    borderRadius='12px'
                    color='white'
                    type='submit'
                    width='100%'
                    fontSize='10px'
                    fontWeight='700'
                >
                    LOG IN
                </Button>

                <Text className='login-form__sign-up'>Don't have an account? <span onClick={() => navigate('/register')} className='login-form__sign-up-link'>Sign up</span></Text>
            </form>
            {isErrored ? <Alert status='error'>
                <AlertIcon />
                Wrong user/pass
                <CloseButton position='absolute' right='8px' top='8px' onClick={handleAlertClose} />
            </Alert> : <div></div>}


        </Fragment>

    )

}

export default LoginForm;