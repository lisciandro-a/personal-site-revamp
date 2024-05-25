import { Col, Image, Row } from "react-bootstrap";
import Page from "../../components/Page";
import { jasmine1, jasmine2, jasmine3, jasmine4, jasmine5, jasmine6, jasmine7, jasmine8, jasmine9, jasmine10 } from '../../photos/jasmine/JasminePhotos';

function Jasmine() {
    return (
        <Page>
            <Row>
                <Col xs={6} lg={4} xl={true}>
                    <Image src={jasmine1} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                    <Image src={jasmine6} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                </Col>
                <Col xs={6} lg={4} xl={true}>
                    <Image src={jasmine5} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                    <Image src={jasmine8} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                </Col>
                <Col xs={6} lg={4} xl={true}>
                    <Image src={jasmine4} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                    <Image src={jasmine9} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                </Col>
                <Col xs={6} lg={6} xl={true}>
                    <Image width='80%' src={jasmine10} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                    <Image src={jasmine3} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                </Col>
                <Col xs={12} lg={6} xl={true}>
                    <Image src={jasmine2} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                    <Image src={jasmine7} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                </Col>
            </Row>
            
        </Page>
    );
}

export default Jasmine;