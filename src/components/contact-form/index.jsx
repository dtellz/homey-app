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


const ContactForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This is just a fake contact form ;p, at this version if you want to register a new user you need to hardcode it on database/users.json');

        navigate('/login')
    }




    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Text fontSize='32px' fontWeight='700' color='teal.300'>Having a problem?</Text>
                <Text fontSize='32px' fontWeight='700' color='teal.300'>Contact us.</Text>

                <FormControl className='contact-form__element' id='name' isRequired>
                    <FormLabel fontSize='14px'>Full name</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='text' placeholder='Your full name' />
                </FormControl>

                <FormControl className='contact-form__element' id='email' isRequired>
                    <FormLabel fontSize='14px'>Email</FormLabel>
                    <Input borderRadius='15px' fontSize='14px' type='email' placeholder='Your email address' />
                </FormControl>

                <FormControl className='contact-form__element' id='password-repeat' isRequired>
                    <FormLabel fontSize='14px'>Message</FormLabel>
                    <Input borderRadius='15px' h='100px' fontSize='14px' type='text' placeholder='Your message' />
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
                    SEND
                </Button>

                <Text className='contact-form__sign-up'>Don't have an account? <span onClick={() => navigate('/register')} className='contact-form__sign-up-link'>Sign up</span></Text>

            </form>



        </Fragment>

    )

}

export default ContactForm;