var locationModel = require('../model/locationmodel');

var Locations = module.exports = {

	home: function(req,res) {
		res.render('locationPage');
	},

	showLocation: function(req, res){
		var id = parseInt(req.params.id)
		var button = req.params.button

		if(id > locationModel.getNumLocations() - 1){
			res.redirect('/');
		}else if(id < 0){
			res.redirect('/');
		}else{
			var locationInfo = locationModel.findLocation(id, button);
			res.render('locationInfo', {locationInfo:locationInfo, dir:req.params.button});
		}

	},

	showAllLocations: function(req, res){

	},
}

