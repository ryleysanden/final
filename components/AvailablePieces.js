import Image from 'next/image';
import styles from '../styles/AvailablePieces.module.css';

const availablePieces = [
    { src: '/images/available/bowl.jpeg', title: 'Small Bowl', medium: 'Ceramic' },
    { src: '/images/available/horseshoe.jpeg', title: 'Horse Shoe Crab', medium: 'Ceramic' },
    { src: '/images/available/IMG_6483.jpeg', title: 'Great Blue Heron Fish Net', medium: 'Paint and Wood Burning' },
    { src: '/images/available/IMG_6485.jpeg', title: 'Great Blue Heron Fish Net, close up', medium: 'Paint and Wood Burning' },
    { src: '/images/available/mug.jpeg', title: 'White Mug', medium: 'Ceramic' },
    { src: '/images/available/waterfall.jpeg', title: 'Waterfall Fish Net', medium: 'Paint and Wood Burning' },
    { src: '/images/available/wavybowl.jpeg', title: 'Wavy Bowl', medium: 'Ceramic' },
];

export default function AvailablePieces() {
    return (
        <div>
            <h1>Available Pieces</h1>
            <div className={styles.gallery}>
                {availablePieces.map((piece, index) => (
                    <div key={index} className={styles.piece}>
                        <Image
                            src={piece.src}
                            alt={`Image of ${piece.title}`}
                            width={300}
                            height={300}
                        />
                        <p className={styles.description}>
                            Title: "{piece.title}" - Medium: {piece.medium}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}