const crypto = require('crypto');
const { SITE_URL, publicDir } = require('../utils/config');
const models = require('../models').product;
const collectionModels = require('../models/collection');
const {
  checkUnique,
  generateFilename,
} = require('./utils');

// body: { productName, productDescription, price, collectionId }
const addProduct = async (imgFile, body, dateNow) => {
  const allId = await models.getAllId();
  const allProductId = await models.getAllProductId();

  const id = allId.length === 0 ? 1 : allId[allId.length - 1].id + 1;
  let allFilename = await models.getAllFilename();
  const filename = await generateFilename(imgFile.filename, allFilename);
  let productId = generateProductId();
  while (!checkUnique(productId, allProductId.map((item) => item.product_id))) {
    productId = generateProductId();
  }

  const collectionId = body.collectionId;
  const foreignKeyCollectionId = await collectionModels.getIdByCollectionId(collectionId);
  const productName = body.productName;
  const productDescription = body.productDescription;
  const price = body.price;

  const imgUrl = generateUrl(imgFile.path);

  if (imgUrl.length > 256) {
    return { status: 400, message: 'Image name is too big, please shorten it. ' };
  }

  models.insertProductTable({
    id,
    collection_id: foreignKeyCollectionId[0],
    product_id: productId,
    product_name: productName,
    product_description: productDescription,
    price,
    file_name: filename,
    img_url: imgUrl,
    creation_date: dateNow,
  });

  // update items count on collection table

  collectionModels.updateItemsCountById(foreignKeyCollectionId[0]);

  return { status: 200, message: 'Product Added Successfully' };
};

const getProductList = async () => {
  const productList = await models.getProductList();

  return { status: 200, message: 'Success get product list', data: productList.map((i) => ({ ...i, id: i.product_id })) };
};

const generateUrl = (path) => {
  const publicDirLength = publicDir.length;

  const truncatedPath = path.substring(publicDirLength);

  const url = `http://${SITE_URL}${truncatedPath}`;

  return url;
};

const generateProductId = () => {
  const collectionId = crypto.randomBytes(12).toString('hex');
  return collectionId;
};

module.exports = {
  addProduct,
  generateFilename,
  getProductList,
};
