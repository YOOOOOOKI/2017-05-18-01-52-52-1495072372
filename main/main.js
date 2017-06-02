module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.length}
o) 平均值 = ${sequence.average()}

`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    //    this.length=input.length;
   // Write your code here
   for(let i=0;i<this.length;i++)
   {
    this[i]=input[i];
    
   }
  }
  
   minimum() {
    var mins=0; 
    for(let i=0;i<this.length;i++)
    {
      alert(this[i]);
     if (mins>this[i])
     {
      mins=this[i];
     }

    }
    
    return mins;
  }
  maximum()
  {
    var maxs;
    for(let i=0;i<this.length;i++)
    {
      if(maxs<this[i])
      {
        maxs=this[i];
      }
    }
    return maxs;
  }
  average()
  {
    var ave=0;
    for(let i=0;i<this.length;i++)
    {
      ave=ave+this[i];
    }
    return  ave.toFixed(2);
  }
  // Write your code here

  // Write your code here

  // Write your code here
}
