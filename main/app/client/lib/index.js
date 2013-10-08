if (Meteor.isClient) {
	var chart = null,
		options = {
		  keepAspectRatio: true,
		  datalessRegionColor: 'PaleGoldenrod'
		},
		countriesVisited = [];
		doMap = function(countries) {
		  var x = [];
		  $.map(countries, function(el,i) {
		    return x.push([el]);
		  });
		  var visited = Math.max(x.length - 1, 0);
		  var total = Meteor.availableCountries.length;
		  //$('#percent').html('<p>'+visited+'/'+total+' '+Math.floor((visited/total)*100)+'%</p>');
		  return x;
		},
		addAndUpdateChart = function(region) {
		  if (region) {
		    if (countriesVisited.indexOf(region) == -1) {
		      countriesVisited.push(region);
		    } else {
		      countriesVisited.splice(countriesVisited.indexOf(region), 1);
		    }

		    chart.draw(google.visualization.arrayToDataTable(doMap(countriesVisited)), options);
		    saveOnDB(countriesVisited);
		  }
		},
		drawRegionsMap = function() {
			chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
			// register the 'select' event handler
			google.visualization.events.addListener(chart, 'regionClick', function (region) {
			// GeoChart selections return an array of objects with a row property; no column information
				addAndUpdateChart(region.region);
			});
			var user = Meteor.user(),
                arr = user && user.profile && user.profile.countries;
            if (arr && arr.length > 0) {
				countriesVisited = arr;
			} else {
				saveOnDB(countriesVisited);
			}
			
			chart.draw(google.visualization.arrayToDataTable(doMap(countriesVisited)), options);
		},
		saveOnDB = function(countriesVisited) {
            var that = this,
                user = Meteor.user();
			if (user) {
				Meteor.users.update({
					_id: user._id
				}, 
				{ 
					$set: {
						'profile.countries': countriesVisited
					}
				});
			}
		};
    
    Template.map.userData = function() {
        return Meteor.user().emails[0].address;
    };
    
    google.load('visualization', '1', {'packages': ['geochart']});
    google.setOnLoadCallback(drawRegionsMap);

}
