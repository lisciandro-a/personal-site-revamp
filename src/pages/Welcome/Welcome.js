import { Container } from "react-bootstrap";
import mandala from '../../mandalaLogo.png';
import './welcome.css'
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className='bg--periwinkle' style={{    
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <Container>
                <img src={mandala} width="30%" style={{ marginLeft: '0px'}}/>
                <Typography variant='h3' style={{ paddingTop: '0px', color: 'white' }}>
                    Choose a page to start exploring
                </Typography> 
                <Container style={{ paddingTop: '30px', paddingBottom: '20px' }}>
                    <Button 
                        variant='contained' 
                        color='white'
                        centerRipple
                        style={{ fontSize: '16px' }}
                        onClick={() => navigate('/connections')}
                        >
                            Personalized Connections Game
                    </Button>  
                </Container>
                <Container>
                    <Button 
                        variant='contained' 
                        color='white'
                        centerRipple
                        style={{ fontSize: '16px' }}
                        onClick={() => navigate('/about-me')}
                        >
                            Traditional About Me
                    </Button>  
                </Container>
            </Container>
        </div>
        
    );
}

export default Welcome;