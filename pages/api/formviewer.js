export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, description, drawingImage } = req.body;


        res.status(200).json({
            message: 'Form submitted successfully!',
            data: { username, description, drawingImage },
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
