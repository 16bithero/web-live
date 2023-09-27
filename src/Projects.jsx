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
            <Card className='project-box' style={{backgroundColor: "#3d42b4", color:"white"}}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="../src/Cosmic.png"
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
                    <Button size="small" variant="contained" style={{color: "#3d42b4", backgroundColor: 'white'}}>View Project</Button>
                </CardContent>
            </Card>
        </div>
        <div className='project-container'>
            <Card className='project-box' style={{backgroundColor: "#3d42b4", color:"white"}}>
                <CardMedia
                    sx={{ height: 120 }}
                    image="../src/Cosmic.png"
                    title="cosmic"
                />
                <CardContent>
                <h1 className='project-text'>Kape-Kape</h1>
                <h1 className='proj-desc'>
                        A web app that supports booking
                        management, scheduling, service offerings, and messaging for businesses. Connects to Cosmic Mobile App
                        to manage services booked by customers.
                    </h1>
                    <br />
                    <Button size="small" variant="contained" style={{color: "#3d42b4", backgroundColor: 'white'}}>View Project</Button>
                </CardContent>
            </Card>
        </div>
        <div>
        <h4 style={{textAlign: "center", margin: "0"}}>Older projects will be featured soon...</h4>
        </div>
        </>
    )
}
