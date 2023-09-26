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
            <Card className='project-box' style={{backgroundColor: "#8e48ff"}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../src/Cosmic.png"
                    title="cosmic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cosmic
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A web app that supports booking
                        management, scheduling, service offerings, and messaging for businesses. Connects to Cosmic Mobile App
                        to manage services booked by customers.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Project</Button>
                </CardActions>
            </Card>
        </div>
        <div className='project-container'>
            <Card className='project-box' style={{backgroundColor: "#fcfd96"}}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../src/Cosmic.png"
                    title="cosmic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Kape-Kape
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A web app that supports booking
                        management, scheduling, service offerings, and messaging for businesses. Connects to Cosmic Mobile App
                        to manage services booked by customers.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Project</Button>
                </CardActions>
            </Card>
        </div>
        <div>
        <h4 style={{textAlign: "center", margin: "0"}}>Older projects will be featured soon...</h4>
        </div>
        </>
    )
}
