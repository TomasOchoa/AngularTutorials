# SECTION 3: DATABINDING

<!--------------------------------------------------------------------->
## String Interpolation

###NOTES:
- String Interpolation: Whenever `{{}}` braces is used
- Can give it property
    - Done so by adding it in export
- Can interpolate methods, elements, classes, styles
- Whenever using html string in code
- **"All string interpolation really does is take whatever is inside the `{{}}` braces
     and transform it into a string and insert at the place of the expression inside `{{}}`
     and insert to DOM"**
     
### Try these below
1) Add string "Hey" 
`{{"Hey"}}`

2) Add a method using string interpolation that returns true
- In template: 
 - `{{onTest()}}`
- In export:
 - ```javascript 
      onTest(){
         return 1 === 1; 
      }
   ```
   
3) Add an text input box with value name and class that makes text red
 - `<input type="text" value="name" class="{{'red'}}">`
 - In app.css:
 ```
     .red{
         color: red;
     }
 ```
<!--------------------------------------------------------------------->
##Property Binding

###NOTES:
- Property Binding:
    - Called so because we are binding to properties of an element or component
      that we created

- `value={{name}}` & `[value]="name"`, although achieve same results
and look similar, they are pretty different
    - The latter binds to the property value
    - Is introduced by angular2
        - It is not a default html attribute but rather an angular 2 property defined FOR the input element
    - No string required, rather expression
        ie: "Tomas" || "1 === 1"
        
- Binding to a property of a directive:
    - IE: `[ngClass]="'red'"` instead of `class="{{'red'}}"`
        - In former, ngClass **is not** a property of the input element but a directive
        shipped with Angular2
        
- Directives can but do not have to take inputs
- IE:
    - 'ng-class' needs input, either a name of a class or a javascript object that defines the class
    - Later 'ng-control' directive doesn't take any input (therefore no need for square bracket)

**NOTE**
- Can tell the difference between Directives and Element properties by the 'ng'-prefix
- If is prefixed with 'ng', it's a directive
- Else it's a property

###Try to:
- Convert to directives
    `<input type="text" [value]="name" [ngClass]="{red:true}">`
- Add disabled directive when 1===1
    `[disabled]="1===1"`
<!--------------------------------------------------------------------->
##Event Binding

###NOTES:
- Previous forms data binding *changes* data in elements
- Third form, event binding, **reacts** to changes in DOM

###Try to/to do:
- Create empty variable named 'values'
- Create paragraph below input element
    - Insert values in paragraph 
- Add event keyup event to input
- Create a function for event keyup
    - Give an id to input element
    - On key up, pass a string value from input field
    - Show history of data typed by concatenating it         
        
```javascript
@Component({
    selector: 'app',
    template: `
        {{onTest()}}
        <br>
        <input type="text" [value]="name" [ngClass]="{red:true}" (keyup)="onKeyup(inputElement.value)" #inputElement>
        <p>{{values}}</p>
    `,
})
export class AppComponent {
    name='Tomas';
    values = '';

    onTest(){
        return 1===1;
    }

    onKeyup(value: string){
        this.values += value + ' | ';
    }
}
```

<!--------------------------------------------------------------------->
##Two-Way Databinding

###NOTES:
- Previously, databinding was one dimensional
- In angular 1, databinding by default was two dimensional
    - Although some advantages, there were greater disadvantages
    - IE: App speed, debugability of bigger projects, etc
- In angular2, two-way still exists but in different form
    - Done so by adding `[()]`
        - Need to use 'ngModel' directive (requires both input/output) 

###Try To/To-Do:
- Make another input that updates real time and reflects input
    - Create the input element
    - Use ngModel directive
    
<!--------------------------------------------------------------------->
## Using Property Binding With a Custom Component

###NOTES:
- In first section we created our own components but didn't exchange data
- Here we do so using property binding

**REMEMBER:**
- Best practice is to keep names same but bind data using aliases to differentiate and avoid errors
- IE: In configuration of custom component `['name:myName', 'age:myAge']`
    - What aliases basically do, using this example, is say "In this file, the property is called 'name' & 'age',
      but anywhere else, it's called 'myName' & 'myAge'"

###To create custom properties of custom components
- Create a new component
    - Called 'property-binding.component'
    - Import component from angular 2 core
    - Decorator:
        - selector: 'my-property-binding'
        - template:
            - h2: 'This is the child component'
            - paragraph: 'Hey {{myName}} and I am {{myAge}} years old!'
    - inputs: **USE ALIASES (See note above)**
        - specify configuration using an array
            - Include 'name', 'age'
    - Export 'PropertyBindingComponent'
        - name 
        - age:
            - default 20

