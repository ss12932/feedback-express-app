const path = require('path');
const { readFromFile } = require('../../helpers');

const TIPS_FILE_PATH = path.join(__dirname, '../../tips.json');

const getTips = (req, res) => {
  try {
    const tips = readFromFile(TIPS_FILE_PATH);

    return res.json(tips);
  } catch (err) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const createTip = (req, res) => {};
module.exports = {
  getTips,
  createTip,
};
