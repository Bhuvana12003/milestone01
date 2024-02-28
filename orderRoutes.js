const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for orders
router.post('/', authMiddleware.authenticate, orderController.placeOrder);
router.get('/user', authMiddleware.authenticate, orderController.getOrdersByUser);
router.get('/admin', authMiddleware.authenticate, authMiddleware.isAdmin, orderController.getAllOrders);
router.put('/:id', authMiddleware.authenticate, authMiddleware.isAdmin, orderController.updateOrderStatus);

module.exports = router;
