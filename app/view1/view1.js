// 'use strict';
//
// angular.module('myApp.view1', ['ngRoute'])
//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// XXzzzz.controller('View1Ctrl', ['$scope','$http',
//     function($scope,$http) {
//     $scope.a = "asdfa";
//
//
//    function init() {
//        $http.get('http://localhost/welcome/users').then(function (res){
//           $scope.users = res.data;
//        });
//
//    }
//         // $scope.test = function(user) {
//         //     $http.get('http://localhost/welcome/users/4').then(function (res){
//         //         $scope.users = res.data;
//         //     });
//         // };
//
//
//    init();
//
// }]);