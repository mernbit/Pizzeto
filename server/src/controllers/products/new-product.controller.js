const Product = require("../../models/Product/product.model");
const { cloudUpload } = require("../../utils/cloudinary");
const fs = require("fs");

const newProduct = async (req, res) => {
  try {
    const { title, description, price, category, stock } = req.body;
    const images = req.files;
    const uploadResults = await Promise.all(
      images.map((file) =>
        cloudUpload(file.path, { folder: "products" })
          .then((result) => {
            console.log("result", result);
            return result.secure_url;
          })
          .catch((error) => console.log(error))
          .finally(() => {
            fs.unlinkSync(file.path);
          }),
      ),
    );

    const product = new Product({
      title,
      description,
      price,
      category,
      stock,
      images: uploadResults,
    });
    await product.save();
    res.status(201).json({ message: "success", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error });
  }
};

module.exports = { newProduct };
