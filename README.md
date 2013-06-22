# Morph

Morph is a lightweight collection of string transformations useful for converting between variable
naming styles. In addition to strings, Morph can also take a hash as input and will output a new object
with converted keys.

## Installation

Install via npm:

    $ npm install morph

## Usage

    var morph = require('morph')

    morph.snake('loremIpsumDolor')          // => 'lorem_ipsum_dolor'
    morph.snakeCaps('loremIpsumDolor')      // => 'LOREM_IPSUM_DOLOR'
    morph.camel('lorem_ipsum_dolor')        // => 'loremIpsumDolor'
    morph.camel('lorem_ipsum_dolor', true)  // => 'LoremIpsumDolor'
    morph.dashed('lorem_ipsum_dolor')       // => 'lorem-ipsum-dolor'
    morph.human('lorem_ipsum_dolor')        // => 'Lorem ipsum dolor'
    morph.title('lorem_ipsum_dolor')        // => 'Lorem Ipsum Dolor'

    // Convert an object's keys
    var obj = {loremIpsum: 'test', dolorSit: 'test'}
    morph.snake(obj)                       // => {lorem_ipsum: 'test', dolor_sit: 'test'}

## Snake case

#### nake(input, [capFirst])

Converts the input string or hash to snake case. Set `capFirst` to true to capitalize
the first letter of the output string.

    morph.snake('loremIpsumDolor')        // => 'lorem_ipsum_dolor'
    morph.snake('LOREM_IPSUM_DOLOR')      // => 'lorem_ipsum_dolor'
    morph.snake('lorem-Ipsum.Dolor')      // => 'lorem_ipsum_dolor'

## Caps snake case

#### snakeCaps(input)

Converts the input string or hash to caps snake case.

    morph.snakeCaps('loremIpsumDolor')        // => 'LOREM_IPSUM_DOLOR'
    morph.snakeCaps('lorem_ipsum_dolor')      // => 'LOREM_IPSUM_DOLOR'
    morph.snakeCaps('lorem-Ipsum.Dolor')      // => 'LOREM_IPSUM_DOLOR'

## Camel case

#### camel(input, [capFirst])
#### toUpperCamel(input, [capFirst])

Converts the input string or hash to caps snake case. Set `capFirst` to true to
capitalize the first letter of the string, or use the aliased **toUpperCamel**
function.

    morph.camel('lorem_ipsum_dolor')          // => 'loremIpsumDolor'
    morph.camel('lorem-Ipsum.dolor')          // => 'loremIpsumDolor'
    morph.toUpperCamel('LOREM_IPSUM_DOLOR')     // => 'LoremIpsumDolor'

## Dashed

#### toDashed(input, [capFirst])

Converts the input string or hash to human readable format. Set `capFirst` to true
to capitalize the first letter of the output string.

    morph.toDashed('loremIpsumDolor')        // => 'lorem-ipsum-dolor'
    morph.toDashed('LOREM_IPSUM_DOLOR')      // => 'lorem-ipsum-dolor'
    morph.toDashed('lorem-Ipsum.Dolor')      // => 'lorem-ipsum-dolor'

## Human format

#### toHuman(input, [capFirst])

Converts the input string or hash to human readable format. Set `capFirst` to false
to leave the first letter of the string lowercase.

    morph.toHuman('lorem_ipsum_dolor')         // => 'Lorem ipsum dolor'
    morph.toHuman('loremIpsumDolor')           // => 'Lorem ipsum dolor'
    morph.toHuman('LOREM_IPSUM_DOLOR', false)  // => 'lorem ipsum dolor'

## Title format

#### toTitle(input)

Converts the input string or hash to title format.

    morph.toTitle('lorem_ipsum_dolor')         // => 'Lorem Ipsum Dolor'
    morph.toTitle('loremIpsumDolor')           // => 'Lorem Ipsum Dolor'
    morph.toTitle('LOREM_IPSUM_DOLOR')         // => 'Lorem Ipsum Dolor'

## Converting objects

To convert an object's keys to a new style, pass in an object as input. Note
that **all** keys will be converted.

    var obj = {some_key: 123, another_key: 456}
    morph.camel(obj)                         // => {someKey: 123, anotherKey: 456}

## Running the tests

To run the test suite, invoke the following commands in the repository:

    $ npm install
    $ npm test
