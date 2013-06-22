var assert = require('assert')
  , morph  = require('..');

describe('Snake case', function () {

  it('should convert camel case to snake case', function () {
    assert.equal(morph.snake("loremIpsumDolor"), "lorem_ipsum_dolor");
  });

  it('should convert camel case with abbreviations to snake case', function () {
    assert.equal(morph.snake("NASAAndTheJPL"), "nasa_and_the_jpl");
  });

  it('should convert human text to snake case', function () {
    assert.equal(morph.snake("Lorem ipsum dolor"), "lorem_ipsum_dolor");
  });

  it('should convert hypenated text to snake case', function () {
    assert.equal(morph.snake("lorem-ipsum-dolor"), "lorem_ipsum_dolor");
  });

  it('should convert dotted text to snake case', function () {
    assert.equal(morph.snake("lorem.ipsum.dolor"), "lorem_ipsum_dolor");
  });

  it('should uppercase the first character when specified', function () {
    assert.equal(morph.snake("loremIpsumDolor", true), "Lorem_ipsum_dolor");
  });

  it('should not change snake case', function () {
    assert.equal(morph.snake("lorem_ipsum_dolor"), "lorem_ipsum_dolor");
  });

  it('should convert mixed text to snake case', function () {
    assert.equal(morph.snake("LOREM.ipsum-DolorSit_amet"), "lorem_ipsum_dolor_sit_amet");
  });
});


describe('Snake caps', function () {

  it('should convert camel case to snake caps', function () {
    assert.equal(morph.snakeCaps("loremIpsumDolor"), "LOREM_IPSUM_DOLOR");
  });

  it('should convert camel case with abbreviations to snake caps', function () {
    assert.equal(morph.snakeCaps("NASAAndTheJPL"), "NASA_AND_THE_JPL");
  });

  it('should convert human text to snake caps', function () {
    assert.equal(morph.snakeCaps("Lorem ipsum dolor"), "LOREM_IPSUM_DOLOR");
  });

  it('should convert hypenated text to snake caps', function () {
    assert.equal(morph.snakeCaps("lorem-ipsum-dolor"), "LOREM_IPSUM_DOLOR");
  });

  it('should convert dotted text to snake caps', function () {
    assert.equal(morph.snakeCaps("lorem.ipsum.dolor"), "LOREM_IPSUM_DOLOR");
  });

  it('should not change snake caps', function () {
    assert.equal(morph.snakeCaps("lorem_ipsum_dolor"), "LOREM_IPSUM_DOLOR");
  });

  it('should convert mixed text to snake caps', function () {
    assert.equal(morph.snakeCaps("LOREM.ipsum-DolorSit_amet"), "LOREM_IPSUM_DOLOR_SIT_AMET");
  });

});


describe('Dashed', function () {

  it('should convert camel case to dashed', function () {
    assert.equal(morph.dashed("loremIpsumDolor"), "lorem-ipsum-dolor");
  });

  it('should convert camel case with abbreviations to dashed', function () {
    assert.equal(morph.dashed("NASAAndTheJPL"), "nasa-and-the-jpl");
  });

  it('should convert human text to dashed', function () {
    assert.equal(morph.dashed("Lorem ipsum dolor"), "lorem-ipsum-dolor");
  });

  it('should convert snake case to dashed', function () {
    assert.equal(morph.dashed("lorem_ipsum_dolor"), "lorem-ipsum-dolor");
  });

  it('should convert dotted text to dashed', function () {
    assert.equal(morph.dashed("lorem.ipsum.dolor"), "lorem-ipsum-dolor");
  });

  it('should uppercase the first character when specified', function () {
    assert.equal(morph.dashed("loremIpsumDolor", true), "Lorem-ipsum-dolor");
  });

  it('should convert mixed text to dashed', function () {
    assert.equal(morph.dashed("LOREM.ipsum-DolorSit_amet"), "lorem-ipsum-dolor-sit-amet");
  });

  it('should not change dashed', function () {
    assert.equal(morph.dashed("lorem_ipsum_dolor"), "lorem-ipsum-dolor");
  });
});

describe('Camel case', function () {

  it('should convert snake case to camel case', function () {
    assert.equal(morph.camel("lorem_ipsum_dolor"), "loremIpsumDolor");
  });

  it('should convert spaced text to camel case', function () {
    assert.equal(morph.camel("Lorem ipsum dolor"), "loremIpsumDolor");
  });

  it('should convert dotted text to camel case', function () {
    assert.equal(morph.camel("lorem.ipsum.dolor"), "loremIpsumDolor");
  });

  it('should convert hyphenated text to camel case', function () {
    assert.equal(morph.camel("lorem-ipsum-dolor"), "loremIpsumDolor");
  });

  it('should uppercase the first character when specified', function () {
    assert.equal(morph.camel("lorem_Ipsum.dolor", true), "LoremIpsumDolor");
  });

  it('should convert mixed text to camel case', function () {
    assert.equal(morph.camel("Lorem.ipsum-DolorSit_amet"), "loremIpsumDolorSitAmet");
  });

  it('should convert snake caps to camel case', function () {
    assert.equal(morph.camel("LOREM_IPSUM_DOLOR"), "loremIpsumDolor");
  });

  it('should not change camel case', function () {
    assert.equal(morph.camel("loremIpsumDolor"), "loremIpsumDolor");
  });
});

