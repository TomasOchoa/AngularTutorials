# 17) Services
- Angular supports concept of "Separation of Concerns"
    - Done so by using services architecture
- Services are JS functions
    - Responsible only for specific tasks
    - Are individual entities 
        - Easily maintained and tested 
- Controllers, filters can call them as on requirement basis
- Services are normally injected 
    - Done so by using a dependency mechanism in Angular JS

- Angular also provides many inbuilt services
- Examples include *$http*, *$route*, *$window*, *$location*, etc.
- Each service is responsible for a specific task
- Examples:
    - *$http* is used to make ajax call to get the server data
    - *$route* is used to define the routing information
    - So on ...
- Inbuilt services are always prefixed with '$' symbol

- There are two ways to create a service
    - Factory
    - Service
    
###Using Factory Method
- Define a factory
- Assign method to it

```javascript
var mainApp = angular.module("mainApp", []);
mainApp.factory('MathService', function() {
   var factory = {};
   
   factory.multiply = function(a, b) {
      return a * b
   }
   
   return factory;
}); 
```

###Using Service Method
- Define a service
- Assign method to it
- **NOTE** Here, an already available service is injected to it

```javascript
mainApp.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});
```
