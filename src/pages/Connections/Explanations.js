import { Modal } from "react-bootstrap";

function Explanations({ isOpen, setIsOpen }) {
    const showing = isOpen.show;
    const category = isOpen.category;

    return (
        category ? 
            <Modal 
                show={showing} 
                size="lg" 
                onHide={() => setIsOpen({show: false})} 
                onEscapeKeyDown={() => setIsOpen({show: false})} 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {category.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {category.words.map((word, idx) => {
                            return (
                                <li>
                                    <b>{word}</b> - {category.explanations[idx]}
                                </li>
                            );
                        })}
                    </ul>
                </Modal.Body>
            </Modal>
        : <></>
    );
};

export default Explanations;