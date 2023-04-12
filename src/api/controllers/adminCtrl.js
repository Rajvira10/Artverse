import User from '../models/userModel.js';
import Artwork from "../models/artworkModel.js";
import Transaction from "../models/transactionModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const { userId } = req.body;
    const users = await User.find({_id: { $ne: userId }});
    res.json(users);
} catch (err) {
    console.error(err);
    res.status(500).send('Server error');
}
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
    
        if (!user) {
          return res.status(404).json({ msg: 'User not found' });
        }
    
        res.json(user);
      } catch (err) {
        console.error(err);
    
        if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'User not found' });
        }
    
        res.status(500).send('Server error');
      }
}

export const updateUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.userId);
    
        if (!user) {
          return res.status(404).json({ msg: 'User not found' });
        }
    
        user.name.first = req.body.first || user.name.first;
        user.name.last = req.body.last || user.name.last;
        user.email = req.body.email || user.email;
        user.bio = req.body.bio || user.bio;
        user.avatar = req.body.avatar || user.avatar;
    
        await user.save();
    
        res.json(user);
      } catch (err) {
        console.error(err);
    
        if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'User not found' });
        }
    
        res.status(500).send('Server error');
      }
}

export const deleteUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
    
        if (!user) {
          return res.status(404).json({ msg: 'User not found' });
        }
    
        await user.remove();
    
        res.json({ msg: 'User deleted' });
      } catch (err) {
        console.error(err);
    
        if (err.kind === 'ObjectId') {
          return res.status(404).json({ msg: 'User not found' });
        }
    
        res.status(500).send('Server error');
      }
}

export const getArtworks = async (req, res) => {
    try {
      const artworks = await Artwork.find();
      res.status(200).json(artworks);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
};

export const getArtworkById = async (req, res) => {
    try {
      const artwork = await Artwork.findById(req.params.artworkId);
      if (!artwork) {
        return res.status(404).json({ message: "Artwork not found" });
      }
      res.status(200).json(artwork);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
};
  

export const updateArtworkById = async (req, res) => {
    try {
      const artwork = await Artwork.findById(req.params.artworkId);
      if (!artwork) {
        return res.status(404).json({ message: "Artwork not found" });
      }
  
      const { title, artist, image, description, collections, price } = req.body;
      artwork.title = title || artwork.title;
      artwork.artist = artist || artwork.artist;
      artwork.image = image || artwork.image;
      artwork.description = description || artwork.description;
      artwork.collections = collections || artwork.collections;
      artwork.price = price || artwork.price;
  
      await artwork.save();
  
      res.status(200).json(artwork);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  

export const deleteArtwork = async (req, res) => {
    try {
      const artwork = await Artwork.findById(req.params.artworkId);
      if (!artwork) {
        return res.status(404).json({ message: "Artwork not found" });
      }
      await artwork.remove();
      res.status(200).json({ message: "Artwork removed" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  

// getOrders function
export const getOrders = async () => {
    try {
      const orders = await Transaction.find().populate(['buyer', 'seller', 'artwork']);
      return orders;
    } catch (error) {
      throw new Error('Error while fetching orders.');
    }
  };
  
  // getOrderById function
export const getOrderById = async (orderId) => {
    try {
      const order = await Transaction.findById(orderId).populate(['buyer', 'seller', 'artwork']);
      if (!order) {
        throw new Error('Order not found.');
      }
      return order;
    } catch (error) {
      throw new Error('Error while fetching order.');
    }
  };
  
  // updateOrder function
export const updateOrderById = async (orderId, updates) => {
    try {
      const order = await Transaction.findByIdAndUpdate(orderId, updates, { new: true });
      if (!order) {
        throw new Error('Order not found.');
      }
      return order;
    } catch (error) {
      throw new Error('Error while updating order.');
    }
  };
  
  // deleteOrder function
export const deleteOrder = async (orderId) => {
    try {
      const order = await Transaction.findByIdAndDelete(orderId);
      if (!order) {
        throw new Error('Order not found.');
      }
      return order;
    } catch (error) {
      throw new Error('Error while deleting order.');
    }
  };
  


// create a new artwork
export const createArtwork = async (req, res) => {
    try {
      const {
        title,
        artist,
        image,
        description,
        collections,
        price
      } = req.body;
  
      const newArtwork = await Artwork.create({
        title,
        artist,
        image,
        description,
        collections,
        price
      });
  
      res.status(201).json({ success: true, artwork: newArtwork });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  // create a new order
export const createOrder = async (req, res) => {
    try {
      const {
        buyer,
        seller,
        artwork,
        price
      } = req.body;
  
      const newOrder = await Transaction.create({
        buyer,
        seller,
        artwork,
        price
      });
  
      res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
};
  
