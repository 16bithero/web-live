import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessKey = '19f68d7b-55d0-4df1-8926-cacc681b77f8';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    ...formData,
                }),
            });

            if (response.ok) {
                // Form submitted successfully
                const successMessage = `Thanks, ${formData.name}. Email sent!`;
                setSnackbarMessage(successMessage); // Show success Snackbar
                setSnackbarOpen(true); // Open the Snackbar
                setFormData({ // Clears the form
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false); // Close the Snackbar
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='contact-box'>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div className='contact-box'>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div className='contact-box'>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Message"
                            multiline
                            rows={3.5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <Button
                        type="submit"
                        className='button-box'
                        style={{backgroundColor: '#3d42b3', color: "white"}}
                    >
                        Send Message
                    </Button>
                </form>
                <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
                        <img
                            src="./gmail.png"
                            alt="Gmail"
                            style={{ marginRight: '16px'}}
                        />
                        {snackbarMessage}
                    </div>
                }
            />
            </div>
        </>
    );
}
