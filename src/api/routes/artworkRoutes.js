import express from 'express';
const router = express.Router();

import {
    createArtwork,
    updateArtwork,
    deleteArtwork,
    getAllArtworks,
    getArtworkById,
    getArtworkByTag,
} from '../controllers/artworkCtrl.js';


router.route('/artwork').post(createArtwork);

router.route('/artwork/:id').post(updateArtwork);

router.route('/artwork/:id').delete(deleteArtwork);

router.route('/artworks').get(getAllArtworks);

router.route('/artwork/:id').get(getArtworkById);

router.route('/artworks/tags/:tag').get(getArtworkByTag);


export default router;
