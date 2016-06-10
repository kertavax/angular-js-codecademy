app.directive('holacracyList', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/HolacracyListTempl.html' 
  }; 
});