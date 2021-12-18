import { Box, Divider, Icon, Text, Center, Button } from '@chakra-ui/react'
import './style.css'
import { BsBellFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Payments = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/payment-confirmation')
    }
    return (
        <Box className='payments__container'>
            <Box className='payments__header'>
                <Text fontSize={18} fontWeight={700} color='gray.700'>Payments</Text>
                <Text fontSize={14} fontWeight={700} color='gray.400'><span style={{ color: 'green' }}>+30%</span> this month</Text>
            </Box>
            <Box className='payments__lower-block'>
                <Box className='payments__icons' >
                    <Icon color='teal.300' as={BsBellFill} />

                    <Divider h='27px' margin='8px' orientation='vertical' />

                    <Icon color='teal.300' as={BsBellFill} />

                    <Divider h='27px' margin='8px' orientation='vertical' />

                    <Icon color='teal.300' as={BsBellFill} />
                </Box>

                <Box className='payments__list'>
                    <Box>
                        <Text fontSize={14} fontWeight={700} color='gray.700'>$50 Garden</Text>
                        <Text fontSize={12} fontWeight={700} color='gray.400'>22 DEC 7:20 PM</Text>
                    </Box>
                    <Box>
                        <Text fontSize={14} fontWeight={700} color='gray.700'>$30 Conserge</Text>
                        <Text fontSize={12} fontWeight={700} color='gray.400'>21 DEC 11:21 PM</Text>
                    </Box>
                    <Box>
                        <Text fontSize={14} fontWeight={700} color='gray.700'>$10 Mail service</Text>
                        <Text fontSize={12} fontWeight={700} color='gray.400'>21 DEC 10:10 PM</Text>
                    </Box>

                    {props.btn ? <Button onClick={handleClick} w={120} color='white' borderRadius={20} bg='blue.700'>PAY ALL</Button> : <></>}
                </Box>

                {/*                 .payments__btn{
    width: 120px;
    color: white;
    background-color: #313860;
    border-radius: 20px;
    margin-top: 2rem;
} */}
            </Box>


        </Box>
    )
}

export default Payments;