describe('Upper camel case', function () {

  it('should convert snake case to upper camel case', function () {
    assert.equal(morph.camel("lorem_ipsum_dolor", true), "LoremIpsumDolor");
  });

  it('should convert spaced text to upper camel case', function () {
    assert.equal(morph.camel("Lorem ipsum dolor", true), "LoremIpsumDolor");
  });

  it('should convert dotted text to upper camel case', function () {
    assert.equal(morph.camel("lorem.ipsum.dolor", true), "LoremIpsumDolor");
  });

  it('should convert hyphenated text to upper camel case', function () {
    assert.equal(morph.camel("lorem-ipsum-dolor", true), "LoremIpsumDolor");
  });

  it('should convert mixed text to upper camel case', function () {
    assert.equal(morph.camel("Lorem.ipsum-DolorSit_amet", true), "LoremIpsumDolorSitAmet");
  });

  it('should convert snake caps to upper camel case', function () {
    assert.equal(morph.camel("LOREM_IPSUM_DOLOR", true), "LoremIpsumDolor");
  });

  it('should not change upper camel case', function () {
    assert.equal(morph.camel("loremIpsumDolor", true), "LoremIpsumDolor");
  });
});


describe('human', function () {

  it('should convert snake case to human format', function () {
    assert.equal(morph.human('lorem_ipsum_dolor'), 'Lorem ipsum dolor');
  });

  it('should convert camel case to human format', function () {
    assert.equal(morph.human('loremIpsumDolor'), 'Lorem ipsum dolor');
  });

  it('should convert camel case with abbreviations to human format', function () {
    assert.equal(morph.human("NASAAndTheJPLHaveARocket"), "NASA and the JPL have a rocket");
  });

  it('should convert hyphenated text to human format', function () {
    assert.equal(morph.human('lorem-Ipsum-dolor'), 'Lorem ipsum dolor');
  });

  it('should convert dotted text to human format', function () {
    assert.equal(morph.human('lorem-Ipsum-dolor'), 'Lorem ipsum dolor');
  });

  it('should convert mixed text to human format', function () {
    assert.equal(morph.human("Lorem.ipsum-DolorSit_amet"), "Lorem ipsum dolor sit amet");
  });

  it('should separate single letter words', function () {
    assert.equal(morph.human("thisIsACamelCaseWord"), "This is a camel case word");
  });

  it('should not change human formatted text', function () {
    assert.equal(morph.human('Lorem ipsum dolor'), 'Lorem ipsum dolor');
  });
});


describe('Title', function () {

  it('should convert snake case to title format', function () {
    assert.equal(morph.title('lorem_ipsum_dolor'), 'Lorem Ipsum Dolor');
  });

  it('should convert camel case to title format', function () {
    assert.equal(morph.title('loremIpsumDolor'), 'Lorem Ipsum Dolor');
  });

  it('should convert camel case with abbreviations to title format', function () {
    assert.equal(morph.title("NASAAndTheJPLHaveARocket"), "NASA And The JPL Have A Rocket");
  });

  it('should convert hyphenated text to title format', function () {
    assert.equal(morph.title('lorem-Ipsum-dolor'), 'Lorem Ipsum Dolor');
  });

  it('should convert dotted text to title format', function () {
    assert.equal(morph.title('lorem-Ipsum-dolor'), 'Lorem Ipsum Dolor');
  });

  it('should convert mixed text to title format', function () {
    assert.equal(morph.title("Lorem.ipsum-DolorSit_amet"), "Lorem Ipsum Dolor Sit Amet");
  });

  it('should separate single letter words', function () {
    assert.equal(morph.title("thisIsACamelCaseWord"), "This Is A Camel Case Word");
  });

  it('should not change title format', function () {
    assert.equal(morph.title('Lorem Ipsum Dolor'), 'Lorem Ipsum Dolor');
  });
});


describe('Object keys', function () {

  it('should convert all keys to snake case', function () {
    var tmp = morph.snake({loremIpsumDolor: "test", "Sit-Amet": "test"});
    assert(tmp.lorem_ipsum_dolor);
    assert(tmp.sit_amet);
  });

  it('should convert all keys to snake caps', function () {
    var tmp = morph.snakeCaps({loremIpsumDolor: "test", "Sit-Amet": "test"});
    assert(tmp.LOREM_IPSUM_DOLOR);
    assert(tmp.SIT_AMET);
  });

  it('should convert all keys to camel case', function () {
    var tmp = morph.camel({lorem_ipsum_dolor: "test", "Sit-Amet": "test"});
    assert(tmp.loremIpsumDolor);
    assert(tmp.sitAmet);
  });

  it('should convert all keys to dashed', function () {
    var tmp = morph.dashed({loremIpsumDolor: "test", "Sit_Amet": "test"});
    assert(tmp["lorem-ipsum-dolor"]);
    assert(tmp["sit-amet"]);
  });

  it('should convert all keys to human', function () {
    var tmp = morph.human({loremIpsumDolor: "test", "Sit_Amet": "test"});
    assert(tmp["Lorem ipsum dolor"]);
    assert(tmp["Sit amet"]);
  });

  it('should convert all keys to titles', function () {
    var tmp = morph.title({loremIpsumDolor: "test", "Sit_Amet": "test"});
    assert(tmp["Lorem Ipsum Dolor"]);
    assert(tmp["Sit Amet"]);
  });
});