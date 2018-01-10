var UserModel = require('../../cartodb3/data/user-model');
var UserUrlModel = require('./user-url-model');

module.exports = UserModel.extend({
  viewUrl: function () {
    return new UserUrlModel({
      base_url: this.get('base_url'),
      is_org_admin: this.isOrgAdmin()
    });
  }
});