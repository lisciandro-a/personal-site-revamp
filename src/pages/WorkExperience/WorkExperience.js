import { Box, Tab, Tabs } from "@mui/material";
import Page from "../../components/Page";
import { useState } from "react";
import WorkDetails from "./WorkDetails";
import { workExperience } from "./experience";

function WorkExperience() {
    const [currTab, setCurrTab] = useState(0);

    return (
        <Page>
            <Box
                sx={{ flexGrow: 1, display: 'flex' }}
            >

                <Tabs
                    orientation='vertical'
                    value={currTab}
                    onChange={(_event, newTab) => setCurrTab(newTab)}
                >
                    {
                    workExperience.map((experience) => {
                        return <Tab id={`tab-${experience.jobId}`} label={`${experience.jobTitle} @ ${experience.company}`} value={experience.jobId} sx={{ margin: '20px' }}/>
                    })
                }
                    {/* <Tab id='tab-0' label={`${workExperience[0].jobTitle} - ${workExperience[0].company}`} />
                    <Tab id='tab-1' label={`${workExperience[1].jobTitle} - ${workExperience[1].company}`} /> */}
                </Tabs>
                {
                    workExperience.map((experience) => {
                    return <WorkDetails experience={experience} currId={currTab} key={experience.jobId}/> 
                    })
                }


            </Box>
            
            
        </Page>
    );
}

export default WorkExperience;