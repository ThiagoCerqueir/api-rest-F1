import { Router } from 'express'
import campeoesController from './app/controllers/campeoesController.js'
import authController from './app/controllers/authController.js';
import authenticate from './app/middlewares/authMiddleware.js';

const router = Router()

// ROTAS PROTEGIDA
router.get('/campeoes', authenticate, campeoesController.index)
router.get('/campeoes/:id', authenticate, campeoesController.show)
router.post('/campeoes', authenticate, campeoesController.store)
router.put('/campeoes/:id', authenticate, campeoesController.update)
router.delete('/campeoes/:id', authenticate, campeoesController.delete)

// ROTAS NÃO PROTEGIDA
router.post('/auth/register',  authController.register);
router.post('/auth/login', authController.login);

export default router