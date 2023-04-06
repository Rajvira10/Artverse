import express from 'express';
const router = express.Router();

import {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    getArtworks,
    getArtworkById,
    updateArtworkById,
    deleteArtwork,
    getOrders,
    getOrderById,
    updateOrderById,
    deleteOrder,
    createArtwork,
    createOrder
} from '../controllers/adminCtrl.js';

router.route('/users').get(getAllUsers);

router.route('/users/:userId').get(getUserById);

router.route('/users/:userId').post(updateUserById);

router.route('/users/:userId').delete(deleteUserById);

router.route('/artworks').get(getArtworks);

router.route('/artworks/:artworkId').get(getArtworkById);

router.route('/artworks/:artworkId').post(updateArtworkById);

router.route('/artworks/:artworkId').delete(deleteArtwork);

router.route('/orders').get(getOrders);

router.route('/orders/:orderId').get(getOrderById);

router.route('/orders/:orderId').post(updateOrderById);

router.route('/orders/:orderId').delete(deleteOrder);

router.route('/artworks/create').post(createArtwork);

router.route('/orders/create').post(createOrder);

export default router;
