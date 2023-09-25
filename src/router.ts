import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// Configuração do multer para upload de arquivos
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Listar categorias
router.get('/categories', listCategories);

// Criar categoria
router.post('/categories', createCategory);

// Listar produtos
router.get('/products', listProducts);

// Criar produtos (incluindo upload de imagem)
router.post('/products', upload.single('image'), createProduct);

// Obter produtos por categoria
router.get('/categories/:categoryId/products', listProductsByCategory);

// Listar pedidos
router.get('/orders', listOrders);

// Criar pedidos
router.post('/orders', createOrder);

// Alterar o status do pedido (usando PATCH, pois é uma alteração parcial)
router.patch('/orders/:orderId', changeOrderStatus);

// Excluir/cancelar pedido
router.delete('/orders/:orderId', cancelOrder);
