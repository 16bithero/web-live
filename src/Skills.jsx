import React from 'react'
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Skills() {
    return (
        <>
            <Accordion defaultExpanded style={{ backgroundColor: "pink", boxShadow: "5px 5px 0 black", marginBottom: "1em" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" className='acc-text'>web dev</AccordionSummary>
                <AccordionDetails style={{ lineHeight: "1em" }}>HTML5/CSS3, JavaScript, ReactJS, MongoDB, REST API, Node.js, Express, various CSS Frameworks</AccordionDetails>
            </Accordion>
            <br />
            <Accordion style={{ backgroundColor: "#68d3e8", boxShadow: "5px 5px 0 black", marginBottom: "1em" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" className='acc-text'>ux/ui + design</AccordionSummary>
                <AccordionDetails style={{ lineHeight: "1em", fontFamily: "Fira Sans" }}>Figma, Mockups and Wireframing, Website Usability Tests, Adobe Creative Suite</AccordionDetails>
            </Accordion>
            <br />
            <Accordion style={{ backgroundColor: "#68d3e8", boxShadow: "5px 5px 0 black", marginBottom: "1em" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" className='acc-text'>other tech</AccordionSummary>
                <AccordionDetails style={{ lineHeight: "1em" }}>C#, Java, Python, Data Science and Machine Learning, DevOps</AccordionDetails>
            </Accordion>
        </>
    )
}
