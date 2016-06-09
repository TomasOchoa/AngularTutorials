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