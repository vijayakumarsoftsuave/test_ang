angular.module('myApp').component('parentComponent',{
    templateUrl: '../../components/parent/parent.component.html',
    controller : function ParentController($scope) {
        // $scope.test = 'test1';
        // $scope.test = {
        //     fname : 'First Name',
        //     lname : 'Last Name',
        //     email : 'Email ID'
        // };

        // USING FILTER AND NG REPEAT
        $scope.test = [
            { fname : 'Vijayakumar',lname : 'P ',email : 'Email ID',dob : new Date('November 23, 1980'), gender:'male',value:50000},
            { fname : 'Suresh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Ramesh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Dilip',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Vijayakumar',lname : 'P ',email : 'Email ID',dob : new Date('November 23, 1980'), gender:'male',value:50000},
            { fname : 'Suresh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Ramesh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Dilip',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Ramesh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Dilip',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Vijayakumar',lname : 'P ',email : 'Email ID',dob : new Date('November 23, 1980'), gender:'male',value:50000},
            { fname : 'Suresh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Ramesh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Ramesh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Dilip',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Vijayakumar',lname : 'P ',email : 'Email ID',dob : new Date('November 23, 1980'), gender:'male',value:50000},
            { fname : 'Suresh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000},
            { fname : 'Ramesh',lname : 'Kumar',email : 'Email ID',dob : new Date('November 24, 1990'), gender:'Female',value:40000}
        ];
        $scope.rowfilter = 3;
    }
});