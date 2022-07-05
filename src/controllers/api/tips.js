const path = require('path');
const { readFromFile, readAndAppend } = require('../../helpers');

const TIPS_FILE_PATH = path.join(__dirname, '../../db/tips.json');

const { v4: uuidv4 } = require('uuid');

const getTips = (req, res) => {
  try {
    const tips = readFromFile(TIPS_FILE_PATH);

    return res.json(tips);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
const createTip = (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (username && topic && tip) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuidv4(),
    };

    readAndAppend(newTip, TIPS_FILE_PATH);
    return res.json({ success: false, message: 'Tip added successfully 🚀' });
  } else {
    return res
      .status(500)
      .json({ success: false, message: 'Error in adding tip' });
  }
};
module.exports = {
  getTips,
  createTip,
};
