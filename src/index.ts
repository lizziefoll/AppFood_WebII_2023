// Importa os módulos
import path from 'node:path'; //Módulo com caminho de arquivos
import express from 'express'; //Framework que cria aplicações web
import mongoose from 'mongoose'; //ODM (Object Document Mapper) para MongoDB

//Importa o router definido no outro arquivo
import { router } from './router';

//Conecta no banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		//Inicia a aplicação Express
		const app = express();
		const port = 3000;

		//Define uma rota para servir arquivos estáticos na pasta 'uploads'
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

		//Habilita o uso de JSON no corpo das requisições
		app.use(express.json());

		//Utiliza o router importado para gerenciar as rotas da aplicação
		app.use(router);

		//Inicia o servidor e escutando na porta 3000
		app.listen(port, () => {
			console.log(`🚗Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log('Erro ao conectar no MongoDB')); //caso de erro ao conectar no banco de dados, mostra a mensagem de erro no console
