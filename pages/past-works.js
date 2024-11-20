import Navbar from '../components/Navbar';
import Drawing from '../components/Drawing';
import PastWorks from '../components/PastWorks'; 
import { useRef } from 'react';  


export default function PastWorksPage() {
    const canvasRef = useRef(null);

    const handleSaveDrawing = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const image = canvas.toDataURL('image/png'); 
            if (newTab) {
                newTab.document.body.style.margin = '0'; 
                const imgElement = newTab.document.createElement('img');
                imgElement.src = image;
                imgElement.style.width = '100%'; 
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
            
            {/* First, display the Past Works gallery */}
            <PastWorks /> 
            <p>Feeling inspired by Ashton's work? Go ahead a create your own master piece!</p>
            <p>Draw something and save your work!</p>
            {/* Then, display the drawing canvas */}
            <Drawing canvasRef={canvasRef} />
        </div>
    );
}
