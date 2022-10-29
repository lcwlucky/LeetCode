// 并发限制promise
class LimitPromise {
  constructor(max, fn) {
    this.max = max; // 并发数
    this.callback = fn; // 任务函数；返回一个promise的函数
    this.loop = []; // 任务队列
    this.allData = []; // 任务结果队列
  }

  push = () => {
    // 调用栈push任务
    const resolvedNum = this.allData.filter(Boolean).length; // 完成的任务个数
    const loopLength = this.loop.length; // 任务队列中的任务个数
    const index = resolvedNum + loopLength; // 待push到任务队列的任务索引
    const item = this.list[index]; // 下个任务
    if (index >= this.list.length) return;
    const task = this.createTask(item, index);
    this.loop.push(task);
  };

  start = list => {
    this.list = list;
    while (this.loop.length < this.max) {
      this.push();
    }
    return this.run(Promise.race(this.loop));
  };

  run = race => {
    return race.then(config => {
      const [data, index, f] = config;
      this.allData[index] = { data }; // 保存返回的数据
      this.loop.splice(this.loop.indexOf(f), 1); // 调用栈删除当前任务
      if (this.allData.filter(Boolean).length === this.list.length) {
        // 如果数据列表长度和所有任务长度相等，说明任务全执行完毕
        return this.allData;
      } else {
        this.push();
        return this.run(Promise.race(this.loop));
      }
    });
  };

  createTask = (args, index) => {
    // 创建一个任务
    const p = this.callback(args).then(data => {
      return [data, index, p]; // data: res的数据；index：数据队列保存数据的索引；p：任务单元的引用，用来任务队列删除当前任务
    });
    return p;
  };
}
