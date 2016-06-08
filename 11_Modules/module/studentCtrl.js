/**
 * Created by Tom's Desktop on 6/8/2016.
 */
mainApp.controller('studentCtrl',function ($scope) {
    $scope.student = {
        firstName: "Tomas",
        lastName: "Ochoa",
        fees: 500,

        // Subjects
        subjects: [
            {name: 'Physics', marks: 70},
            {name: 'Chemistry', marks: 80},
            {name: 'Math', marks: 65},
            {name: 'English', marks: 75},
            {name: 'Cinema', marks: 67}
        ],

        // Function to display full Name
        fullName: function(){
            var studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    }
});