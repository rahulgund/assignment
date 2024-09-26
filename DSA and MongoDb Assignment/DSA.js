function twoSum(nums, target) {
    
    if (nums.length < 2) {

      throw new Error("Array must contain at least two numbers.");
    }
  
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
     
      const complement = target - nums[i];
  
      if (map.has(complement)) {
        
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i);
    }
  
    throw new Error("No two sum solution found.");
  }
  
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  try {

    const result = twoSum(nums, target);

    console.log(result); 

  } catch (error) {

    console.error(error.message);
  }
  