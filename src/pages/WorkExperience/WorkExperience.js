import { Box, Tab, Tabs, useMediaQuery, useTheme, FormControl, Select, MenuItem } from "@mui/material";
import Page from "../../components/Page";
import { useState } from "react";
import WorkDetails from "./WorkDetails";
import { workExperience } from "./experience";

function WorkExperience() {
    const [currTab, setCurrTab] = useState(0);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const flexDirection = isSmallScreen ? 'column': 'row'

    return (
        <Page>
            <Box
                sx={{ flexGrow: 1, display: 'flex', flexDirection }}
            >
                {!isSmallScreen ? 
                    <Tabs
                        orientation={'vertical'}
                        value={currTab}
                        onChange={(_event, newTab) => setCurrTab(newTab)}
                    >
                        {workExperience.map((experience) => {
                            return <Tab id={`tab-${experience.jobId}`} label={`${experience.jobTitle} @ ${experience.company}`} value={experience.jobId} sx={{ margin: '20px' }}/>
                        })}
                    </Tabs>
                    : <FormControl>
                        <Select
                            id="work-experience-select"
                            value={currTab}
                            onChange={(event) => setCurrTab(event.target.value)}
                            color="periwinkle"
                        >  
                            {workExperience.map((experience) => {
                                return (
                                    <MenuItem value={experience.jobId}>
                                        {experience.jobTitle} @ {experience.company}
                                    </MenuItem>
                                );
                            })}   
                        </Select>
                    </FormControl>
                }
                {workExperience.map((experience) => {
                    return <WorkDetails experience={experience} currId={currTab} key={experience.jobId}/> 
                    })}
            </Box>
        </Page>
    );
}

export default WorkExperience;