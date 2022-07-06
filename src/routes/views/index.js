const { Router } = require('express');
const router = Router();

const {
  renderFeedback,
  renderHome,
  renderError,
} = require('../../controllers/views');

router.get('/feedback', renderFeedback);
router.get('/', renderHome);
router.get('/*', renderError);
//check if feedback works
module.exports = router;
