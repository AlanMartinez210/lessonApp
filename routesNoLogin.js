const express = require('express');
const router = express.Router();
const controllerPath = './controllers/';
const userController = require(`${controllerPath}userController`);
const validate = require('./common/middleware/validateForm');


// ルートにきたときの処理
router.get('/', (req,res,next)=>{
  res.redirect('/index');
});

/* 新規登録ページの表示 */
router.get('/index', userController.index);

module.exports = router;