import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Skills() {

    const [expandedAccordion, setExpandedAccordion] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : null);
    };


    return (
        <>
            <Accordion
                expanded={expandedAccordion === 'panel1'}
                onChange={handleChange('panel1')}
                style={{ backgroundColor: "#3d42b3", boxShadow: "8px 8px 0 black", marginBottom: "1em" }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" className='acc-text' style={{ color: "white" }}>web dev</AccordionSummary>
                <AccordionDetails className="acc-desc" style={{ lineHeight: "1em", color: "white" }}>HTML5/CSS3, JavaScript, ReactJS, MongoDB, REST API, Node.js, Express, various CSS Frameworks</AccordionDetails>
            </Accordion>
            <br />
            <Accordion
                expanded={expandedAccordion === 'panel2'}
                onChange={handleChange('panel2')}
                style={{ backgroundColor: "#3d42b3", boxShadow: "8px 8px 0 black", marginBottom: "1em" }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header" className='acc-text' style={{ color: "white" }}>ux/ui + design</AccordionSummary>
                <AccordionDetails className="acc-desc" style={{ lineHeight: "1em", color: "white" }}>Figma, Mockups and Wireframing, Website Usability Tests, Adobe Creative Suite</AccordionDetails>
            </Accordion>
            <br />
            <Accordion
                expanded={expandedAccordion === 'panel3'}
                onChange={handleChange('panel3')}
                style={{ backgroundColor: "#3d42b3", boxShadow: "8px 8px 0 black", marginBottom: "1em" }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header" className='acc-text' style={{ color: "white" }}>other tech</AccordionSummary>
                <AccordionDetails className="acc-desc" style={{ lineHeight: "1em", color: "white" }}>C#, Java, Python, Data Science and Machine Learning, DevOps</AccordionDetails>
            </Accordion>
        </>
    )
}
