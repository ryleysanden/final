import React, { useEffect } from 'react';


const Drawing = ({ canvasRef }) => {
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');


        let isDrawing = false;
        let prevX = null;
        let prevY = null;


        const getMousePos = (evt) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top,
            };
        };


        const drawLine = (e) => {
            if (!isDrawing) return;
            const { x, y } = getMousePos(e);
            if (prevX === null || prevY === null) {
                prevX = x;
                prevY = y;
                return;
            }
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
            prevX = x;
            prevY = y;
        };


        const startDrawing = () => {
            isDrawing = true;
        };


        const stopDrawing = () => {
            isDrawing = false;
            prevX = null;
            prevY = null;
        };


        // Attach event listeners
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mousemove', drawLine);


        // Clean up event listeners on unmount
        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mousemove', drawLine);
        };
    }, [canvasRef]);


    return (
        <canvas
            ref={canvasRef}
            id="canvas"
            width={600}
            height={400}
            style={{ border: '1px solid black', display: 'block', margin: 'auto' }}
        ></canvas>
    );
};


export default Drawing;
