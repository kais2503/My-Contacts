var application= angular.module("main",[]);
application.controller('appCtrl',function($scope,$http){
var list=function(){
$http.get('/api').then(function(response){
  $scope.data=response.data;
  $scope.x="";
});
};
list();
$scope.edit = function(id){

  $http.get('/api/'+id).then(function(response){
    $scope.x=response.data;

  });
};
$scope.delete= function(id){
  $http.delete('/api/'+id).then(function(response){
list();
  });

};

$scope.add= function(){

$http.post('/api',$scope.x).then(function (response) {
  list();
})
};
$scope.update=function(){
  $http.put('api/' + $scope.x._id, $scope.x).success(function(response) {
    list();
  });
};

});
