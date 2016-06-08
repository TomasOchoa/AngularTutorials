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


<!------------------------------------------------------------>
# 15) Views

<!------------------------------------------------------------>
# 16) Scopes

<!------------------------------------------------------------>
# 17) Services

<!------------------------------------------------------------>
# 18) Dependency Injection

<!------------------------------------------------------------>
# 19) Custom Directives

<!------------------------------------------------------------>
#20) Internalization

