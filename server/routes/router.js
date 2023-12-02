

const express = require('express');
const router = express.Router();
const {create_categories,getCategories} = require('../controllers/controller');
const {createTransactions,getTransactions,deleteTransaction,deleteBody,getLabels} = require('../controllers/control2');
router.get('/api/categories',getCategories);
router.post('/api/categories',create_categories);
router.get('/api/v1/transactions',getTransactions);
router.post('/api/v1/transactions',createTransactions);
// router.delete('/api/v1/transactions/:id',deleteTransaction);
router.delete('/api/v1/transactions',deleteTransaction);
router.delete('/api/transactions',deleteBody);

router.get('/api/getLabel',getLabels);

module.exports = router;
