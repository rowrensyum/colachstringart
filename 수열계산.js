

//입력받은값 순열 만들기

export function 전체수열(입력값){
 const 입력 = parseInt(입력값);
 const 수열 = [];
for(let a = 1; a<입력; a++){
  var  수 = a;
  while(수 != 1) {
    if(수%2==0){
      수 = 수/2;
    }else{
      수 = 3*수 + 1;
    }
    수열.push(수);

  }

return 수열;
}
}


