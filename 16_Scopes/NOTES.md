# 16) Scopes
- Special JavaScript Objects
- Play the role of joining controller with views
- Contain the model data
- In controllers, model data is accessed via the *$scope* object

```html
<script>
   var mainApp = angular.module("mainApp", []);
   
   mainApp.controller("shapeController", function($scope) {
      $scope.message = "In shape controller";
      $scope.type = "Shape";
   });
</script>
```

**Important points to be considered in example above**
- *$scope* is passed as first arugment to controller during the definition of constructor
- *$scope.message* and *$scope.type* are the models which are to be used in the HTML page
- Here, values are set to models which will be reflected in the application module whose controller is shapeController
- Functions can also be defined in *$scope*

###Scope Inheritance
- Scopes are controllers specific
- If controllers are nested, then the child of the controller will inherit the scope of it's parent controller

```html
<script>
   var mainApp = angular.module("mainApp", []);
   
   mainApp.controller("shapeController", function($scope) {
      $scope.message = "In shape controller";
      $scope.type = "Shape";
   });
   
   mainApp.controller("circleController", function($scope) {
      $scope.message = "In circle controller";
   });
	
</script>
```

**Important points to be considered in example above**
- Values are set to the models in shapeController
- Message is overridden in the child controller ``circleController`
    - When 'message' is used within the module that is controlled by circleController, the overridden message will be used
      
      
