import { Box, Text } from "@chakra-ui/layout"
import { Icon, Avatar } from '@chakra-ui/react'
import { IoWalletSharp } from "react-icons/io5";
import { CgLoadbarSound } from "react-icons/cg";
import { AiFillTool } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";
import './style.css'
import admin__image from '../../assets/CreditstoUnsplash.com.png'

const InfoBox = (props) => {

    let icon = undefined;

    let optionSelection = props.active ? 'option active' : 'option';
    let textColor = props.active ? 'gray.700' : 'gray.400';
    let bgColor = props.active ? 'white' : 'gray.100';
    let iconBgColor = props.active ? 'teal.300' : 'white'

    switch (props.icon) {
        case 'wallet':
            icon = <Box className='iconBackground' borderRadius='12px' bgColor='teal.300' w='45px' h='45px'><Icon color='white' h='20px' w='20px' as={IoWalletSharp} /></Box>
            break;
        case 'world':
            icon = <Box className='iconBackground' borderRadius='12px' bgColor='teal.300' w='45px' h='45px'><Icon color='white' h='20px' w='20px' as={FaGlobe} /></Box>
            break;
        case 'note':
            icon = <Box className='iconBackground' borderRadius='12px' bgColor='teal.300' w='45px' h='45px'><Icon color='white' h='20px' w='20px' as={MdStickyNote2} /></Box>
            break;
        case 'person':
            icon = <Avatar name={props.textTwo} src={admin__image} />
            break;

        default:
            break;
    }



    return (
        <Box bg='white' w='250px' h='80px' p={4} className='infobox__maincontainer'>
            <div>
                <Text fontSize='12px' fontWeight='700' color='gray.400'>{props.textOne}</Text>
                <Text fontSize='18px' fontWeight='700' color='gray.700'>{props.textTwo} <span className='infobox__percentage'>{props.textThree}</span></Text>
            </div>
            {icon}
            <Text fontSize='12px' fontWeight='700' color={textColor}>{props.text}</Text>
        </Box>
    )

}

export default InfoBox;