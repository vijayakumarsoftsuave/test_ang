angular.module('myApp').component('headerComponent',{
    templateUrl: '../../components/header/header.component.html',
    controller : ['$http',function HeaderController($http) {
        var self = this;
        this.componentName = "header";
        function init() {
            $http.get('http://localhost/welcome/users').then(function (res){
                self.users = res.data;
                self.users.forEach(function (user){
                    user.gender = user.age%2 == 0 ? 'male' : 'female';
                });
            });
        }

        init();

    }]
});