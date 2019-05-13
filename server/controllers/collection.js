const crypto = require('crypto');
const { isEmpty } = require('lodash');
const models = require ('../models').collection;
const productModels = require('../models').product;
const {
  checkUnique,
  generateFilename,
} = require('./utils');

const { SITE_URL, publicDir } = require('../utils/config');

const addCollection = async (imgFile, label, dateNow) => {
  const allId = await models.getAllId();
  const allCollectionId = await models.getAllCollectionId();

  const id = allId.length === 0 ? 1 : allId[allId.length - 1].id + 1;

  let allFilename = await models.getAllFilename();
  const filename = await generateFilename(imgFile.filename, allFilename);

  let collectionId = generateCollectionId();
  while (!checkUnique(collectionId, allCollectionId.map((item) => item.collection_id))) {
    collectionId = generateCollectionId();
  }

  const imgUrl = generateUrl(imgFile.path);

  if (imgUrl.length > 256) {
    return { status: 400, message: 'Image name is too big, please shorten it. ' };
  }

  models.insertCollectionTable({
    id,
    collection_id: collectionId,
    label,
    file_name: filename,
    img_url: imgUrl,
    items_count: 0, // initialize
    creation_date: dateNow,
  });

  return { status: 200, message: 'Collection Added Successfully' };
};

const getCollectionList = async () => {
  const collectionList = await models.getCollectionList();

  return { status: 200, message: 'Success get collection list', data: collectionList };
};

const generateUrl = (path) => {
  const publicDirLength = publicDir.length;

  const truncatedPath = path.substring(publicDirLength);

  const url = `http://${SITE_URL}${truncatedPath}`;

  return url;
};

const getCollectionDetail = async (collectionId) => {

  if (isEmpty(collectionId)) {
    return { status: 400, message: 'Invalid collection_id' };
  }

  const id = await models.getIdByCollectionId(collectionId);

  if (isEmpty(id)) {
    return { status: 404, message: 'Collection Detail Not Found' };
  }

  const productById = await productModels.getAllProductByCollectionId(id[0]); // collection_id at product section IS the id at collection (as foreign key)
  const collection = await models.getCollectionDetailByCollectionId(collectionId);
  const collectionDetail = { ...collection[0], products: productById };

  return { status: 200, message: 'Success get collection detail', data: collectionDetail };
};

const generateCollectionId = () => {
  const collectionId = crypto.randomBytes(12).toString('hex');
  return collectionId;
};

module.exports = {
  addCollection,
  getCollectionList,
  generateFilename,
  getCollectionDetail,
};
