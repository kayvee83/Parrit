var appReducer = require('project/reducers/appReducer.js');

describe("appReducer", function() {
	it("should get the default state", function() {
		var stateBefore = undefined;
		var action = {};
		var stateAfter = {
            settings: {
                isNewPersonModalOpen: false,
                isNewPairingBoardModalOpen: false
			},
            data: {
                project: {
                    id: 0,
                    people: [],
                    pairingBoards: []
                }
            }
		};

		expect(
			appReducer(stateBefore, action)
		).toEqual(stateAfter);
	});
});
