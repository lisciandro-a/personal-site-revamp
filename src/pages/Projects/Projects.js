import { Card, CardActions, CardContent, CardMedia, Button, Chip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import Page from "../../components/Page";
import { popJig } from "../../photos/projects/ProjectPhotos";
import { projectDescriptions } from "./projectDescriptions";
import { Row } from "react-bootstrap";

function Projects() {

    return (
        <Page>
            <Row style={{ display:'flex', justifyContent:'space-evenly'}}>
                { projectDescriptions.map((project) => {
                    return (
                        <Card sx={{ maxWidth: 345, marginTop: '20px' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.alt}
                            />
                            <CardContent>
                                <div>
                                    <p>
                                        <h5>
                                            <b> {project.title} </b>
                                        </h5>    
                                    </p>
                                    
                                    <p>
                                        {project.description}
                                    </p>

                                    {project.technologies?.map((tech) => <Chip label={tech} color="periwinkle"/>)}
                                    
                                </div>
                                    

                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="dark" href={project.githubLink} target="_blank">
                                    <FontAwesomeIcon icon={faSquareGithub} /> 
                                    &nbsp; {project.githubRepo}
                                </Button>
                            </CardActions>
                        </Card>
                    );
                }) }
            </Row>
        </Page>
    );
}

export default Projects;