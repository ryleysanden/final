import Image from 'next/image';
import styles from '../styles/AvailablePieces.module.css';  

const pastWorks = [
    { src: '/images/past/fishbox.jpeg', title: 'Fish Box', medium: 'Ceramic' },
    { src: '/images/past/IMG_6484.jpeg', title: 'Two Fishes Fish Net', medium: 'Paint and Wood Burning' },
    { src: '/images/past/IMG_6486.jpeg', title: 'Two Fishes Fish Net (alt view)', medium: 'Paint and Wood Burning' },
    { src: '/images/past/lid.jpeg', title: 'Green World', medium: 'Ceramic' },
    { src: '/images/past/smallpot.jpeg', title: 'Honey Pot', medium: 'Ceramic' },
    { src: '/images/past/twofish.jpeg', title: 'Two Fishes Fish Net (alt view)', medium: 'Paint and Wood Burning' },
    { src: '/images/past/wavefront.jpeg', title: 'Catch a Wave (front view)', medium: 'Ceramic' },
    { src: '/images/past/waveside.jpeg', title: 'Catch a Wave (side view)', medium: 'Ceramic' },
];

export default function PastWorks() {
    return (
        <div>
            <h1>Past Works</h1>  
            <div className={styles.gallery}>
                {pastWorks.map((piece, index) => (
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
