const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];
  for(let i=0;i<numbers.length;i++){
    let count=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(numbers[i]);
    }
  }

  let primeArray = [4,16,13,8,35,11,27,30];
  let max=primeArray[0];
  let min=primeArray[0];
  let sum=0
  for(let i=0;i<primeArray.length;i++){
    sum=sum+primeArray[i];
    if(max<primeArray[i]){
        max=primeArray[i];
    }
    if(min>primeArray[i]){
        min=primeArray[i];
    }
  }
  console.log("sum="+sum);
  console.log("max="+max);
  console.log("min="+min);
