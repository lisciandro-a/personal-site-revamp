import { Col, Image, Row } from "react-bootstrap";
import Page from "../../components/Page";
import { jasmine1, jasmine2, jasmine3, jasmine4, jasmine5, jasmine6, jasmine7, jasmine8, jasmine9, jasmine10 } from '../../photos/jasmine/JasminePhotos';

function Jasmine() {
    return (
        <Page>
            <Row>
                <Col sx={{ width: '20%'}}>
                    <Image src={jasmine1} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                    <Image src={jasmine6} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                </Col>
                <Col sx={{ width: '20%'}}>
                    <Image src={jasmine5} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                    <Image src={jasmine8} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                </Col>
                <Col sx={{ width: '20%'}}>
                    <Image src={jasmine4} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                    <Image src={jasmine9} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                </Col>
                <Col sx={{ width: '20%'}}>
                    <Image width='80%' src={jasmine10} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                    <Image src={jasmine3} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                </Col>
                <Col sx={{ width: '20%'}}>
                    <Image src={jasmine2} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px'}}/>
                    <Image src={jasmine7} rounded={true} thumbnail={true} style={{ backgroundColor: '#a3b8f7', marginTop: '10px', marginBottom: '10px' }}/>
                </Col>
            </Row>
            
        </Page>
    );
}

export default Jasmine;