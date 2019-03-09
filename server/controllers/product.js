const crypto = require('crypto');
const models = require ('../modals').product;
const {
  checkUnique,
  generateFilename,
} = require('./utils');

const { SITE_URL, publicDir } = require('../utils/config');
// body: { productName, productDescription, price, collectionId }
const addProduct = async (imgFile, body, dateNow) => {
  const allId = await models.getAllId();
  const allProductId = await models.getAllProductId();

  const id = allId.length === 0 ? 1 : allId[allId.length - 1].id + 1;
  const filename = await generateFilename(imgFile.filename);
  let productId = generateProductId();
  while (!checkUnique(productId, allProductId.map((item) => item.product_id))) {
    productId = generateProductId();
  }

  const collectionId = body.collectionId;
  const productName = body.productName;
  const productDescription = body.productDescription;
  const price = body.price;

  const imgUrl = generateUrl(imgFile.path);

  if (imgUrl.length > 256) {
    return { status: 400, message: 'Image name is too big, please shorten it. ' };
  }

  models.insertProductTable({
    id,
    collection_id: collectionId,
    product_id: productId,
    product_name: productName,
    product_description: productDescription,
    price,
    file_name: filename,
    img_url: imgUrl,
    creation_date: dateNow,
  });

  return { status: 200, message: 'Collection Added Successfully' };
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
};
