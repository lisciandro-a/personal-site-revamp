import { AppBar, Toolbar, Container, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import mandala from '../mandalaLogo.png';
import NavDrawer from "./NavDrawer";
import { useState } from "react";

function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar position="static" color="periwinkle" sx={{marginBottom: "40px"}}>
            <Toolbar disableGutters>
                <Container sx={{ justifyContent: "left", padding: "0px", margin: "0px" }}>
                    <a href='/'><img src={mandala} height="100px" style={{ paddingTop: "10px", paddingBottom: "10px", float: "left"}}/></a>
                </Container>
                <Container> 
                    <FontAwesomeIcon cursor='pointer' onClick={() => setDrawerOpen(true)} icon={faBars} size="xl" color="white" style={{ marginRight: "20px",  float: "right" }}/>
                        <a href='/LisciandroResume052524.pdf' download={'AllisonLisciandroResume.pdf'}>
                            <Tooltip title='Download resume'>
                                <FontAwesomeIcon icon={faFileDownload} size="xl" color="white" style={{ marginRight: "20px",  float: "right" }}/> 
                            </Tooltip>
                        </a>
                    <NavDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;