const test = QUnit.test;

import coinFlip from '../src/coin-flip.js';

test('heads if randomNumber is less than 0.5', function(assert) {
    const randomNumber = 0.4;
    const result = coinFlip(randomNumber);
    const expected = 'heads';

    assert.equal(result, expected);
});

test('tails if randomNumber is greater than or equal to 0.5', function(assert) {
    const randomNumber = 0.5;
    const result = coinFlip(randomNumber);
    const expected = 'tails';

    assert.equal(result, expected);
});