const path = require('path');

const renderFeedback = (req, res) => {
  // GET Route for feedback page
  return res.sendFile(
    path.join(__dirname, '../../../public/pages/feedback.html')
  );
};
const renderHome = (req, res) => {
  // GET Route for homepage
  return res.sendFile(path.join(__dirname, '../../../public/index.html'));
};

const renderError = (req, res) => {
  return res.sendFile(path.join(__dirname, '../../../public/pages/404.html'));
};
module.exports = {
  renderFeedback,
  renderHome,
  renderError,
};
