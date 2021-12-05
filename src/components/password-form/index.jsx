import {
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { Fragment } from 'react'

import './style.css'


const PasswordForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This is just a fake register form ;p, at this version if you want to register a new user you need to hardcode it on database/users.json');
        navigate('/login')
    }




    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Text fontSize='32px' fontWeight='700' color='teal.300'>Introduce new password</Text>
                <Text fontSize='14px' fontWeight='700'>Enter your email and password to sign in.</Text>

                <FormControl className='password-form__element' id='email' isRequired>
                    <FormLabel fontSize='14px'>Email</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='email' placeholder='Your email address' />
                </FormControl>

                <FormControl className='password-form__element' id='new-password' isRequired>
                    <FormLabel fontSize='14px'>New password</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='password' placeholder='Your password' />
                </FormControl>

                <FormControl className='password-form__element' id='password-repeat' isRequired>
                    <FormLabel fontSize='14px'>Repeat new password</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='password' placeholder='Your password' />
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
                    RESET YOUR PASSWORD
                </Button>

            </form>



        </Fragment>

    )

}

export default PasswordForm;