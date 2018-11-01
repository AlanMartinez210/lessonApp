const express = require('express');
const router = express.Router();

const validate = require('./common/middleware/validateForm');

const controllerPath = './controllers/';
const userController = require(`${controllerPath}userController`)

/** =============================
 * ユーザー操作
 ================================*/
/**
 * ログアウト
 */
router.post('/api/logout', userController.postLogout);

/**
 * アカウントの削除
 */
router.post('/api/delete', validate.check(require('./form/userDeleteForm')), validate.result, userController.postUserDelete);

module.exports = router;
