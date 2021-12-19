import houseClerk from '../../assets/conserje.png'
import clean from '../../assets/limpia.png'
import garden from '../../assets/garden.png'
import kids from '../../assets/kids.png'
import barbecue from '../../assets/barbecue.png'
import party from '../../assets/party.png'
import pool from '../../assets/pool.png'
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
        case '4':
            cardImage = <img className='service-card__img' src={kids} />
            break;
        case '5':
            cardImage = <img className='service-card__img' src={barbecue} />
            break;
        case '6':
            cardImage = <img className='service-card__img' src={party} />
            break;
        case '7':
            cardImage = <img className='service-card__img' src={pool} />
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