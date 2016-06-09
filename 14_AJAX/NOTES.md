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

    