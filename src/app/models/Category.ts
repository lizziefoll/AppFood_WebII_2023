//Importa os métodos 'model' e 'Schema' do pacote 'mongoose'
import { model, Schema } from 'mongoose';

//Cria um modelo chamado 'Category' utilizando o método 'model'
export const Category = model('Category', new Schema({
    // Definindo o campo 'name' do tipo String e obrigatório
    name: {
        type: String,
        required: true,
    },
    //Define o campo 'icon' do tipo String e obrigatório
    icon: {
        type: String,
        required: true,
    }
}));
