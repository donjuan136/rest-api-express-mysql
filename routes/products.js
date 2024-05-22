var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const { Product } = require("../models")
//const {Product} = require("../models")
//const { Product } = require("../models/Product.js")
const v = new Validator();

router.get('/',async(req,res) =>{
    const products = await Product.findAll();
    return res.json(products)
});

router.get('/:id',async(req,res) =>{
    const id = req.params.id;
    const product = await Product.findByPK(id);
    return res.json(product||{})
});

router.post('/', async(req, res) =>{
    const schema ={
        name:'string',
        brand:'string',
        description:'string|optional',
    }
    const validate = v.validate(req.body, schema);
   
    if (validate.length){ 
        return res.status(400).json(validate);
    }
    //res.send('ok')
    const product =  await Product.create(req.body);
    res.json(product);
});


router.put('/:id', async (req, res,)=>{
    const id = req.params.id;
    let product = await Product.findByPK(id);
    if (!product) {
        return res.json({message:"product not found"});
    }

    const schema ={
        name:'string|optional',
        brand:'string|optional',
        description:'string|optional',
    }
    const validate = v.validate(req.body, schema);
   
    if (validate.length){ 
        return res.status(400).json(validate);
    }
    product =await product.update(req,body);
    res.json(product);
  });

  router.delete('/:id', async(req,res) =>{
    const id = req.params.id;
    const product = await Product.findByPK(id);
    if (!product) {
        return res.json({message:"product not found"});
    }
    //jika ada productnya tinggal hapus
    await product.destroy();
    res.json({
        message:"product deleted"
    })
  })

module.exports = router;