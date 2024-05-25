import { Col, Image, Row } from "react-bootstrap";
import Page from "../../components/Page";
import allisonPic from '../../photos/Allison.jpeg'
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faICursor, faLocationDot, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import './aboutMe.css';

function AboutMe() {
    const navigate = useNavigate();

    const welcomeString = "Hello World, I'm Allison :) ".split("");
    const [displayString, setDisplayString] = useState([]);
    const [index, setIndex] = useState(-1);
    const shouldFade = () => {
        return index < 0 || index === 13 || index >= welcomeString.length
    }

    useEffect(() => {
        if (index < welcomeString.length) {
            const intervalLength = index === 13 || index < 0 ? 810 : 90;
            const interval = setInterval(() => {
                setIndex(index + 1);
                index >= 0 && setDisplayString([...displayString, welcomeString[index]]);
            }, intervalLength); 

            //Clearing the interval
            return () => clearInterval(interval);
        }
    }, [index]);


    return (
        <Page>
            <div style={{ paddingTop: '20px' }}>
                <Row>
                    <Col xs='12' md='2'>
                        <Image src={allisonPic} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7' }} className="photo"/>
                        <Typography paddingTop='8px'>
                            <FontAwesomeIcon icon={faLocationDot} /> Boston, MA
                        </Typography>
                        <br/>
                    </Col>
                    <Col xs='12' md='10'>
                        <Typography variant='h4'> <FontAwesomeIcon icon={faTerminal} style={{ paddingRight: '2px'}}/> {displayString.join('')}<FontAwesomeIcon icon={faICursor} fade={shouldFade()}/></Typography>

                        <Typography variant='subtitle2' paddingTop='8px'> B.S. in Computer Science - Northeastern University </Typography>
                        <br className="break"/>

                        <Typography variant='body1' marginTop='2%'>
                            I'm a current Software Engineer 1 at Wood Mackenzie, where I do full-stack development. I work primarily with Typescript and React, and interface occasionally with Java and Python as well. I enjoy having a broad width of knowledge, and put a lot of emphasis into picking up wide variety of work, whilst still maintaining areas of expertise. I am also a fast learner, an eager volunteer, and an active participant in team discussions and decision making. At present, I am a co-op manager and I continuously support the co-op program through onboarding planning and conducting interviews.
                        </Typography>

                        <Typography variant='body1' paddingTop='2%'>
                            Outside of work I enjoy participating in a multitude of hobbies, ranging from photography to hand lettering to DIY crafts such as sewing and crochet. I love spending time with my cat <FontAwesomeIcon icon={faCat} cursor='pointer' onClick={() => navigate('/jasmine')}/> and begin each morning by playing the NYT Daily Connections and Mini.
                        </Typography>
                    </Col>
                </Row>
                <Row style={{ marginTop: '90px' }}>
                    <Carousel />
                </Row>
            </div>
        </Page>
    );
}

export default AboutMe;


// next row can contain a photo carousel that will change between light show photos and flowers depending on the time of day (or maybe check if browser is in light vs dark mode ? a bit more obvious)
// will also put a toggle to manually set this