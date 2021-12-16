import { Box, Text } from "@chakra-ui/layout"
import { Icon } from '@chakra-ui/react'
import { IoHome } from "react-icons/io5";
import { CgLoadbarSound } from "react-icons/cg";
import { AiFillTool, AiFillFile } from "react-icons/ai";
import './style.css'

const MenuOption = (props) => {

    let icon = undefined;

    let optionSelection = props.active ? 'option active' : 'option';
    let textColor = props.active ? 'gray.700' : 'gray.400';
    let bgColor = props.active ? 'white' : 'gray.100';
    let iconBgColor = props.active ? 'teal.300' : 'white'

    switch (props.icon) {
        case 'home':
            icon = <Icon as={IoHome} />
            break;
        case 'bars':
            icon = <Icon w={30} h={30} as={CgLoadbarSound} />
            break;
        case 'tool':
            icon = <Icon as={AiFillTool} />
            break;
        case 'file':
            icon = <Icon as={AiFillFile} />
            break;
        default:
            break;
    }

    const handleClick = () => {
        props.select()
    }

    return (
        <Box bg={bgColor} w='80%' p={4} className={optionSelection} onClick={handleClick}>
            <Box className='iconBackground' borderRadius='12px' bgColor={iconBgColor} w='30px' h='30px'>{icon}</Box>
            <Text fontSize='12px' fontWeight='700' color={textColor}>{props.text}</Text>
        </Box>
    )

}

export default MenuOption;