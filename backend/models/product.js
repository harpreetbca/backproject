import mongoose from 'mongoose';

const Schemaproduct = new mongoose.Schema(
   {
      name: {
        type: String,
        required: true
      },
      price :
      {
        type: Number,
        required: true
      },
      stock:
      {
        type: Number,
        required: true,
      }
    },
      {
     timestamps: true,
      }
    );

    const Modelproduct = new mongoose.model("Modelproduct", Schemaproduct );

    export default Modelproduct;