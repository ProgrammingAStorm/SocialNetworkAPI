const router = require('express').Router();
const { 
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/')
.get(getThoughts);

router.route('/:id')
.get(getThoughtById)
.post(createThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions')
.post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;