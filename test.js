Test.describe('longestConsecutiveLength function', () => {
  Test.it('should check if empty array provided', () => {
    Test.assertEquals(longestConsecutiveLength([]), "Empty array provided!");
  });

  Test.it('should return correct length of the longest sequence from example', () => {
    Test.assertEquals(longestConsecutiveLength([100, 4, 200, 1, 3, 2]), 4);
  });

  Test.it('should return 0 if the is no sequence with step 1', () => {
    Test.assertEquals(longestConsecutiveLength([100, 4, 200, 150, 300, 2000]), 0);
  });

  Test.it('should return correct length of the longest sequence from example 2', () => {
    Test.assertEquals(longestConsecutiveLength([100, 4, 200, 1, 3, 2, 7, 8, 9, 10, 11, 12]), 6);
  });

  Test.it('should return correct length of the longest sequence from example 3', () => {
    Test.assertEquals(longestConsecutiveLength([5, 4, 3, 2, 1]), 5);
  });

  Test.it('should return correct length of the longest sequence 1', () => {
    Test.assertEquals(longestConsecutiveLength([-1,0,1]), 3);
  });

  Test.it('should return correct length of the longest sequence 2', () => {
    Test.assertEquals(longestConsecutiveLength([0]), 0);
  });

  Test.it('should return correct length of the longest sequence 3', () => {
    Test.assertEquals(longestConsecutiveLength([0,1,2,3,4,-1]), 6);
  });

  Test.it('should return correct length of the longest sequence 4', () => {
    Test.assertEquals(longestConsecutiveLength([1,1,1,1,1]), 0);
  });

  Test.it('should return correct length of the longest sequence 5', () => {
    Test.assertEquals(longestConsecutiveLength([1,1,1,1,2]), 2);
  });

  Test.it('should return correct length of the longest sequence 6', () => {
    Test.assertEquals(longestConsecutiveLength([-1,1,1,1,1,2,0]), 4);
  });

  Test.it('should return correct length of the longest sequence 7', () => {
    Test.assertEquals(longestConsecutiveLength([-1,3,1,1,1,2,0]), 5);
  });

  Test.it('should return correct length of the longest sequence 8', () => {
    Test.assertEquals(longestConsecutiveLength([-1,3,1,1,1,2,0,5,6,7,8,9,10,11]), 7);
  });

  Test.it('should return correct length of the longest sequence 9', () => {
    Test.assertEquals(longestConsecutiveLength([12,-1,3,1,1,1,2,0,5,6,7,8,9,10,11]), 8);
  });

  Test.it('should return correct length of the longest sequence 10', () => {
    Test.assertEquals(longestConsecutiveLength([4,12,-1,3,1,1,1,2,0,5,6,7,8,9,10,11]), 14);
  });

  Test.it('should return correct length of the longest sequence 11', () => {
    Test.assertEquals(longestConsecutiveLength([-1,-2,-3]), 3);
  });

  Test.it('should return correct length of the longest sequence 12', () => {
    Test.assertEquals(longestConsecutiveLength([-1,-2,-3]), 3);
  });

  Test.it('should return correct length of the longest sequence 13', () => {
    Test.assertEquals(longestConsecutiveLength([1,3,5,7,8,2,4,6]), 8);
  });

  Test.it('should return correct length of the longest sequence 14', () => {
    Test.assertEquals(longestConsecutiveLength([1,3,5,7,8,0,-2,-4]), 2);
  });

  Test.it('should return correct length of the longest sequence 15', () => {
    Test.assertEquals(longestConsecutiveLength([1,3,5,7,9,100,100000,-1]), 0);
  });

  Test.it('should return correct length of the longest sequence 16', () => {
    Test.assertEquals(longestConsecutiveLength([1,3,5,7,8,100,100000,-1,10,11,101,102,103,100001,100002]), 4);
  });

  Test.it('should return correct length of the longest sequence 16', () => {
    Test.assertEquals(longestConsecutiveLength([0,1,2,3,5,6,7,8,-1,9]), 5);
  });
});
