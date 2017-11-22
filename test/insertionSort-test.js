const assert = require('chai').assert
const insertionSortTest = require('../insertionSort')

describe("InsertionSort test", function() {
  it("can sort an array of numbers", function() {
    assert.deepEqual([0,1,2,3,4,5], insertionSortTest([5,0,1,3,4,2]));
  });
  it("can sort an array of letters", function() {
    assert.deepEqual(['a','b','c','d','e'], insertionSortTest(['d','a','b','e','c']));
  });
});
