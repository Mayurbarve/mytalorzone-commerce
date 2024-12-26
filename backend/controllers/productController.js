import { v2 as cloudnary } from 'cloudinary'
import productModel from "../models/productModel.js"


//function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudnary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        let parsedSizes;
        try {
            parsedSizes = JSON.parse(sizes);
        } catch (error) {
            return res.json({ success: false, message: "Invalid sizes format" });
        }

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: parsedSizes,
            image: imagesUrl,
            date: Date.now()

        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()


        res.json({ success: true, message: "Product Added" })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//function for listProduct
const listProduct = async (req, res) => {
    try {

        const product = await productModel.find({});
        res.json({ success: true, product })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


//function for removeProduct
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "product removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//function for singleProduct
const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({ success: true, product })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addProduct, listProduct, removeProduct, singleProduct }