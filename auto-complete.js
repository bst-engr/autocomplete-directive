/**
 * Created by:  Muhammad Basit Munir
 * Date:27 july 2016.
 * Description: contatins auto complete directives.
 */
angular.module('bstAutoCompleteDirective', [])
.directive('bstAutoComplete', ['$http', function($http) {
    return {
        restrict: 'E',
        scope: {
            url: '@url',
            query: '=query',
            onSelect: '&onSelect',
            validate: '&validate'
        },
        templateUrl: '/v4config/app/cat-cables/auto-complete.html',
        link : directiveController//['$scope', '$http',directiveController]
    };

    function directiveController(scope, element, attrs) {
        scope.data = [];
        scope.requestCheck = false;
        scope.$watch('scope.data', function(){ 
            console.log('autocomplete.data : changed');
        },true);
        
        scope.handleClick = function (selectedItem) {
            scope.data=[];
            scope.requestCheck=true;
            if(scope.validate({'selected':selectedItem})){
             //   scope.query = selectedItem.email;   
                scope.onSelect({'selected':selectedItem});
                console.log('directive function ends');
            }
        }

        scope.$watch('query', function(value) {
            console.log("scope.query changed:"+ value);
            if(typeof value == "undefined" || value.length <= 2){
                scope.data = [];
                return false;
            }

            //if(!scope.requestCheck) {
                $http.get(scope.url+"?term="+value).then(
                    function(response){
                        console.log("success to fetch data");
                        scope.data = response.data;
                        //scope.requestCheck = false;
                    },
                    function(error){
                        console.log("error to fetch data");
                        console.log(error);
                    }
                );
            //} 
        }, true);
                
    }
}]);
