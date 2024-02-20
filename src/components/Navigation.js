import { AppBar, Toolbar, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import mandala from '../mandalaLogo.png';
import NavDrawer from "./NavDrawer";
import { useState } from "react";

function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar position="static" color="periwinkle" sx={{marginBottom: "40px"}}>
            <Toolbar disableGutters>
                <Container sx={{ justifyContent: "left", padding: "0px", margin: "0px" }} >
                    <img src={mandala} height="100px" style={{ paddingTop: "10px", paddingBottom: "10px", float: "left"}}/>  
                </Container>
                <Container>
                    <FontAwesomeIcon cursor='pointer' onClick={() => setDrawerOpen(true)} icon={faBars} size="xl" color="white" style={{ marginRight: "20px",  float: "right" }}/>
                    <NavDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;