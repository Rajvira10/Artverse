import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import properties from "../../config/properties.js"

export const login = async (req, res) => {
    
    const { email, password } = req.body;
    // Validate that all required fields are present
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    try {
    // Check if user with email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, properties.JWT_SECRET);

    // Return success response with token
    res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // Validate that all required fields are present
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    try {
      // Check if user with email already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      // Create new user document
      user = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10), // Hash password
      });
  
      // Save user document to database
      await user.save();
  
      // Create JWT token
      const token = jwt.sign({ id: user._id }, properties.JWT_SECRET);
  
      // Return success response with token
      res.status(201).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}

export const logout = async (req, res) => {
    req.session.destroy();
    res.clearCookie(process.env.SESSION_NAME);
    res.json({ message: 'Logged out successfully' });
}

export const getUserInfo = async (req, res) => {
    const { userId } = req.params;
    
    try {
        // Find user by ID
        const user = await User.findById(userId).select('-password');

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user information
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const postUserInfo = async (req, res) => {
    const { userId } = req.params;
    const { name, bio, avatar, portfolio } = req.body;

    try {
    // Find user by ID
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user information
        user.name = name || user.name;
        user.bio = bio || user.bio;
        user.avatar = avatar || user.avatar;
        user.portfolio = portfolio || user.portfolio;

        // Save updated user information
        await user.save();

        // Return success response
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
export const getUserPortfolio = async (req, res) => {
    const { userId } = req.params;

    try {
        // Find user by ID and return only their portfolio information
        const user = await User.findById(userId).select('portfolio');

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user's portfolio information
        res.json(user.portfolio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
export const postUserPortfolio = async (req, res) => {
    const { userId } = req.params;
    const { title, description, artworks } = req.body;

    try {
        // Find user by ID
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user's portfolio information
        user.portfolio.title = title || user.portfolio.title;
        user.portfolio.description = description || user.portfolio.description;
        user.portfolio.artworks = artworks || user.portfolio.artworks;

        // Save updated user information
        await user.save();

        // Return success response
        res.json({ message: 'Portfolio updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
export const getUserFavorites = async (req, res) => {
    const { userId } = req.params;

    try {
      // Find user by ID and return only their favorites
      const user = await User.findById(userId).select('favorites');
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return user's favorites
      res.json(user.favorites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}
export const postUserFavorites = async (req, res) => {
    const { userId } = req.params;
  const { artworkId } = req.body;

  try {
    // Find user by ID
    const user = await User.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add artwork ID to user's favorites
    user.favorites.push(artworkId);

    // Save updated user information
    await user.save();

    // Return success response
    res.json({ message: 'Favorite added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

}
export const deleteUserFavorites = async (req, res) => {
    const { userId, artworkId } = req.params;

    try {
      // Find user by ID
      const user = await User.findById(userId);
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Remove artwork ID from user's favorites
      user.favorites.pull(artworkId);
  
      // Save updated user information
      await user.save();
  
      // Return success response
      res.json({ message: 'Favorite removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  
}
export const getUserFollowing = async (req, res) => {
    const { userId } = req.params;

    try {
      // Find user by ID and populate their following array with full user objects
      const user = await User.findById(userId).populate('following', 'username name avatar');
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return user's following array
      res.json(user.following);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}
export const postUserFollowing = async (req, res) => {
    const { userId } = req.params;
  const { followingId } = req.body;

  try {
    // Find user by ID
    const user = await User.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add following user ID to user's following array
    user.following.push(followingId);

    // Save updated user information
    await user.save();

    // Return success response
    res.json({ message: 'Following added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
export const deleteUserFollowing = async (req, res) => {
    const { userId, followingId } = req.params;

  try {
    // Find user by ID
    const user = await User.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove following user ID from user's following array
    user.following.pull(followingId);

    // Save updated user information
    await user.save();

    // Return success response
    res.json({ message: 'Following removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export const getUserFollowers = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).populate('followers', '-password');
        const followers = user.followers;
        res.status(200).json({ followers });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}

