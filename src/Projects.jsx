import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Projects() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='project-container'>
                <Card className='project-box' style={{ backgroundColor: "#3d42b4", color: "white" }}>
                    <CardMedia
                        sx={{ height: 120 }}
                        image="./kapekape.png"
                        title="wip"
                    />
                    <CardContent>
                        <h1 className='project-text'>Kape-Kape</h1>
                        <h1 className='proj-desc'>
                            Kape-Kape is a web based digital business card app.
                            It enables users to showcase their contact information and relevant links, conveniently shareable through a unique QR code.
                        </h1>
                        <br />
                        <a href="https://kapekape.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Button className='button-box' style={{ backgroundColor: '#ffe054', color: 'black' }}>
                                View Project
                            </Button>
                        </a>
                    </CardContent>
                </Card>
            </div>
            <div className='project-container'>
                <Card className='project-box' style={{ backgroundColor: "#3d42b4", color: "white" }}>
                    <CardMedia
                        sx={{ height: 120 }}
                        image="./Cosmic.png"
                        title="cosmic"
                    />
                    <CardContent>
                        <h1 className='project-text'>Cosmic</h1>
                        <h1 className='proj-desc'>
                            A web app that supports booking
                            management, scheduling, service offerings, and messaging for businesses. Connects to Cosmic Mobile App
                            to manage services booked by customers.
                        </h1>
                        <br />
                        <a href="https://16bithero.github.io/cosmic-web/" target="_blank" rel="noopener noreferrer">
                            <Button className='button-box' style={{ backgroundColor: '#ffe054', color: 'black' }}>
                                View Project
                            </Button>
                        </a>
                    </CardContent>
                </Card>
            </div>
            <div className='project-container'>
                <Card className='project-box' style={{ backgroundColor: "#3d42b4", color: "white" }}>
                    <CardMedia
                        sx={{ height: 120 }}
                        image="./wip.png"
                        title="wip"
                    />
                    <CardContent>
                        <h1 className='project-text'>Baddie Budget</h1>
                        <h1 className='proj-desc'>
                        A web-based budgeting app that allows users to track their savings by 
                        logging daily expenses and checking progress toward their spending goals. No more girl math!
                        </h1>
                        <br />
                        <Button className='button-box' style={{ backgroundColor: 'orange', color: "black" }}>Launching Soon</Button>
                    </CardContent>
                </Card>
            </div>
            <div>
                <h4 style={{ textAlign: "center", margin: "0" }}>Older projects will be featured soon...</h4>
            </div>
        </>
    )
}
