//Importa os métodos 'model' e 'Schema' do pacote 'mongoose'
import { model, Schema } from 'mongoose';

//Cria um modelo chamado 'Order' utilizando o método 'model'
export const Order = model('Order', new Schema({
    // Definindo o campo 'table' do tipo String e obrigatório
    table: {
        type: String,
        required: true,
    },
    //Define o campo 'status' do tipo String, com valores enumerados e um valor padrão
    status: {
        type: String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'], 
        default: 'WAITING', 
    },
    //Define o campo 'createdAt' do tipo Date, com um valor padrão de data atual
    createdAt: {
        type: Date,
        default: Date.now,
    },
    //Define o campo 'products' que é um array de objetos com 'product' e 'quantity'
    products: {
        required: true,
        type: [{
            //Cada objeto tem um campo 'product' do tipo ObjectId que faz referencia o modelo 'Product'
            product: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product', // Referencia ao modelo 'Product'
            },
            //e um campo 'quantity' do tipo Number, com um valor padrão de 1
            quantity: {
                type: Number,
                default: 1,
            },
        }],
    },
}));
