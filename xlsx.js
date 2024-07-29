// app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import upload from './config/multer.js'; // Import the multer configuration
import { readExcelFile,convertJsonToXlsx } from './utilities/xlsxUtil.js'; // Import the utility function

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 4000;

// Route for file upload
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        // Read the uploaded file and convert to JSON
        const jsonData = await readExcelFile(file.path);

        // Respond with the JSON data
        res.json(jsonData);
    } catch (error) {
        res.status(500).send('Error reading the file.');
    }
});

app.post('/download', async (req, res) => {
    const jsonData = req.body;

    try {
        // Use the utility function to convert JSON to XLSX buffer
        const buffer = await convertJsonToXlsx(jsonData);

        // Set the response headers
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="data.xlsx"');

        // Send the buffer as the response
        res.send(buffer);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating the Excel file.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
