import { Modal } from "react-bootstrap";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function HowToPlay({ isOpen, setIsOpen }) {
    return (
        <Modal 
            show={isOpen} 
            size="lg" 
            onHide={() => setIsOpen(false)} 
            onEscapeKeyDown={() => setIsOpen(false)} 
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    How to play
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <i> Inspired by the <CopyrightIcon sx={{ fontSize: "12px" }} /> New York Times daily connections </i> <a href="https://www.nytimes.com/games/connections"><FontAwesomeIcon icon={faLink} /></a>
                </p>
            
                <p>
                    Find groups of four related items

                    <ul>
                        <li>
                            Select four words you believe to be related and hit submit when you're ready to guess
                        </li>
                        <li>
                            Categories will be revealed after 4 wrong guesses
                        </li>
                    </ul>

                    This puzzle has one solution, so watch out for words that fit in multiple categories!
                </p>
                <p>
                    <b><i>(Almost) all categories in this puzzle relate to current and prior work experience. Once revealed, the solution will allow you to view more information related to each category :&#41;</i></b>
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default HowToPlay;