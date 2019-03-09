const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { isEmpty } = require('lodash');

const checkUnique = (val, array) => {
  return !array.includes(val);
};

const generatePasswordHash = (password, salt) => {
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 48, 'sha512').toString('base64');
  return hash;
};

const generateToken = (payload, secretKey, options = {}) => {
  // console.log(payload, secretKey, ...options)
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

// input -> filename.jpg
// if there's a exact file named filename.jpg, change into filename-1.jpg and so on...
const generateFilename = async (inputFilename, allFilename) => {
  // filename consist of 3 section (name (can contain dot), dot, and extension)
  const filename = inputFilename.replace(/[^a-zA-Z\d\\_\\-\\.]/g, '-');

  if (isEmpty(allFilename)) {
    return filename;
  }

  allFilename = allFilename.map((item) => item.file_name);
  const lastDotIndex = filename.lastIndexOf('.');
  const originalName = filename.substring(0, lastDotIndex);
  const extension = filename.substring(lastDotIndex);

  const includedFilenames = allFilename.filter((item) => item.includes(originalName));

  if (isEmpty(includedFilenames)) {
    return filename;
  }

  if (includedFilenames.length === 1) {
    return `${originalName}_1${extension}`;
  } else {
    const lastFile = includedFilenames[includedFilenames.length - 1];
    const lastDotIndex = lastFile.lastIndexOf('.');
    const lastUnderscoreIndex = lastFile.lastIndexOf('_');
    const fileIndex = lastFile.substring(lastUnderscoreIndex + 1, lastDotIndex);

    return `${originalName}_${parseInt(fileIndex, 10) + 1}${extension}`;
  }
};


const regexUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

module.exports = {
  checkUnique,
  generatePasswordHash,
  generateToken,
  regexUuid,
  generateFilename,
};
