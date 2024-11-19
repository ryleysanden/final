import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Drawing.module.css';

const Drawing = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(2);
    const [color, setColor] = useState('#000000');

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';

        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.closePath();
        setIsDrawing(false);
    };

    const saveDrawing = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL('image/png'); // Converts canvas to PNG data URL
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'drawing.png'; // File name for the saved drawing
        link.click(); // Trigger the download
    };

    return (
        <div className={styles.container}>
            <div className={styles.controlGroup}>
                <label htmlFor="color-picker">Pick a Color:</label>
                <input
                    id="color-picker"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <div className={styles.controlGroup}>
                <label htmlFor="line-width-picker">Line Width:</label>
                <input
                    id="line-width-picker"
                    type="range"
                    min="1"
                    max="10"
                    value={lineWidth}
                    onChange={(e) => setLineWidth(parseInt(e.target.value))}
                />
            </div>
            <canvas
                ref={canvasRef}
                width="500"
                height="500"
                className={styles.canvas}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
            <button className={styles.saveButton} onClick={saveDrawing}>
                Save Drawing
            </button>
        </div>
    );
};

export default Drawing;
