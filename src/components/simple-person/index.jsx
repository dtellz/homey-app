import { Box, Center, Text, Button } from "@chakra-ui/react";
import jessica from '../../assets/jessica.png'
import './style.css'
import { IoIosCube } from "react-icons/io";
const SimplePerson = () => {
    return (
        <Box bg='white' className="simple-person__container">
            <Box className="simple-person__img-name">
                <Center w={40} h={40} borderRadius='15px' >
                    <img className='personinfo__img' src={jessica} />
                </Center>
                <div>
                    <Text fontWeight={700} fontSize={18} color='gray.700'>Jessica Brown</Text>
                    <Text fontWeight={500} fontSize={14} color='gray.400'>jessica@viu.com</Text>
                </div>
            </Box>

            <Button leftIcon={<IoIosCube />} w={134} bg='white' borderRadius='15px' variant='solid' marginRight='1rem'>
                <Text fontWeight={700} color='gray.700' fontSize={10}>PAYMENTS</Text>
            </Button>
        </Box >
    )
}

export default SimplePerson;