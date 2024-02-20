import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCodeCommit, faUser, faAddressCard, faFileDownload, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavDrawer({open, setOpen}) {
    const navigate = useNavigate();

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
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faAddressCard}/>
                            </ListItemIcon>
                            <ListItemText primary='Contacts'/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider sx={{ opacity: 2}} />
                <List>
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