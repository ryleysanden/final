import Navbar from '../components/Navbar';
import { useState } from 'react';


export default function About() {
    const [currentPage, setCurrentPage] = useState('About');


    return (
        <div>
            <Navbar />
            <h2>About</h2>
            <p>Welcome to the About page! Learn more about the artist and their work.</p>
        </div>
    );
}
