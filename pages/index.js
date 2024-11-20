import Navbar from '../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <Navbar />  
            <h2>About</h2>


            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                    <Image
                        src="/images/ashton.jpeg"  // Ensure the correct path to the image
                        alt="Artist Image"
                        width={500}
                        height={300}
                        style={{ maxWidth: '100%', height: 'auto' }}  // Ensures image is responsive
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <p>Ashton is a senior at Montana State University and is a senior in the pre-vet program. 
                      She loves to create art and is especially inspired by the gorgeous nature that Montana
                      has to offer. Most of her pieces are made of ceramic and custom fly fishing nets. She 
                      also enjoys painting and drawing. Outside of school and work she enjoys climbing, hiking, 
                      hanging out with her friends, and especially her animals!
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexDirection: 'row-reverse' }}>
                <div style={{ flex: 1 }}>
                    <Image
                        src="/images/turtle.jpeg"  
                        alt="Second Image"
                        width={500}
                        height={300}
                        style={{ maxWidth: '100%', height: 'auto' }}  
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <p>Ashton loves to travel and has done many adventures to further her interest 
                      in Marine Biology. Here she is this summer working with sea turtles in 
                      Costa Rica. She will be spending her final semester in Hawaii and will attend 
                      vet school after graduating. She wants to be a marine animal vet. 
                    </p>
                </div>
            </div>
        </div>
    );
}

