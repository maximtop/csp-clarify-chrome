const { promises: fs } = require('fs');

const getFile = async (filePath) => {
    console.log(filePath);
    let file;
    try {
        file = await fs.readFile(filePath, {encoding: 'utf8'});
    } catch (e) {
        throw new Error('there is no such file');
    }
    return file;
};

module.exports = { getFile };
