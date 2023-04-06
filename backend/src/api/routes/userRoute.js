import express from 'express';
const router = express.Router();

import {
  register,
  login,
  logout,
  getUserInfo,
  postUserInfo,
  getUserPortfolio,
  postUserPortfolio,
  getUserFavorites,
  postUserFavorites,
  deleteUserFavorites,
  getUserFollowing,
  postUserFollowing,
  deleteUserFollowing,
  getUserFollowers,
} from '../controllers/userCtrl.js';

router.route('/auth/register').post(register);

router.route('/auth/login').post(login);

router.route('/auth/logout').post(logout);

router.route('/:userId').get(getUserInfo);

router.route('/:userId').post(postUserInfo);

router.route('/:userId/portfolio').get(getUserPortfolio);

router.route('/:userId/portfolio').post(postUserPortfolio);

router.route('/:userId/favorites').get(getUserFavorites);

router.route('/:userId/favorites').post(postUserFavorites);

router.route('/:userId/favorites/:artworkId').delete(deleteUserFavorites);

router.route('/:userId/following').get(getUserFollowing);

router.route('/:userId/following').post(postUserFollowing);

router.route('/:userId/following/:followingId').delete(deleteUserFollowing);

router.route('/:userId/followers').get(getUserFollowers);

export default router;
