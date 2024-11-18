import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Commissions() {
    const [submissionStatus, setSubmissionStatus] = useState(''); // Track submission status


    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission


        const formData = {
            username: e.target.username.value, // Matches {{username}} in the EmailJS template
            description: e.target.description.value, // Matches {{description}} in the EmailJS template
        };


        try {
            // Use EmailJS to send the form data
            const response = await emailjs.send(
                'service_osm4spf', // Your EmailJS Service ID
                'template_zid0bff', // Your EmailJS Template ID
                formData,
                'Nd4JYsfoqdD_cpI0J' // Your EmailJS public API key
            );


            if (response.status === 200 || response.text === 'OK') {
                setSubmissionStatus('Email sent successfully!');
            } else {
                setSubmissionStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmissionStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container">
            <Navbar />
            <h2>Commissions</h2>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>Submit Your Drawing Request</legend>
                    <label htmlFor="username">Your Name:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="description">Drawing Description:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
        </div>
    );

    /*
    return (
        <div>
            <Navbar />
            <h2>Commissions</h2>
            <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
                <fieldset>
                    <legend>Submit Your Drawing Request</legend>
                    <label htmlFor="username">Your Name:</label>
                    <input type="text" id="username" name="username" required />
                    <br />
                    <label htmlFor="description">Drawing Description:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>


            */
           
            //{/* Submission Status */}
            //{submissionStatus && <p style={{ marginTop: '20px' }}>{submissionStatus}</p>}
        //</div>
    //);
    
}
