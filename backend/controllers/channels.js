module.exports = {
  getAllChannels(req, res) {
    try{
      //here direct access to channel.json if use db linke mongo can work accordingly
      const data = require('../models/channel.json');
      res.status(200).json({ message: 'All channels', data });
    }
    catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
}