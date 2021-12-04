import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Field,
    Button,
    Switch
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

import './style.css'


const LoginForm = () => {

    const navigate = useNavigate();

    function validateName(value) {
        let error
        if (!value) {
            error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }

    return (


        <form>
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

            <FormControl className='login-form__element' display='flex' alignItems='center' justifyContent='space-evenly'>
                <Switch colorScheme='teal' id='remember-me' />
                <FormLabel fontSize='12px' htmlFor='remember-me' mb='0'>
                    Remember me
                </FormLabel>
                <Text className='login-form__password-reset' onClick={() => navigate('/reset-password')}>Forgot your password?</Text>
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

            <Text className='login-form__sign-up'>Don't have an account? <span onClick={() => navigate('/reset-password')} className='login-form__sign-up-link'>Sign up</span></Text>
        </form>



    )

}

export default LoginForm;