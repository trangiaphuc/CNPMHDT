const db = require('../../models');
const Product = db.products;
const Images = db.images;
const fs = require('fs');
const Sequelize = require("sequelize");
const { resolveNs } = require('dns/promises');
const { resolveSoa } = require('dns');

exports.addNewProduct = (req, res)=>{

    console.log(req.body);
    // res.send("You're in Product Controller");
    try{    
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }

        console.log("You're in Product Controller");

        const productImages = fs.readFileSync(
          __basedir + "/resources/upload/" + req.file.filename
        );

        Images.create({
            imageUri: "/resources/images/productImages/" + req.file.filename,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .then((createdImage) => {
            if(createdImage){

                fs.writeFileSync(
                    __basedir + "/resources/images/productImages/" + req.file.filename,
                    productImages
                );

                Product.create({
                    productName: req.body.productName,
                    isRequestIMEI: req.body.isRequestIMEI,
                    VAT: req.body.VAT,
                    deliveryVehicle: req.body.deliveryVehicle,
                    isInputIMEI: req.body.isInputIMEI,
                    isGiftVoucher: req.body.isGiftVoucher,
                    isCanReturnOutput: req.body.isCanReturnOutput,
                    maingroupId: req.body.maingroupId,
                    subgroupId: req.body.subgroupId,
                    brandId: req.body.brandId,
                    quantityUnitId: req.body.quantityUnitId,
                    imageId: createdImage.id,
                })
                .then((createdroduct) =>{
                    if(createdroduct){
                        res.status(201).send({
                            "message": "Tạo mới sản phẩm thành công, mã sản phẩm"+ createdroduct.id,
                            "createdProduct": createdroduct
                        })
                    }
                })
                .catch((err) => {
                    res.status(500).send({ "message": err.message });
                })
            }
        })
        .catch((err) => {
            res.status(500).send({"message": err.message})
        })        
    }
    catch (err) {
        res.status(500).send({ "message": err.message });
    }  

}

exports.getOneProduct =(req, res)=>{
    Product.findOne({
        where: {id: req.params.productId}
    })
    .then(product =>{
        if(product){
           Images.findOne({
               where: {id: product.imageId}
           })
           .then(productImage =>{
                if(productImage){
                    const image = fs.readFileSync(
                        __basedir + productImage.imageUri
                    )

                    var base64ProductImage = "data:image/png;base64," + Buffer.from(image).toString("base64");
                    product.setDataValue('productImage', base64ProductImage);
                    res.status(200).send({
                        product: product
                    });
                }
           })
           .catch(err=>{
               res.status(500).send({message: err.message})
           })
        // res.status(200).send({product: product})
        }
    })
    .catch(err =>{
        res.status(500).send({message: err.message});
    })
}


exports.searchProductWithKeyword = (req, res)=>{
    Product.findAll({
        where: Sequelize.literal('MATCH (productName) AGAINST (:keyword)'),
        replacements: {
          keyword: req.body.keyword
        }
    })
    .then(productList =>{

        var searchResult = [];
        productList.forEach(product =>{
            Images.findOne({
                where: {id: product.imageId}
            })
            .then(productImage =>{
                 if(productImage){
                    const image = fs.readFileSync(
                         __basedir + productImage.imageUri
                    )
 
                    var base64ProductImage = "data:image/png;base64," + Buffer.from(image).toString("base64");
                    product.setDataValue('productImage', base64ProductImage);
                    // searchResult.push(product);
                    

                    console.log("phuctg2106" + productList.indexOf(product));
                    if(productList.indexOf(product) == productList.length -1){
                        res.status(200).send({resultl: productList});
                    }
                 }
            })
            .catch(err=>{
                res.status(500).send({message: err.message})
            })

        })
    })
    .catch(err=>{
        res.status(500).send({message: err.message})
    })
}

exports.testAPI = (req, res)=>{
    res.send({ "message": "Hello"})
}