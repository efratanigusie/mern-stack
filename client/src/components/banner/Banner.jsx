import { styled, Box, Typography } from '@mui/material';
import './banner.css';

const Image = styled(Box)`
    width: 100%;
    background: url(https://img.freepik.com/premium-photo/world-water-day-low-poly-design-geometric-background-wireframe-light-connection-structure-modern-3d-concept-isolated-illustration_76964-59677.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 60px;
    color: #FFFFFF;
    line-height: 1;
    opacity: 0; /* Initially hidden */
    animation: fadeIn 1s forwards; /* Animation to fade in */
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    color: #FFFFFF;
    opacity: 0; /* Initially hidden */
    animation: slideIn 1s forwards; /* Animation to slide in */
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Blog for </Heading>
            <SubHeading>computer and electronics</SubHeading>
        </Image>
    )
}

export default Banner;


