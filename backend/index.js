import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { contact } from './Routes/contactRoutes.js';  // Ensure the correct file path

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Correctly register the contact router middleware for '/contact' route
app.use('/', contact);

// app.get('/', (req, res) => {
//     res.send('API is running');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
