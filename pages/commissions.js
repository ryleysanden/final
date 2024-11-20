import Navbar from '../components/Navbar';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Commissions() {
    const [submissionStatus, setSubmissionStatus] = useState(''); // Track submission status
    const [imagePreview, setImagePreview] = useState(null); // For image preview
    const [imageFile, setImageFile] = useState(null); // For storing the image file

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
            setImageFile(file); // Store the file for form submission
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData(); // Use FormData for file uploads
        formData.append('username', e.target.username.value);
        formData.append('email', e.target.email.value);
        formData.append('phonenumber', e.target.phonenumber.value);
        formData.append('description', e.target.description.value);
        formData.append('medium', e.target.medium.value);
        formData.append('deadline', e.target.deadline.value);
        formData.append('size', e.target.size.value);
        formData.append('referenceUrl', e.target.referenceUrl.value); // Add the URL

        if (imageFile) {
            formData.append('image', imageFile); // Append the image file
        }

        try {
            // Use EmailJS to send the form data
            const response = await emailjs.send(
                'service_osm4spf', // Your EmailJS Service ID
                'template_zid0bff', // Your EmailJS Template ID
                {
                    username: e.target.username.value,
                    email: e.target.email.value,
                    phonenumber: e.target.phonenumber.value,
                    description: e.target.description.value,
                    medium: e.target.medium.value,
                    deadline: e.target.deadline.value,
                    size: e.target.size.value,
                    referenceUrl: e.target.referenceUrl.value, // Include the URL
                },
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
            <Navbar />
            <h2>Commissions</h2>
            <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
                <fieldset>
                    <legend>Submit Your Drawing Request</legend>
                    <label htmlFor="username">Your Name:</label>
                    <input type="text" id="username" name="username" required />
                    <br />

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br/>

                

                    <label htmlFor="phonenumber">Your Phone Number:</label>
                    <input type="text" id="phonenumber" name="phonenumber" required />
                    <br/>

                    <label htmlFor="description">
                        Piece Description: Please give a detailed description of what you would like the piece to look like.
                    </label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                    <br />

                    <label htmlFor="medium">Please select what you would like your piece made of.</label>
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
                    <br />

                    <label htmlFor="referenceUrl">Reference URL: Link a Pinterst Board, link to image, or something that is useful for creating your piece.</label>
                    <input type="url" id="referenceUrl" name="referenceUrl" placeholder="https://example.com" />
                    <br />

                    <label htmlFor="image-upload">Upload Reference Image:</label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    {imagePreview && (
                        <div style={{ marginTop: '10px' }}>
                            <p>Uploaded Image:</p>
                            <img
                                src={imagePreview}
                                alt="Uploaded preview"
                                style={{ maxWidth: '100%', maxHeight: '200px', border: '1px solid #ccc' }}
                            />
                        </div>
                    )}
                    <br />

                    <input type="submit" value="Submit" />
                </fieldset>
            </form>

            {/* Submission Status */}
            {submissionStatus && <p style={{ marginTop: '20px' }}>{submissionStatus}</p>}
        </div>
    );
}
