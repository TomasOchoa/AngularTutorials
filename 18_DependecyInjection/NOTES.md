# 18) Dependency Injection
- A software design pattern where components are given their dependencies 
  instead of being hard coded within the component
- This relieves a component from locating it's dependencies allowing the dependencies 
  to be configurable
- This results to components being reusable, maintainable and easily tested

- Angular provides a supreme dependency injection mechanism
- Core components are provided that can then be injected into each other as dependencies
    - value
    - factory
    - service
    - provider
    - constant
    
###value
- Simple javascript object used to pass values to controller during config phase

```javascript

// Define a module
var mainApp = angular.module('mainApp', []);

// create a value object as 'defaultInput' and pass it a data
mainApp.value('defaultInput', 5);

//inject the value in the controller using its name 'defaultInput'
mainApp.controller('CalcController', function($scope, CalcService, defaultInput){
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);
    
    $scope.square = function(){
        $scope.result = CalcService.square($scope.number);
    }
});
```

###factory
- Method used to return values
- Creates values on demand by any service or controller that requires it
- Normally uses a factory function to calculate and return the value

```javascript
// define a module
var mainApp = angular.module('mainApp', []);

// Create a factory 'MathService' which provides a method multiply to return multiplication of two numbers
mainApp.factory('MathService', function(){
    var factory = {};
    
    factory.multiply = function(a,b){
        return a * b;
    }
    
    return factory;
});

// Inject the factory 'MathService' in a service to utilize the multiply method of factory
mainApp.service('CalcService', function(MathService){
    this.square = function(a){
        return MathService.multiply(a,a);
    }
});
```

###service
- A singleton JS object
- Contains a set of functions 
    - Set functions perform certain tasks
- Defined by using *service()* functions and injecting into controllers

```javascript
// Define a module
var mainApp = angular.module('mainApp',[]);

// Create a service which defines a method square to return square of a number
mainApp.service('CalcService', function(MathService){
    this.square = function(a){
        return MathService.multiply(a,a);
    }    
});

// Inject the service 'CalcService' into the controller
mainApp.controller('CalcController', function($scope, CalcService, defaultInput){
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);
    
    $scope.square = function(){
        $scope.result = CalcService.square($scope.number);
    }
});
```

###provider
- Used by AngularJS to create services internally during config phase
    - Config phase is bootstrapped by AngularJS itself
- Example below is an alternative way to create MathService
- Provicer is a special factory method that has the method *get()* 
    - *get()* is used to return the value/service/factory
    
```javascript
// define a module
var mainApp = angular.module('mainApp', []);

// Create a service using provider which defines a method square to return square of a number
mainApp.config(function($provide){
    $provide.provider('MathService', function(){
        this.$get = function(){
            var factory = {};
            
            factory.multiply = function(a,b){
                return a * b;
            }
            return factory;
        };
    });    
});
```

###constant
- Used to pass values during config phase
- **NOTE**: *value* cant be used as a parameter during config phase

`mainApp.constant('configParam', 'constant value');`

