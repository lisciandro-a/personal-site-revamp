import { Col, Row } from "react-bootstrap";

function WorkDetails({ experience, currId }) {

    const isHidden = currId !== experience.jobId;

    return (
        <div hidden={isHidden} style={{ paddingTop: '20px', paddingLeft: '40px', textAlign: 'start', width:'100%' }} >
            <Row>
                <Col xs={12}>
                    <h2>
                        {experience.jobTitle}
                    </h2>
                    <h5>
                        @ {experience.company}
                    </h5>
                </Col>
            </Row>
            
        </div>
    );
}

export default WorkDetails;