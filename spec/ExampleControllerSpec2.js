'use strict';

import * as angular from "angular";
import * as mock from "angularMocks";
import { Example2 } from '../js/Example2';
import { ExampleController2 } from '../js/ExampleController2';

describe('ExampleController2', function() {
    var scope, ctrl, example;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        bazample = new Example2();
        ctrl = new ExampleController2(scope, bazample);
    }));

    it('takes an example and puts it on the scope', function() {
        expect(scope.bazample).toEqual(bazample);
    });
});
