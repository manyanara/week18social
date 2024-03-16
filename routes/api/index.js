const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const thoughtRoutes = require('./thoughtRoutes');

// router.use('/thought', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
