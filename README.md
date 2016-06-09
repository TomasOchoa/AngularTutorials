# 1) Overview

<!------------------------------------------------------------>
# 2) Environment

<!------------------------------------------------------------>
# 3) MVC Architecture

<!------------------------------------------------------------>
# 4) First Application
### Parts of an Angular JS application
- ng-app 
- ng-model
- ng-bind
 
### Creating AngularJS Application
- Step 1: Load the framework
- Step 2: Define AngularJS application using ng-app directive
- Step 3: Define a model name using ng-model directive
- Step 4: Bind the value of above model defined using ng-bind directive

### Executing AngularJS Application

<!------------------------------------------------------------>
# 5) Directives
- Extend html
- Special attributes that start with 'ng'
- Directives discussed here
    - ng-app
    - ng-init
    - ng-model
    - ng-repeat
    
### ng-app directive
- Start of app
- Defines the root element
- Automatically initializes/bootstraps the app when page loads
- Loads various AngularJS modules

### ng-init directive
- Initializes app data
- Assigns values to the variables
- Here, initialize array of countries
    - use JSON syntax to define the array of countries

### ng-model directive
- Defines the model/variable to be used in app
- In example, defined model is named name

### ng-repeat directive
- Repeats html elements for each item in a collection
- In example, iterate over the array of countries

<!------------------------------------------------------------>
# 6) Expressions
- Used to bind application data to html
- Writiin inside "{{}}"
- Behave similarly to ng-bind
- AngularJS expressions are pure JavaScript expressions 

### Using Numbers

### Using String

### Using Object

### Using Array

<!------------------------------------------------------------>
# 7) Controllers
- Angular relies mainly on controllers to control the flow of data in app
- Defined using 'ng-controller' directive
- It is a JS obj that contains attributes/properties, and functions
- Each one accepts $scope as a param
    - Refers to app/module that controller needs to handle

<!------------------------------------------------------------>
# 8) Filters
- Used to change modify the data
- Can be clubbed in the expression or directive using pipe character

### Commonly Used Filters

1) uppercase: Converts a text to upper case text
2) lowercase: Converts a text to lower case text 
3) currency: Formats text in a currency format
4) filter: Filter the array to a subset of it based on provided criteria
5) orderby: Orders the array based on provided criteria

### uppercase filter example
- In example, used to print student name in all caps
 
### lowercase filter example
- Used to print student name in all lowercase letters
 
### currency filter example
- Used to print fees using currency format

### filter filter example
- Display only required subjects
- subjectName used as filter

### orderby filter example
- Uses orderBy marks to order subjecs by marks (duh)

<!------------------------------------------------------------>
# 9) Tables
- Table data repeatable by nature
- ng-repeat can be used to draw table easily

<!------------------------------------------------------------>
# 10) HTML DOM
### Some directives can be used to bind application data to attributes of HTML DOM Elements
1) ng-disabled: Disables a given control
2) ng-show: Shows a given control
3) ng-hide: Hides a given control
4) ng-click: Represents a AngularJS Click Event

### Using these directives
- Add attributes to HTML element
- Pass it a model or update the model
- Bind the model 

<!------------------------------------------------------------>
# 11) Modules
- Modular approach supported by Angular
- Used to separate logics to keep code clean
    - IE: Services, controllers, application, etc
- Defined in separate JS files
    - Then in part named as per the module.js file
    
### Module Example:
- Two Modules Created
    - **Application Module:**
        - Used to initialize an application with controller(s)
        - *mainApp.js*
        
    - **Controller Module:**
        - Used to define the controller
        - studentController.js
        
<!------------------------------------------------------------>
# 12) Forms
- Angular enriches form filling and validation
- Use events and flags to do so

### Events
- Angular provides multiple events that associate with HTML controls
- Here are some events in angular
    - ng-click
    - ng-dbl-click
    - ng-mousedown
    - ng-mouseup
    - ng-mouseenter
    - ng-mouseleave
    - ng-mousemove
    - ng-mouseover
    - ng-keydown
    - ng-keyup
    - ng-keypress
    - ng-change

### Validation Flags
- Can be used to track errors
    - $dirty: states that value has been changed
    - $invalid: states that value entered is invalid
    - $error: states the exact error
    
<!------------------------------------------------------------>
# 13) Includes
- HTML cant be embedded within HTML pages by definition
- However, there are ways to achieve this
    - **Ajax**
        - Make a server call to get the corresponding html page
        - Set in 'innerHTML' of html control
        
    - **Using Server Side Includes**
        - JSP, PHP, and other web site tech can include html pages within a dynamic page
        
    - **Angular JS**
        - Achieved in angular by embedding HTML pages within an HTML page that uses ng-include directive
        - To run example, html pages must be deployed to a web server

<!------------------------------------------------------------>
# 14) AJAX
- Angular provides $http control
    - This works as a service to read data from a server
- Server makes a database call to get desired records
- Angular JS needs data in JSON format
- When data is ready, $http can be used to get the data from server in the following manner

```javascript
    function studentController($scope,$http) {
    var url = "data.txt";
    
       $http.get(url).success( function(response) {
          $scope.students = response; 
       });
    }
```

- In example above, data.txt contains student records
- $http service makes an ajax call
    - Call sets response to it's property students
    - *students* model can be used to draw tables in html
    
**Note** 
- *.success* is deprecated
- Read up on alternative

    
<!------------------------------------------------------------>
# 15) Views
- Angular supports single page applications via multiple views
    - This is done by using the directives ng-view, ng-tempplate and the $routeProvider services
    
###ng-view
- Creates a placeholder where a corresponding view (html or ng-template view) can
    be placed based on the configuration

**Usage** 
- Define a div with ng-view within the main module

```html
<div ng-app="mainApp">
    ...
    <div ng-view></div>
</div>
```

###ng-template
- Used to create an html view using script tag
- Contains "id" attribute which is then used by $routeProvider to map
  a view with the controller
  
**Usage** 
- Define a script block with type as ng-template within the main module
```html
<div ng-app="mainApp">
   ...
   
   <script type="text/ng-template" id="addStudent.html">
        <h2>Add Student</h2>
        {{message}}
   </script>
</div>
```

###$routeProvider
- Key service which set the configuration of urls
- Map them with the corresponding html page or ng-template
- Then attach a controller with the same

**Usage** 
- Define a script block with type as ng-template within the main module
```html
<div ng-app="mainApp">
   ...
   
   <script type="text/ng-template" id="addStudent.html">
        <h2>Add Student</h2>
        {{message}}
   </script>
</div>
```

**Usage**
- Define a script block with main module and set the routing config
```html
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/addStudent', {
      templateUrl: 'addStudent.htm', controller: 'AddStudentController'
   }).
   
   when('/viewStudents', {
      templateUrl: 'viewStudents.htm', controller: 'ViewStudentsController'
   }).
   
   otherwise({
      redirectTo: '/addStudent'
   });
	
}]);
```

**Important points to be considered in example above**
- $routeProvider is defined as a function under config of mainApp module using key as *'.routeProvider'*
- $routeProvider.when defines a url "/addStudent" which then is mapped to "addStudent.html"
    - addStudent.html should be present in the same path as main html page
    - If it is not defined then ng-template to be used with id="addStudent.html"
    - **Here, ng-template is used**
- "otherwise" is used to set the default view
- "controller" is used to set the corresponding controller for the view

<!------------------------------------------------------------>
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
      
      



<!------------------------------------------------------------>
# 17) Services

<!------------------------------------------------------------>
# 18) Dependency Injection

<!------------------------------------------------------------>
# 19) Custom Directives

<!------------------------------------------------------------>
#20) Internalization

