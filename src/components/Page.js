import { Container } from "react-bootstrap";
import Navigation from './Navigation';

function Page({children}) {
    return (
        <>
           <Navigation />
            <Container style={{ marginLeft: "1%", marginRight: "1%", maxWidth: 'none', width: "98%" }}>
                {children}
            </Container> 
        </>
        
    );
};

export default Page;