var app = angular.module('app',[]);

app.controller('AppController',function($scope,$http){
    $scope.students = [
        {
            "code":"B1234",
            "name":"Trần Quang Đại",
            "email":"daitq@gmail.com",
            "phone":"0986421128",
            "password":123456
        },
        {
            "code":"B2489",
            "name":"Nguyễn Huy Hoàng",
            "email":"hoangnh@gmail.com",
            "phone":"0984621181",
            "password":123456
        },
        {
            "code":"B3598",
            "name":"Lê Văn Huy",
            "email":"huylv@gmail.com",
            "phone":"0986473318",
            "password":123456
        },
        {
            "code":"B4864",
            "name":"Hỏa Thị Hà Thu",
            "email":"thuhth@gmail.com",
            "phone":"0875421258",
            "password":123456
        }
    ];
});