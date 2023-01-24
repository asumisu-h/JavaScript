for (let i = 1; i < 51; i++){
  let count = i

  if(i % 10 === 0){
    console.log("今" + count + "回ループしました");
  }
  if(i % 4 === 0){
    console.log("4で割れる数です" + count);
  }
  if(i === 50){
    alert("50回カウントが終わりました")
  }
}

