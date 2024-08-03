const Session = require('../models/session');

exports.getSessions = async (req, res) => {
  const userId = req.session.userId;
  try {
    const sessions = await Session.find({ userId });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
