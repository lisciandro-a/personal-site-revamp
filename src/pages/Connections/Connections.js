import Page from "../../components/Page";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import HowToPlay from "./HowToPlay";
import Board from "./Board";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faLockOpen } from "@fortawesome/free-solid-svg-icons";


function Connections() {
    const [modalIsOpen, updateModalIsOpen] = useState(false);
    const [revealAnswers, updateRevealAnswers] = useState(false);

    return (
        <Page>
            <Stack direction="row" alignItems="center" textAlign="start" marginBottom="40px">
                <Typography variant="h4" paddingLeft="10%">
                    Allison's Connections
                </Typography>
                <IconButton color="black" onClick={() => updateModalIsOpen(true)} size="small">
                    <InfoOutlinedIcon sx={{ paddingTop: "8px", fontSize: "34px" }} />
                </IconButton>
                <Tooltip title={revealAnswers ? "Reset" : "Reveal answers"} placement="right">
                    <IconButton color="black" onClick={() => updateRevealAnswers(!revealAnswers)} size="small">
                        <FontAwesomeIcon icon={revealAnswers ? faRotateLeft : faLockOpen} style={{ paddingTop: "8px" }}/>
                    </IconButton>
                </Tooltip>      
            </Stack>
            <HowToPlay isOpen={modalIsOpen} setIsOpen={updateModalIsOpen} />
            <Container >
               <Board revealAnswers={revealAnswers}/> 
            </Container>
            
        </Page>
    );
}

export default Connections;