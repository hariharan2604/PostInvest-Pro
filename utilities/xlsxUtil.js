// utils/excel.js
import ExcelJS from 'exceljs';
import fs from 'fs';

async function readExcelFile(filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);

    const jsonData = [];
    worksheet.eachRow({ includeEmpty: true }, (row) => {
        const rowValues = row.values;
        jsonData.push(rowValues);
    });

    // Delete the file after processing
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting the file:', err);
            throw new Error('Error processing the file.');
        }
    });

    return jsonData;
}
async function convertJsonToXlsx(jsonData) {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet 1');

        // Add rows to the worksheet
        jsonData.forEach((row) => {
            worksheet.addRow(row);
        });

        // Convert the workbook to a buffer
        const buffer = await workbook.xlsx.writeBuffer();
        return buffer;
    } catch (error) {
        throw new Error('Error creating the Excel file.');
    }
}

export { readExcelFile, convertJsonToXlsx };