function numberGen() {
    var series = [];
    var sumS = 0;
  
    for (let k = 0; k < 7 && sumS < 19; k++) {
      // 随机生成一个整数，限定在 1 到 5 之间
      const numberR = Math.floor($fx.rand() * 5) + 1;
  
      // 计算当前序列的和
      sumS += numberR;
  
      // 判断是否满足条件，如果不满足则重新生成序列
      if (sumS + (7 - k) > 19) {
        // sumS = 0;
        // series = [];
        // k =0; // 重新开始循环
        sumS -= numberR;
        k--;
      } else {
        series.push(numberR);
      }
    }
  
    // 最后一个元素等于 19 减去前面数字的和
    series.push(19 - sumS);
  
    // console.log(series);
    return series;
  }

