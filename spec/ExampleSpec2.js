'use strict';

import { Example2 } from '../js/Example2';

describe('RadifyProspector.Example2', function() {

    describe('Example2', function() {
        var sut;

        beforeEach(function() {
            sut = new Example2();
        });

        describe('constructor()', function() {
            it('sets reasonable defaults', function() {
                expect(sut.foo).toEqual('bar');
            });
        });
    });
});
