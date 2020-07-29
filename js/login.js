var app = angular.module('login-register',[]);
app.controller('loginregister',function($scope,$http){
    $scope.username = "";
    $scope.password = '';
    $scope.usernameNull = false;
    $scope.passwordNull = false;
    $scope.msgLogin = "";
    $scope.login = function(){
        if($scope.username.length<=0){
            $scope.usernameNull = true;
            return false;
        }
        else{
            $scope.usernameNull = false;
        }
        if($scope.password.length<=0){
            $scope.passwordNull = true;
            return false;
        }
        else{
            $scope.passwordNull = false;
        }

        $http.get('./../db/Students.js').then(
            function (response) {
                var userAccount  = response.data
                for(var i=0;i<userAccount.length;i++){
                    if($scope.username == userAccount[i].username & $scope.password == userAccount[i].password){
                        $scope.msgLogin = "Đăng nhập thành công"
                        location.replace('/index.html')
                        break
                    }
                    else{
                        $scope.msgLogin = "Đăng nhập thất bại"
                        alert($scope.msgLogin);
                        break;
                    }
                };
            }, 
            
        );
    }

    
    $scope.register = function(){
        $http.put('./../db/Students.js',[],
            
        ).then(
            console.log('success')
        )
    }

})