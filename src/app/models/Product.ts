//Importa os métodos 'model' e 'Schema' do pacote 'mongoose'
import { model, Schema } from 'mongoose';

//Cria um modelo chamado 'Product' utilizando o método 'model'
export const Product = model('Product', new Schema({
    //Define o campo 'name' do tipo String e obrigatório
    name: {
        type: String,
        required: true,
    },
    //Define o campo 'description' do tipo String e obrigatório
    description: {
        type: String,
        required: true,
    },
    //Define o campo 'imagePath' do tipo String e obrigatório
    imagePath: {
        type: String,
        required: true,
    },
    //Define o campo 'price' do tipo Number e obrigatório
    price: {
        type: Number,
        required: true,
    },
    //Define o campo 'ingredients' que é um array de objetos com 'name' e 'icon'
    ingredients: {
        required: true,
        type: [{
            //Cada objeto tem um campo 'name' do tipo String e obrigatório
            name: {
                type: String,
                required: true,
            },
            //E um campo 'icon' do tipo String e obrigatório
            icon: {
                type: String,
                required: true,
            },
        }],
    },
    //Define o campo 'category' que é um ID referenciando o modelo 'Category'
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category', //faz referencia ao modelo 'Category'
    },
}));
