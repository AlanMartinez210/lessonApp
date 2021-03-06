const isHelper = require('../helper/isHelper');

/**
 * セッション内にユーザー情報をセットします。
 *
 * @param {*} req
 * @param {*} userObj
 */
exports.setUserData = function(req, userObj, callback){
	if(!isHelper.isObject(req)) throw new Error('request object does not exist');
	if(!isHelper.isObject(userObj)) throw new Error('user object does not exist');
	req.session.user = {
		id: userObj.id
	};
	if(callback) req.session.save(callback);
};

/**
 * セッションを破棄します。
 */
exports.deleteSession = function(req, callback = function(err){}){
	if(!isHelper.isObject(req)) throw new Error('request object does not exist');
	req.session.destroy(callback);
}

/**
 * セッション内のユーザー情報をすべて取得します。
 *
 * @param {*} req
 */
exports.getUserData = function(req){
	if(!isHelper.isObject(req)) throw new Error('request object does not exist');
	return req.session.user;
}

/**
 * セッション内のユーザー情報からユーザーIDを取得します。
 * @param {*} req
 */
exports.getUserId = function(req){
	if(!isHelper.isObject(req)) throw new Error('request object does not exist');
	return req.session.user.id;
}
