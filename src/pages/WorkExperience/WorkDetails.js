import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


function WorkDetails({ experience, currId }) {
    const isHidden = currId !== experience.jobId;

    const dateTimeFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' });
    const startDate = dateTimeFormat.format(experience.startDate);
    const endDate = experience.endDate ? dateTimeFormat.format(experience.endDate) : 'Current';

    return (
        <div hidden={isHidden} style={{ paddingTop: '20px', paddingLeft: '40px', textAlign: 'start', width:'100%' }} >
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={10}>
                            <h2>
                                {experience.jobTitle}
                            </h2>
                        </Col>
                        <Col xs={2} style={{marginTop: 'auto'}}>
                            <h6>
                                <FontAwesomeIcon icon={faLocationDot} />
                                &nbsp;
                                {experience.location}
                            </h6>
                        </Col>
                    </Row>
                   
                    <h5>
                        @ {experience.company}
                    </h5>

                    <div>
                       <i>{experience.jobType}: {startDate} - {endDate}</i> 
                    </div>
                    
                    <br/>

                    {experience.descriptionSections.map((section) => {
                        return (
                        <>
                            <h5><b>{section.title}</b></h5>
                            <ul>
                                { section.bullets.map((bullet) => {
                                    return (
                                        <li> {bullet} </li>
                                    );
                                })}
                            </ul>
                        </>
                            

                        );
                    })}
                </Col>
            </Row>
            
        </div>
    );
}

export default WorkDetails;