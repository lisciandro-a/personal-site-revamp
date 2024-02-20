import { Container, Row, Col, Image } from "react-bootstrap";
import { blueFlowers, orangeTulips, pinkFlowers, pinkPurpleFlowers, purpleFlowers, redTulips, whiteFlowers, yellowPeonies } from "../photos/flowers/Flowers";
import { useEffect, useState } from "react";
import _ from "lodash";

function Carousel() {
    const flowerPhotos = [blueFlowers, orangeTulips, pinkFlowers, pinkPurpleFlowers, purpleFlowers, redTulips, whiteFlowers, yellowPeonies];
    const [index, setIndex] = useState(0);

    const getPhoto = (frameIdx) => {
        const numPhotos = flowerPhotos.length;
        let wrappedIndex = index;
        if (index < 0) {
            wrappedIndex = (numPhotos - 1) - index;
        }
        const photoIdx = (wrappedIndex + frameIdx) % numPhotos;
        return flowerPhotos[photoIdx];
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index + 1);
        }, 3000); 

        return () => clearInterval(interval);
    }, [index]);

    return (
        <Container>
            <Row>
                <Col xs={1} style={{  display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                </Col>
                <Col xs={2} style={{  display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <Image width='60%' src={getPhoto(0)} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7' }}/>
                </Col>
                <Col xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                    <Image width='80%' src={getPhoto(1)} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7' }}/>
                </Col>
                <Col xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image src={getPhoto(2)} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7' }}/>
                </Col>
                <Col xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image width='80%' src={getPhoto(3)} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7' }}/>
                </Col>
                <Col xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start'  }}>
                    <Image width='60%' src={getPhoto(4)} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7' }}/>
                </Col>
                <Col xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start'  }}>
                </Col>
            </Row>
        </Container>
    );
}

export default Carousel;