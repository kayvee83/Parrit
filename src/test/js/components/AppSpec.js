var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');
var App = require('../../../main/js/components/App.js');

describe('App', function() {
    var props = {
        settings: {},
        workspace: {},
        enableMove: {},
        disableMove: {}
    };

    it('LIVES', function() {
        ReactTestUtils.renderIntoDocument(<App {...props} />);
    });
});