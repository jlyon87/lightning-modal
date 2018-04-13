({
	clickedClose: function(cmp, event, helper) {
		helper.fireModalClose(cmp);
	},

	handleKeyup: function(cmp, event, helper) {
		if(event.keyCode && event.keyCode === 27) {
			helper.fireModalClose(cmp);
		}
	}
})