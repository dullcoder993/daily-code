function findDuplicate(nums) {
    // Step 1: Detect cycle
    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}

// Example
let arr = [3, 1, 3, 4, 2];
console.log(findDuplicate(arr));  // Output: 3
