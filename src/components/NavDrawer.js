import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Collapse } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCodeCommit, faUser, faAddressCard, faFileDownload, faPuzzlePiece, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function NavDrawer({open, setOpen}) {
    const navigate = useNavigate();
    const [contactsOpen, setContactsOpen] = useState(false);


    const handleClick = (route) => {
        navigate(route);
        setOpen(false);
    }

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box role='presentation' sx={{ width: 250 }}>
                <List>
                    <ListItem>
                        <ListItemButton onClick={() => handleClick('/connections')}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faPuzzlePiece} />
                            </ListItemIcon>
                            <ListItemText primary='Connections'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => handleClick('/about-me')}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUser} />
                            </ListItemIcon>
                            <ListItemText primary='About Me'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </ListItemIcon>
                            <ListItemText primary='Work Experience'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faCodeCommit}/>
                            </ListItemIcon>
                            <ListItemText primary='Projects'/>
                        </ListItemButton>
                    </ListItem>

                </List>
                <Divider sx={{ opacity: 2}} />
                <List>

                    <ListItem>
                        <ListItemButton onClick={() => setContactsOpen(!contactsOpen)}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faAddressCard}/>
                            </ListItemIcon>
                            <ListItemText primary='Contacts'/>
                            {contactsOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>

                    <Collapse in={contactsOpen} timeout="auto" unmountOnExit sx={{ paddingLeft: '32px'}}>
                        <List>
                            <ListItemButton href='https://github.com/lisciandro-a' >
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faSquareGithub} />
                                </ListItemIcon>
                                <ListItemText primary="Github" />
                            </ListItemButton>
                            <ListItemButton href='https://www.linkedin.com/in/alisciandro/' >
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </ListItemIcon>
                                <ListItemText primary="LinkedIn" />
                            </ListItemButton>
                            <ListItemButton href='mailto:lisciandro.a@northeastern.edu' >
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </ListItemIcon>
                                <ListItemText primary="Email" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem>
                        <ListItemButton href='/LisciandroResume100223.pdf' download={'AllisonLisciandroResume.pdf'}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faFileDownload} />
                            </ListItemIcon>
                            <ListItemText primary={'Resume'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}

export default NavDrawer;