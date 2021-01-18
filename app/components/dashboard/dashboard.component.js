'use strict';
angular.module('myApp').component('dashboardComponent',{
    templateUrl: '../../components/dashboard/dashboard.component.html',
    controller : ['$http','$resource','$log', '$scope',function DashboardComponent($http, $resource,$log, $scope){
        var self = this;
        $scope.players = [];
        $scope.loading = false;

        var CRIC_API_KEY = "KUcUbPoPAKQRc6hps2PZHLIngzH3";
        var user = $resource('http://localhost?XDEBUG_SESSION_START=PHPSTORM', {},{get : {method: 'GET'}});
        var postUser = $resource('http://localhost/getuser?XDEBUG_SESSION_START=PHPSTORM',{},
            {
                save: {
                method: 'POST',
                data: {"data" : "@data"},
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
                }
            }
            );

        var cricapi = $resource('https://cricapi.com/api/playerFinder?apikey='+CRIC_API_KEY,{"name": "@name"},{getPlayersData : {method : 'GET'}});
        var userBioData = $resource('https://cricapi.com/api/playerStats?apikey='+CRIC_API_KEY,{"pid": "@pid"},{getPlayerBiodata : {method : 'GET'}});
        // this.$onInit = function () {
        //     {
                // $log.log(response.data);
                // self.res = response.data;
                $scope.search = function ($event){
                    if ($event.keyCode === 13)
                        $scope.getUser();
                };

                $scope.getUser= function(){
                  $scope.loading = true;
                    cricapi.getPlayersData({name: $scope.player}).$promise.then(function (playersData) {
                        $scope.loading = false;

                        // LOCAL STOARGE DATA
                        $scope.players = playersData.data;
                        $scope.players.forEach(function(playerData){
                            userBioData.getPlayerBiodata({pid: playerData.pid}).$promise.then(function(playerBio){
                                playerData.playerBio = playerBio;
                            });
                        });
                        if (localStorage && localStorage.getItem('recommenededplayers')){
                            var recommendedPlayers = JSON.parse(localStorage.getItem('recommenededplayers'));
                            $scope.players.forEach(function(playerData){
                                playerData.recommend = false;
                                recommendedPlayers.forEach(function(rPlayer){
                                    if (playerData.pid === rPlayer.pid){
                                        playerData.recommend = true;
                                    }
                                });
                            });
                        }
                    });
                };

                // this.$onInit = function(){
                //     $scope.res = localStorage.getItem('recommenededplayers');
                //
                // }

        // this.$onInit = function () {
        //
        //     if (localStorage && localStorage.getItem('recommenededplayers')) {
        //         $scope.recommendedPlayersList = JSON.parse(localStorage.getItem('recommenededplayers'));
        //     }
        //
        // }
            // });p
        // };

        // this.$onInit = function(){
        //     $scope.playerData = 'virat';
        // }

        // $scope.getUser = function(user) {
        //
        //     //make a request
        //
        //     $log.log(user.unique_id);
        //     var data = {
        //         unique_id : user.unique_id
        //
        //     };
        //
        //    postUser.save(null,{data: data}).$promise.then(function (response) {
        //
        //        user.recommended = response.recommended;
        //        // $log.log(response);
        //
        //    });
        // };
        //
        //
    }]
});