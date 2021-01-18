'use strict';
angular.module('myApp')
    // .config(['$routeProvider', function($routeProvider) {
    //     $routeProvider.when('/recommend', {
    //         template: '<recommend-component></recommend-component>'
    //     });
    // }])
    .component('recommendComponent',{
    templateUrl: '../../components/recommend/recommend.component.html',
    controller : ['$scope',function RecommendComponent( $scope) {
        var self = this;


        this.$onInit = function () {

            if (localStorage && localStorage.getItem('recommenededplayers')) {
                $scope.recommendedPlayersList = JSON.parse(localStorage.getItem('recommenededplayers'));
                // $scope.len = localStorage.getItem('recommenededplayers').length;
            }
            if (localStorage.length == 1){
                $scope.recommended = 'false';
            }

            // if (localStorage.getItem("recommenededplayers") === null){
            //     $scope.localstore = 'No plyaers';
            //
            // }


            // $scope.isEmpty = function(recommendedPlayersList){
            //     $scope.recommendedPlayersList.length == '';
            // };
        };

        // this.$onInit = function(){
        //     if (localStorage.getItem("recommenededplayers") === null){
        //         $scope.localstore = 'No plyaers';
        //
        //     }
        // };

    }]


    });