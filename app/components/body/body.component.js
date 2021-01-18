'use strict';
angular.module('myApp').component('bodyComponent',{
    templateUrl: '../../components/body/body.component.html',
    controller : function BodyController($scope) {
         this.componentName = "home";

         $scope.homePage = true;
         $scope.recommendPage = false;

         $scope.arraytest = [];

         $scope.openHomePage = function () {
             $scope.homePage = true;
             $scope.recommendPage = false;
         };


        $scope.openRecommendPage = function () {
            $scope.homePage = false;
            $scope.recommendPage = true;
        };

    }
});