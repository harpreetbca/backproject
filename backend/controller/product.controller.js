import mongoose from "mongoose"
import Modelproduct from "../models/product.js"

export const getprduct = async (req,res) =>
{
    
    try{
        const getdata = await Modelproduct.find({});
res.status(200).json({success: true, data: getdata});
       
    }
    catch(error)
    {
        console.log(`error : ${error.message}`);
        res.status(404).json({success: false, message: "error found"});
    }
};

export const createproduct = async(req,res) =>
{
    const pro = req.body;
    if(!pro.name || !pro.price || !pro.stock)
    {
        res.status(400).json({success: false, message: "fill all the field"});
    }

    const product = new Modelproduct(pro);
    try{
      await product.save();
      res.status(200).json({success: true, data: product});
    }

    catch(error)
    {
        console.error(`error: ${error.message}`);
        res.status(500).json({success: false, message: error});
    }
};

export const updateproduct = async(req,res) =>
{
  const {id} = req.params;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id))
  {
    return res.status(400).json({success: false, message: "enter valid id"});
  }

  try{
    const pro = await Modelproduct.findByIdAndUpdate(id, product, {new: true});
res.status(200).json({success: true, data: pro});
  }
  catch(error)
  {
    console.error(`Error: ${error.message}`);
    res.status(500).json({success: false, message: "error found"});
  }
};

export const deleteproduct = async(req,res) =>
{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id))
  {
    return res.status(400).
               json({success: false, message: "enter valid id"});
  }

  try{
    const pro  = await Modelproduct.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "data deleted"});
  }

  catch(error)
  {
    console.error(`error: ${error.message}`);
    res.status(400).json({success: false, message: "error"});
  }
};