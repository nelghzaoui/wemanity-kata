const express = require('express');
const router = express.Router();

/* ADD contact */
router.post('/add', (req, res, next) => {
  res.send('add');
  next();
})

/* GET contact */
router.get('/get/:id', (req, res, next) => {
  res.send('get');
});

/* GET contacts listing. */
router.get('/getAll', (req, res, next) => {
  res.send('getAll');
});

/* UPDATE contact*/
router.put('/update/:id', (req, res, next) => {
  res.send('update');
});

module.exports = router;
