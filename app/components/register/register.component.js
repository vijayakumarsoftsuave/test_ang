// angular.module('myApp').component('registerComponent',{
//     templateUrl: '../../components/register/register.component.html',
//     controller : function RegisterController() {
//         this.componentName = "register";
//     }
// });


angular.module('myApp').component('registerComponent',{
    templateUrl: '../../components/register/register.component.html',
    controller : ['$http','$resource',function RegisterComponent($http, $resource) {
         var self = this;
        this.componentName = "register";
        this.name = null;
        this.age = null;
        this.adress = null;
        this.msg = null;
        this.postData = function(name, age, adress) {
        var data = {
            name: name,
            age: age,
            adress: adress
        };

        var registerUser = $resource('http://localhost/welcome/users',
            {}, {
                save: {method: 'POST', params: {data: data}}
            });
        registerUser.save().$promise.then(function (response){
            console.log(response);
        });
            //
            // $http.post('http://localhost/welcome/users', JSON.stringify(data)).then(function (response) {
            //     if (response.data)
            //         self.msg = "Post Data Submitted Successfully!";
            // });
        }



    }]
});