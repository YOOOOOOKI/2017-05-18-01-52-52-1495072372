module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.numm()}
o) 平均值 = ${sequence.average()}

`);
};

class Sequence {
  constructor(input) {
    // Write your code here
  }
   numm()
   {
   	return input.length;
   }
  minimum() {
    var mins=0; 
    for(let i=0;i<input.length;i++)
    {

     if (mins>input[i])
     {
      mins=input[i];
     }

    }
    
    return mins;
  }
  maximum()
  {
    var maxs;
    for(let i=0;i<input.length;i++)
    {
      if(maxs<input[i])
      {
        maxs=input[i];
      }
    }
    return maxs;
  }
  average()
  {
    var ave=0;
    for(let i=0;i<input.length;i++)
    {
      ave=ave+input[i];
    }
    return  ave.toFixed(2);
  }
  // Write your code here

  // Write your code here
}
