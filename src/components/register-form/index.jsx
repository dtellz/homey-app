import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Switch,

} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { useState } from 'react'

import './style.css'


const RegisterForm = () => {

    const navigate = useNavigate();
    const [isRemembered, setIsRemembered] = useState(false); // this variable will be used to remember user on login setting the session token on localStorage instead of sessionStorage.


    const handleSwitch = () => {
        isRemembered ? setIsRemembered(false) : setIsRemembered(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This is just a fake register form ;p, at this version if you want to register a new user you need to hardcode it on database/users.json');
        navigate('/login')
    }




    return (
        <div className='register-form__main-container'>
            <form onSubmit={handleSubmit} className='register-form__form'>

                <Text textAlign='center' fontSize='18px' fontWeight='700' color='gray.700'>Sign up for a free account</Text>

                <FormControl className='login-form__element' id='name' isRequired>
                    <FormLabel fontSize='14px'>Name</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='text' placeholder='Your full name' />
                </FormControl>


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
                    SIGN UP
                </Button>

                <Text className='login-form__sign-up'>Don't have an account? <span onClick={() => navigate('/login')} className='login-form__sign-up-link'> Sign in</span></Text>
            </form>


        </div>

    )

}

export default RegisterForm;