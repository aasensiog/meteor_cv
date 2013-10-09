if (Meteor.isClient) {
    /*
	var map,
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
            map = new AmCharts.AmMap();
            //map.pathToImages = "http://www.ammap.com/lib/images/";
            map.panEventsEnabled = true;
            map.backgroundColor = "#666666";
            map.backgroundAlpha = 1;
        
            var dataProvider = {
                mapVar: AmCharts.maps.worldHigh,
                getAreasFromMap: true,
                areas: []
            };
        
            map.dataProvider = dataProvider;
        
            map.areasSettings = {
                autoZoom: false,
                selectable:true,
                color: "#CDCDCD",
                colorSolid: "#5EB7DE",
                selectedColor: "#5EB7DE",
                outlineColor: "#666666",
                rollOverColor: "#88CAE7",
                rollOverOutlineColor: "#FFFFFF"
            };
            map.addListener('clickMapObject', function (event) {
              //console.debug(event);
              var obj = event.mapObject.id;
              updateMap(true);
            });
        
            map.write("mapdiv");
            /*
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
    
    Template.index.userData = function() {
        drawRegionsMap();
        return Meteor.user().emails[0].address;
    };
    */

    
    
    
    
    //-------------------------------------------------------------------//
    //-----------------------LOGIN & REGISTER----------------------------//
    //-------------------------------------------------------------------//
    
    Template.data.userData = function() {
        return {name: Meteor.user().profile.name};
    };
    
    Template.data.rendered = function() {
        $('#map').vectorMap({map: 'world_merc_en'});
    };
    Template.data.events(
    {
        'click #logout' : function(event) {
            return Meteor.logout();
        }
    }
    );
    
    Template.login.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value,
          password = t.find('#login-password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
        if (err)
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
            alert('login fail');
        else
          // The user has been logged in.
            alert('login ok');
      });
         return false; 
      }
    });
        
    Template.register.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value,
          password = t.find('#account-password').value,
          name = t.find('#account-name').value;

        // Trim and validate the input

      Accounts.createUser({email: email, password : password, profile: {name: name}}, function(err){
          if (err) {
            alert('register fail');
          } else {
              alert('register ok');
            // Success. Account has been created and the user
            // has logged in successfully. 
          }

        });

      return false;
    }
  });
        
        

}

