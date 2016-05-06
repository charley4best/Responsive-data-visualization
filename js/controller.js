var app = angular.module('articles', [])


		.controller('myController', function($scope, $http, $location){			
			$scope.init = function(value){
				$location.path("/" + value); //set url based on value
				$http.get('http://api.nytimes.com/svc/topstories/v1/'+value+'.json?api-key=cc343bdaee55f68d97db7a71759a2eea:18:75164318').
		       	 success(function(data) {
		       	 		  $scope.mainResult = data.results[1];	
		       	 		  $scope._mainImage = data.results[1].multimedia[4];		       	 		  
		       	 	      var subdata = [];
		       	 	      var result = 0;
		       	 	      $scope._subsections = []; // array to hold subsection articles
		       	 	      var _subsection_iterator = 0;
		       	 	      	for(var i = 0; result < data.num_results; result++){
		       	 	      		subdata.push(result);
		       	 	      	}
		       	 	    	for(var x = 0; _subsection_iterator < subdata.length; _subsection_iterator++)
			       	 	    	{	
			       	 	    		//check to see if images for subsection exist then push into array
			       	 	    		if(data.results[_subsection_iterator].multimedia !== ""){
			       	 	    		$scope._subsections.push(data.results[_subsection_iterator]);
			       	 	    		}

			       	 	    	}
		       	 				       	 	      
		       	 	  }).
		       	      //check if api call returns null
		       	 	   error(function (data, status) {
					      if (status === 404) {
					        $scope.error = 'API not available';
					      } else {
					        $scope.error = 'Error: ' + status;
					      }
					      console.log($scope.error)
					    });     	 	    
					}
					//directive: checks if navigation li elemets are clicked
				}).directive('randomElements', function() {
				  return {
				    link: function(scope, element, attr) {
				       	element.ready(function() {
				      	scope.init("home"); // default value on page loads before use selects another category
				        });
				      element.on('click', function() {
				      	scope.init(attr.info); // gets the info attribute value
				      	//element.css('background-color', 'black');   
				       });
				      
				     //element.css('background-color', '');   

			     }
			  };
			})

				
       	 	      