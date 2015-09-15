class ExampleController2 {
    constructor($scope, bazample) {
        $scope.bazample = bazample;
    }
}
ExampleController2.$inject = ['$scope', 'bazample'];

export { ExampleController2 };
