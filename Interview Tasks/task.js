function minAbsoluteDifference(nums) {
    const n = nums.length / 2;
    let minDiff = Infinity;
  
    
    function partition(nums, index, set1, set2) {
      if (index === nums.length) {
        if (set1.length === n && set2.length === n) {
          const diff = Math.abs(sum(set1) - sum(set2));
          minDiff = Math.min(minDiff, diff);
        }
        return;
      }
  
      
      set1.push(nums[index]);
      partition(nums, index + 1, set1, set2);
      set1.pop();
  
      
      set2.push(nums[index]);
      partition(nums, index + 1, set1, set2);
      set2.pop();
    }
  
    
    function sum(arr) {
      return arr.reduce((acc, num) => acc + num, 0);
    }
  
    partition(nums, 0, [], []);
    return minDiff;
  }
  

  const nums = [1, 6, 11, 5, 4, 9];
  console.log(minAbsoluteDifference(nums)); 
  