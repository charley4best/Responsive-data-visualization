var app = angular.module('articles', [])
		.controller('myController', function($scope, $http){			
			$scope.init = function(value){
				$http.get('http://api.nytimes.com/svc/topstories/v1/'+value+'.json?api-key=61feada1b5b912e1a54773b22b5eaf60:11:75164318').
		       	 success(function(data) {
		       	 		$scope.mainResult = data.results[1];
		       	 	      var subdata = [];
		       	 	      var result = 0;
		       	 	      $scope._subsections = [];
		       	 	      var _subsection_iterator = 0;
		       	 	      	for(var i = 0; result < data.num_results; result++){
		       	 	      		subdata.push(result);
		       	 	      	}
		       	 	    	for(var x = 0; _subsection_iterator < subdata.length; _subsection_iterator++)
		       	 	    	{
		       	 	    		if(data.results[_subsection_iterator].multimedia !== ""){
		       	 	    		$scope._subsections.push(data.results[_subsection_iterator]);
		       	 	    		}

		       	 	    	}
		       	 				       	 	      
		       	 	  });       	 	    
					}
				}).directive('randomElements', function() {
				  return {
				    link: function(scope, element, attr) {

				      element.on('click', function() {
				      	scope.init(attr.info);
				     });
				      element.ready(function() {
				      	scope.init("home");
				     });
			     }
			  };
			})

				
       	 	      