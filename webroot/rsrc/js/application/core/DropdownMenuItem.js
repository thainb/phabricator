/**
 * @requires javelin-install
 *           javelin-dom
 * @provides phabricator-menu-item
 * @javelin
 */

JX.install('PhabricatorMenuItem', {

  construct : function(name, action) {
    this._name = name;
    this._action = action;
  },

  members : {
    _name : null,
    _action : null,

    render : function() {
      return JX.$N('a', { href : '#', meta : { item : this } }, this._name);
    },

    select : function() {
      this._action();
    }
  }

});