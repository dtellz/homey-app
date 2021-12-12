import houseClerk from '../../assets/conserje.png'
import clean from '../../assets/limpia.png'
import garden from '../../assets/garden.png'
import { Box, Text, Button } from '@chakra-ui/react'
import './style.css'


const ServiceCard = (props) => {
    let cardImage = '';

    switch (props.img) {
        case '1':
            cardImage = <img className='service-card__img' src={houseClerk} />
            break;
        case '2':
            cardImage = <img className='service-card__img' src={clean} />
            break;
        case '3':
            cardImage = <img className='service-card__img' src={garden} />
            break;

        default:
            break;
    }

    return (
        <Box className='service-card__container'>
            {cardImage}
            <div className='service-card__text'>
                <Text>{props.type}</Text>
                <Text fontWeight='700' color='gray.700' fontSize='18px'>{props.title}</Text>
                <Text>{props.text}</Text>
            </div>
            <Button w='150px' borderRadius='15px' className='service-card__btn' colorScheme='teal' variant='outline'>
                <Text color='teal.300' fontWeight='500'>DETAILS</Text>
            </Button>

        </Box>

    )
}

export default ServiceCard;