import mongoose, {Schema, model, Model} from 'mongoose'
import { IProduct } from '../interfaces'

const productSchema = new Schema({
    description: {type: String, required: true},
    images: [{type: String}],
    inStock: {type: Number, required: true, default: 0},
    price: {type: Number, required: true, default: 0},
    sizes: [{type: String, enum: ['XS','S', 'M', 'L', 'XL','XXL','XXXL'], message: 'Size is not valid'}],
    slug: {type: String, required: true, unique: true},
    tags: [{type: String}],
    title: {type: String, required: true},
    type: {type: String, enum: ['shirts','pants','hoodies','hats'], message: 'Type is not valid'},
    gender: {type: String, enum: ['men', 'women', 'kid', 'unisex'], message: 'Gender is not valid' }
},{
    timestamps: true
})

//TODO: Crear un Indice

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema)

export default Product