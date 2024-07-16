import { readFile } from 'node:fs/promises';

async function getStates(filePath) {
    try {
        const data = await readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        const states = Object.keys(jsonData);
        return states;
    } catch (err) {
        console.error('Error reading or parsing file:', err);
        throw err;
    }
}

async function getCities(filePath, keyToFind) {
    try {
        const data = await readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        if (keyToFind && jsonData[keyToFind]) {
            return jsonData[keyToFind];
        } else {
            throw new Error(`Key '${keyToFind}' not found or has no values.`);
        }
    } catch (err) {
        console.error('Error reading or parsing file:', err);
        throw err;
    }
}

export { getStates, getCities };
