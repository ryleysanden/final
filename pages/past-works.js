import Navbar from '../components/Navbar';
import Drawing from '../components/Drawing';
import { useRef } from 'react';


export default function PastWorks() {
    const canvasRef = useRef(null);


    const handleSaveDrawing = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const image = canvas.toDataURL('image/png'); // Save the drawing as a Base64 image
            const newTab = window.open();
            if (newTab) {
                newTab.document.body.style.margin = '0'; // Remove margin for the image
                const imgElement = newTab.document.createElement('img');
                imgElement.src = image;
                imgElement.style.width = '100%'; // Optional: Scale to fit the tab
                imgElement.style.height = 'auto';
                newTab.document.body.appendChild(imgElement);
            } else {
                alert('Could not open new tab. Please enable popups for this site.');
            }
        } else {
            alert('No drawing to save. Please create a drawing first.');
        }
    };


    return (
        <div>
            <Navbar />
            <h2>Past Works</h2>
            <p>Draw something and save your work!</p>
            <Drawing canvasRef={canvasRef} />
            <button onClick={handleSaveDrawing} style={styles.button}>
                Save Drawing
            </button>
        </div>
    );
}


const styles = {
    button: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};
