const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  addReaction,
  deleteThought,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions').delete(deleteReaction);
module.exports = router;