const assert = require('chai').assert
const bubbleSortTest = require('../bubbleSort') 

describe("BubbleSort test", function() {
  it("can sort an array of numbers", function() {
    assert.deepEqual([0,1,2,3,4,5], bubbleSortTest([5,0,1,3,4,2]));
  });
  it("can sort an array of letters", function() {
    assert.deepEqual(['a','b','c','d','e'], bubbleSortTest(['d','a','b','e','c']));
  });
});
