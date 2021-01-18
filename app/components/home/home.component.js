angular.module('myApp').component('homeComponent',{
    templateUrl: '../../components/home/home.componenet.html',
    controller : function HomeController() {
        this.componentName = "home";
    }
});