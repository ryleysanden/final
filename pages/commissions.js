import Navbar from '../components/Navbar';
import { useState } from 'react';
import emailjs from 'emailjs-com';


export default function Commissions() {
    const [submissionStatus, setSubmissionStatus] = useState(''); // Track submission status


    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission


        const formData = {
            username: e.target.username.value, // Matches {{username}} in the EmailJS template
            email: e.target.email.value,
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
        <div>
            <Navbar/>
            <h2>Commissions</h2>
            <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
                <fieldset>
                    <legend>Submit Your Drawing Request</legend>
                    <label htmlFor="username">Your Name:</label>
                    <input type="text" id="username" name="username" required />
                    <br />

                    <label htmlFor="email">Your Email:</label>
                    <input type="text" id="email" name="email" required />

                    <label htmlFor="description">Piece Decription: Please give a detailed description of what you would like the piece to look like.</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                    <br />

                    <label htmlFor = "medium">Please select what you would like your piece made of.</label>
                    <select id="medium" name="medium" required>
                        <option value="" disabled selected>
                            Select a medium
                        </option>
                        <option value="Wood Burning">Wood Burning</option>
                        <option value="Watercolor">Watercolor</option>
                        <option value="Ceramics">Ceramics</option>
                        <option value="Acrylic Paint">Acrylic Paint</option>
                        <option value="Digital">Digital</option>
                    </select>
                    <br />
                    
                    <label htmlFor="deadline">Deadline: When do you need the piece by?</label>
                    <input type="date" id="deadline" name="deadline" required />
                    
                    <br />
                    <label htmlFor="size">Size: Specify the size of the piece (e.g., 8"x10", A4).</label>
                    <input type="text" id="size" name="size" required />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>


            {/* Submission Status */}
            {submissionStatus && <p style={{ marginTop: '20px' }}>{submissionStatus}</p>}
        </div>
    );
}
