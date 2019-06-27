require('./angular-1.7.8/angular.min.js')
require('./node_modules/angular-mocks/angular-mocks.js')
require('./app.js');

describe('addressBook', function(){
    beforeEach(angular.mock.module('addressBook'));

    var $controller;
    var addressInformation;

    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('addRow', function(){
        var addressInformation= [{'name': 'John Smith', 'address': '1430 Fashion Island Blvd', 'phone': '4086400912'}, {'name': 'Jane Doe', 'address': '1500 Fashion Island Blvd', 'phone': '6695670932'}, {'name': 'Johny Smith', 'address': '1800 Fashion Island Blvd', 'phone': '2567651289'}];

        it("new profile should be in data once row is added", function(){
           expect(addressInformation).toHaveLength(3);
        });
    });
})