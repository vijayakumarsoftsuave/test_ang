angular.module('myApp').component('childComponent', {
    templateUrl: '../../components/child/child.component.html',
    // controller: function ChildController($log) {
    //     this.$onInit = function () {
    //         $log.log('test');
    //     };
    // }
    bindings:{
        data:'='
    },
    controller: function ChildController ($scope) {
        // this.message = 'test';
        // this.$onInit = function () {
        //     $log.log('test');
        // };

        // $scope.items = [
        //     {
        //         label: 'Filter By',
        //         subItem: { name: 'rSubItem' }
        //     },
        //     {
        //         id: 'fname',
        //         label: 'First name',
        //         subItem: { name: 'aSubItem' }
        //     },
        //     {
        //         id: 'lname',
        //         label: 'Last name',
        //         subItem: { name: 'bSubItem' }
        //     },
        //
        //     {
        //         id: 'email',
        //         label: 'Email ID',
        //         subItem: { name: 'cSubItem' }
        //     },
        //
        //     {
        //         id: 'dob',
        //         label: 'DOB',
        //         subItem: { name: 'dSubItem' }
        //     },
        //
        //     {
        //         id: 'gender',
        //         label: 'Gender',
        //         subItem: { name: 'eSubItem' }
        //     }
        // ];
        // $scope.selected = $scope.items[0].subItem;


        $scope.name = 'gender';

        $scope.changeSortOrder = function () {
            // alert('clicked');
            console.log('test');
            $scope.name = 'fname';

            // $scope.selected = $scope.items[0].subItem;
            $scope.orderValue = 'gender';
        }

    }
})


