//方法一： 把非0往前挪，后面补0
function moveZeroes(nums) {
  if (!nums || !nums.length) return;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }
  while(index < nums.length){
    nums[index++] = 0;
  }
}

// 方法二: 
function moveZeroes(nums) {
  if (!nums || !nums.length) return;
  let i = 0;
  for (let j = 0; j < nums.length;j++) {
    if(nums[j] !== 0) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp;
      i++
    }
  }
}