####property-binding.component.ts
```javascript
import {Component} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey, my name is {{name}} and I'm {{age}} years old!</p>
    `,
    inputs: ['name:myName', 'age:myAge']
})

export class PropertyBindingComponent{
    name='';
    age=20;
}

```

- In app component *app.component.ts*
    - Add directive 'PropertyBindingComponent'
    - Template: 
        - section:
            - Add 'parent' class
            - h2: 'This is the parent component'
            - h4: 'Please enter your name'
            - input: 
                - text type
                - name using two-way data binding                
            - 2x breaks
            - section:
                - Add 'child' class
                - my-property-binding:
                    - Set name to name
                    - Set age to 26

####app.component.ts
```javascsript
import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'app',
    template: `
        <section class="parent">
            <h2>This is parent component</h2>
            <h4>Please enter your name</h4>
            <input type="text" [(ngModel)]="name">
            <br><br>
            <section class="child">
                <my-property-binding [myName]="name" [myAge]=26 ></my-property-binding>
            </section>
        </section>        
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name='';
}

```
               
- Styles (app.scss):
    - parent:
        - border: 1 pixel solid with color #ccc
        - background-color: #eee
        - padding: 10 pixels
    - child:
        - border: 1 pixel solid with color black
        - background-color: #ccc
        - padding: 10 pixels
        
- Another way to setup input:
    - Add decorator `@Input()` before exporting variable
    - Import component above
    - Specify alias in parenthesis
    
####app.scss
```css
.parent{
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 10px;
}

.child{
  border: 1px solid black;
  background-color: #ccc;
  padding: 10px;
}
```
               

<!--------------------------------------------------------------------->
##Using Event Binding With a Custom Component (Custom Events)

###NOTES:
- If you want opposite data flow, ie from child to parent, this is not possible 
with property binding
- Remember property binding means data flows into something
- In this case, we would like data to flow out of something 
- Unfortunately angular2 doesn't have a this ability out the box, but it can be created

###Try To/To-Do:
- Lets say we want an input field that specifies my hobbies in custom component
- When entered, we would like it to reflect in app component 

####In app.component.ts
- Create a paragraph under nested section
    - paragraph: 'My hobbies are: {{hobbies}}'
- Must catch event by listening for it 
    - my-property-binding:
        - Add hobbiesChanged event and bind hobbies to event
    
- Export:
    - Add empty variable for hobbies


####In property-binding.component.ts
- Create a custom property that will hold event for hobbies
    - Import EventEmmiter
    - template:
        - h4: 'My hobbies are: '
        - Add input:
            - type text
            - Add keyupp event and set to onHobbiesChanged method
            - Pass in the value of hobbies
            - Give this input id hobbies
    - Set outputs configuration:
        - Include 'hobbiesChanged' 
                 
    - In Export:
        - create new event emmiter variable hobbiesChanged of string type
        - Create method onHobbiesChanged
            - Set hobbies param to string type
            - take this hobbiesChanged property and execute emit method
                - pass in hobbies
     
**NOTE:**
- `$event`: Default values for event

####app.component.ts
```javascript
import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'app',
    template: `
        <section class="parent">
            <h2>This is parent component</h2>
            <h4>Please enter your name</h4>
            <input type="text" [(ngModel)]="name">
            <br><br>
            <section class="child">
                <my-property-binding [myName]="name" [myAge]=26 (hobbiesChanged)="hobbies=$event"></my-property-binding>
            </section>
            <p>My hobbies are: {{hobbies}}</p>
        </section>        
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name='';
    hobbies='';
}

```

####property-binding.component.ts
```javascript
import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey, my name is {{name}} and I'm {{age}} years old!</p>
        <h4>My hobbies</h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
    `,
    inputs: ['name:myName', 'age:myAge'],
    outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent{
    name='';
    age=20;

    hobbiesChanged = new EventEmitter<string>();

    // Necessary to send out the stuff
    onHobbiesChanged(hobbies:string){
        this.hobbiesChanged.emit(hobbies);
    }
}
```


<!--------------------------------------------------------------------->
##Databinding Summary



###NOTES:
<!--------------------------------------------------------------------->
##Second Project - Input Confirmation: Overview



###NOTES:
<!--------------------------------------------------------------------->
##Second Project - Input Confirmation: The Input Component



###NOTES:
<!--------------------------------------------------------------------->
##Second Project - Input Confirmation: The Confirm Component



###NOTES:





