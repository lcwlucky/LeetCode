function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 方法一： 单指针
// function sortColors(nums) {
//   const len = nums.length;
//   let p = 0;
//   // 将0都移到左边
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === 0) {
//       swap(nums, p, i);
//       p++;
//     }
//   }
//   // 再将1移到左边
//   for (let i = p; i < len; i++) {
//     if (nums[i] === 1) {
//       swap(nums, p, i);
//       p++;
//     }
//   }

//   return nums;
// }

// 方法二： 双指针 一次遍历，如果是0移到到表头，如果是2则移到到表尾
function sortColors(nums) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  for (let i = 0; i <= r; i++) {
    while (nums[i] === 2 && i <= r) {
      swap(nums, r, i);
      r--;
    }
    if (nums[i] === 0) {
      swap(nums, l, i);
      l++;
    }
  }

  return nums;
}

console.log(sortColors([2, 1, 2, 0, 1, 0, 2]));
