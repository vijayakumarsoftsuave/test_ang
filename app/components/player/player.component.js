'use strict';
angular.module('myApp').component('playerComponent',{
    templateUrl: '../../components/player/player.component.html',
    bindings:{
        player:'<'
    },
    controller : ['$http','$resource','$log', '$scope',function PlayerComponent( $http,$resource,$log,$scope){
        var self = this;

        var postUser = $resource('http://localhost/getuser?XDEBUG_SESSION_START=PHPSTORM',{},
            {
                save: {
                    method: 'POST',
                    data: {"data" : "@data"},
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            }
        );


        this.$onInit = function () {
            if(localStorage && !localStorage.getItem('recommenededplayers')) {
                localStorage.setItem('recommenededplayers', JSON.stringify([]));
            }
            else{
                $scope.recommendedPlayers = JSON.parse(localStorage.getItem('recommenededplayers'));
            }

            // for(var i=0; i < localStorage.length; i++){
            //     var keyName = localStorage.key(i);
            //     $log.log( 'recommenededplayers' + " === " +sessionStorage.getItem('recommenededplayers'));
            // }
        };

        $scope.recommendedUser = function(player){
            player.recommend = !player.recommend;
            $scope.recommendedPlayers = JSON.parse(localStorage.getItem('recommenededplayers'));
            var isRecomended = false;

            $scope.recommendedPlayers.forEach(function (rPlayer,index) {
                if(rPlayer.pid == player.pid) {
                    isRecomended = true;
                    $scope.recommendedPlayers.splice(index,1);
                }
            });
            if(!isRecomended) {
                $scope.recommendedPlayers.push(player);
            }

            localStorage.setItem('recommenededplayers',JSON.stringify($scope.recommendedPlayers));

        };




    }]
});