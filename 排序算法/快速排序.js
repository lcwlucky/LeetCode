// let str = '111234567'
// str = str.replace(/(?!^)(?=(\d{3})+$)/g, ',')

// 快速排序
function quikSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = [];
  const right = [];
  const temp = arr.splice(mid, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < temp ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quikSort(left).concat(temp, quikSort(right));
}

function quikSort1(arr, low, high) {
  if (low < high) {
    // 找到基数的正确索引
    const index = getIndex(arr, low, high);
    quikSort1(arr, low, index - 1);
    quikSort1(arr, index + 1, high);
  }

  function getIndex(arr, low, high) {
    const pivot = arr[low];
    while (low < high) {
      while (low < high && pivot <= arr[high]) {
        high--;
      }
      arr[low] = arr[high];
      while (low < high && pivot >= arr[low]) {
        low++;
      }
      arr[high] = arr[low];
    }
    // 替换哨兵位置
    arr[low] = pivot;
    return low;
  }
}

let arr = [2, 3, 23, 5, 34, 2, 3, 5, 2, 665, 23, 23, 44, 21, 13, 13]
// const arr = [1, 2, 3, 4];
quikSort1(arr, 0, arr.length - 1);
console.log(arr);
