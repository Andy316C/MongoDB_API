const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/appController');

// /api/applications
router.route('/').get(getThought).post(createThought);

// /api/applications/:applicationId
router
  .route('/:thoughts')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

 

router.route('/:thoughts/reaction').post(addReaction);


router.route('/:thoughts/reaction/:reactionId').delete(removeReaction);

module.exports = router;
