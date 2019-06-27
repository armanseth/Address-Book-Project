addressBook.controller('addressBookController', ['$scope', function($scope){
  $scope.addressInformation= [{'name': 'John Smith', 'address': '1430 Fashion Island Blvd', 'phone': '4086400912'}, {'name': 'Jane Doe', 'address': '1500 Fashion Island Blvd', 'phone': '6695670932'}, {'name': 'Johny Smith', 'address': '1800 Fashion Island Blvd', 'phone': '2567651289'}];
$scope.addRow = function(){
  $scope.addressInformation.push({'name': $scope.name, 'address': $scope.address, 'phone': $scope.phone});
  $scope.name='';
	$scope.address='';
  $scope.phone='';
  console.log(Object.keys($scope.addressInformation).length);
  
}


$(function () {
    $('table.ex').resizableColumns();
})
}]);

