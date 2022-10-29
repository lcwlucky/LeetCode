function bubbleSort(arr) {
  if (!arr) return null;
  const len = arr.length;
  let flag = true;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) return; //如果没有发生元素交换，证明已经是有序的了，直接返回
  }
  return;
}

const arr = [2, 12, 4, 1, 63, 23, 5, 2, 10];
bubbleSort(arr);
console.log(arr);
