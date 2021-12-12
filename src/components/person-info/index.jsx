import { Text, Box, Center, Divider, Grid, GridItem } from "@chakra-ui/react";
import './style.css'

const PersonInfo = (props) => {
    return (
        <>
            <Divider />
            <Grid
                templateColumns='repeat(5, 1fr)'
                bg='white'>


                <GridItem colSpan={1}>
                    <Box className='personinfo__avatar-name'>
                        <Center w='40px' h='40px' borderRadius='15px' margin='1rem'>
                            <img className='personinfo__img' src={props.img} />
                        </Center>
                        <Box>
                            <Text>{props.name}</Text>
                            <Text>{props.email}</Text>
                        </Box>

                    </Box>
                </GridItem>
                <GridItem colSpan={1} className="personinfo__align">
                    <Box>
                        <Text>{props.function}</Text>
                        <Text>{props.description}</Text>
                    </Box>
                </GridItem>



                <GridItem colSpan={1} className="personinfo__align">
                    <Text>{props.status}</Text>
                </GridItem>


                <GridItem colSpan={1} className="personinfo__align">
                    <Text>{props.employed}</Text>
                </GridItem>

                <GridItem colSpan={1} className="personinfo__align">
                    <Text>Edit</Text>
                </GridItem>

            </Grid>


        </>


    )
}

export default PersonInfo;

//<Avatar name={props.name} src={props.img} />