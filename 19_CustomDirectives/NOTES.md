# 19) Custom Directives
- Used in angular to extend the functionality of HTML
- Defined using the *directive* function
- Custom directives simply replace elements where it was activated
- During bootstrap, it finds matching elements and execute a one time activity
  using it's `compile()` method of the custom directive
  - Based on the scope of the directive
- Angular also provides support to create custom directives for following element types
    - **Element Directives -** Executed when a matching element is found
    - **Attribute -** Executed when a matching attribute is found
    - **CSS -** Executed when a matching css style is found 
    - **Comment -** Executed when a matching comment is encountered
    
###Understanding Custom Directive

**Define custom html tags**
```html
<student name="Tomas"></student><br/>
<student name="Javier"></student>
```

**Define custom directive to handle above custom html tags**
```javascript
// Create a directive where the first param is the html element to be attatched, in this case a student html tag
// This directive will be activated immediately upon encountering any student element 

mainApp.directive('student', function(){
    // Define the directive Object
    var directive = {};
    
    // Restrict the directive to elements. E signifies that the directive is an Element directive
    directive.restrict = 'E';
    
    // Replace the complete element with a template's text
    directive.template = 'Student: <b>{{student.name}}</b>, Roll No: <b>{{student.rollno}}</b>';
    
    // Use scope to distinguish each student element based on criteria
    directive.scope = {
        student: '=name'
    }
    
    // During application initialization, compile is called. 
    // It is called once by AngularJS when the html page is loaded.
    directive.compile = function(element, attributes){
        element.css("border", "1px solid #cccccc");
        
        //linkFunction is linked with each element with scope to get the element specific data.
         var linkFunction = function($scope, element, attributes){
            element.html("Student: <strong>"+$scope.student.name + "</strong>, Roll No: <strong>" + $scope.student.rollno+ "</strong><br/>");
            element.css("background-color", "#ff00ff");
         }
         return linkFunction;
    }
    return directive;
});
```


**Define controller to update the scope for directive. Here, the value of the name attribute is used as the scope's child**
```javascript
mainApp.controller('StudentController',function($scope){
    $scope.Tomas = {};
    $scope.Tomas.name = "Tomas Ochoa";
    $scope.Tomas.rollno = 5;
    
    $scope.Javier = {};
    $scope.Javier.name = "Javier Ochoa";
    $scope.Javier.rollno = 1;    
});
```

