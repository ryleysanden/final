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
            medium: e.target.medium.value,
            deadline: e.target.deadline.value,
            size: e.target.size.value,
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

                    <legend>Commission Request Form</legend>

                    <label htmlFor="username">Your Name:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="description">Piece Decription: Please give a detailed description of what you would like the piece to look like.</label>

                    <textarea id="description" name="description" rows="4" required></textarea>

                    <label htmlFor = "medium">Please select what you would like your piece made of.</label>
                    <select id="medium" name="medium" required>
                        <option value="" disabled selected>
                            Select a medium
                        </option>
                        <option value="Pencil">Pencil</option>
                        <option value="Watercolor">Watercolor</option>
                        <option value="Oil Paint">Oil Paint</option>
                        <option value="Acrylic">Acrylic</option>
                        <option value="Digital">Digital</option>
                    </select>
                    
                    <label htmlFor="deadline">Deadline: When do you need the piece by?</label>
                    <input type="date" id="deadline" name="deadline" required />

                    <label htmlFor="size">Size: Specify the size of the piece (e.g., 8"x10", A4).</label>
                    <input type="text" id="size" name="size" required />



                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
        </div>
    );
  
}
