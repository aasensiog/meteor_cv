if (Meteor.isClient) {
    
    var countries, //array of countrycodes
        map;

    var generateColors = function(countries) {
      var colors = {};
      $.map(countries, function(element, i) {
        colors[element] = '#66CDAA'; 
      });
      return colors;
    };

    var updateMap = function() {
      jQuery('#map').vectorMap('set', 'colors', generateColors(countries));
    };

    var addRegion = function(countryCode) {
      var index = countries.indexOf(countryCode);
      if (index < 0) {
        countries.push(countryCode);  
      } else {
        countries.splice(index, 1);
      }
      
      updateMap();
      saveOnDB(countries);

    };

    var saveOnDB = function(countriesVisited) {
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
    //-------------------------------------------------------------------//
    //-----------------------LOGIN & REGISTER----------------------------//
    //-------------------------------------------------------------------//
    
    Template.data.userData = function() {
        return {
          name: Meteor.user().profile.name
        };
    };
    
    Template.data.rendered = function() {
        countries = Meteor.user().profile.countries || [];

        if (!map) {
          map = jQuery('#map').vectorMap({
            map: 'world_en',
            backgroundColor: '#333333',
            color: '#ffffff',
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            scaleColors: ['#C8EEFF', '#006491'],
            normalizeFunction: 'polynomial',
            colors: generateColors(countries),
            onRegionClick: function(element, code, region) {
              addRegion(code);
            }
          });
        }

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

      var email = t.find('#login-email').value,
          password = t.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err){
        if (err)
            alert('login fail');
        else
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

      Accounts.createUser({email: email, password : password, profile: {name: name}}, function(err){
          if (err) {
            alert('register fail');
          } else {
            alert('register ok');
          }

        });

      return false;
    }
  });

}

