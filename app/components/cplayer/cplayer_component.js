'use strict';
angular.module('myApp').component('cplayerComponent',{
    templateUrl: '../../components/cplayer/cplayer_component.html',
    controller : ['$http','$resource','$log', '$scope',function CplayerComponent($http, $resource,$log, $scope){
        var self = this;
        this.user = $resource('http://localhost?XDEBUG_SESSION_START=PHPSTORM', {},{get : {method: 'GET'}});
        this.$onInit = function () {
            this.user.get().$promise.then(function (response){
                $log.log(response.data);
                self.res = response.data;
            });
        };


    }]
});