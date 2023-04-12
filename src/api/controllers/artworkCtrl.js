import Artwork from '../models/artworkModel.js';
import Category from '../models/categoryModel.js';
import Tag from '../models/tagModel.js';
import Collection from '../models/collectionModel.js';
import Review from '../models/reviewModel.js'
import User from '../models/userModel.js';

export const createArtwork = async (req, res) => {
    try {
      const tagNames = req.body.tags;
      const tags = await Tag.find({ name: { $in: tagNames } }); // find tags with names in the request body
      const tagIds = tags.map((tag) => tag._id); // extract the IDs of the retrieved tags
      const artwork = new Artwork({
        title: req.body.title,
        artist: req.body.artist,
        image: req.body.image,
        description: req.body.description,
        tags: tagIds,
        // collections: req.body.collections,
        price: req.body.price,
      });
    
        const savedArtwork = await artwork.save();
    
        const user = await User.findById(req.body.artist);
        user.artworks.push(savedArtwork);
        await user.save();
        
        res.status(201).json(savedArtwork);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

export const updateArtwork = async (req, res) => {
    try {
        const artwork = await Artwork.findById(req.params.id);
    
        if (!artwork) {
          return res.status(404).json({ message: 'Artwork not found' });
        }
    
        // if (artwork.artist.toString() !== req.user._id.toString()) {
        //   return res.status(401).json({ message: 'Unauthorized' });
        // }
    
        artwork.title = req.body.title;
        // artwork.image = req.body.image;
        artwork.description = req.body.description;
        // artwork.categories = req.body.categories;
        // artwork.tags = req.body.tags;
        // artwork.collections = req.body.collections;
        artwork.price = req.body.price;
    
        const updatedArtwork = await artwork.save();
        res.status(200).json(updatedArtwork);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

export const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    await Artwork.deleteOne({ _id: artwork._id });
    res.status(200).json({ message: 'Artwork deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getAllArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.find()
        .populate('artist', 'username')
        .populate('categories', 'name')
        .populate('tags', 'name')
        .populate('collections', 'name')
        .populate({
          path: 'feedback',
          populate: {
            path: 'user',
            select: 'username',
          },
        });
    
        res.status(200).json(artworks);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

export const getArtworkById = async (req,res) => {

    try {
      const artwork = await Artwork.findById(req.params.id)
      .populate('artist', 'username')
      .populate('categories', 'name')
      .populate('tags', 'name')
      .populate('collections', 'name')
      .populate({
        path: 'feedback',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

          
      if (!artwork) {
        return res.status(404).json({ message: 'Artwork not found' });
      }
    
    let ratingSum = 0;
    let numRatings = artwork.feedback.length;
    
    for (let feedback of artwork.feedback) {
      ratingSum += feedback.rating;
    }
    
    const averageRating = numRatings > 0 ? (ratingSum / numRatings).toFixed(1) : 0;
    
    res.status(200).json({
      artwork: artwork,
      averageRating: averageRating
    });
    

    
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

export const getArtworkByTag = async (req,res) => {
    try {
      const tag = await Tag.findOne({name: req.params.tag});
      const artworks = await Artwork.find({tags: tag._id})
      .populate('artist', 'username')
      .populate('categories', 'name')
      .populate('tags', 'name')
      .populate('collections', 'name')
      .populate({
        path: 'feedback',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

      res.status(200).json(artworks);
    
      } catch (err) {
        
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
}