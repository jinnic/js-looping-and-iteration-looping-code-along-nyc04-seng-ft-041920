// Code your solutions in this file
function writeCards(name, msg){
  const card = []
  for(let i=0; i<name.length; i++){
    card.push(`Thank you, ${name[i]}, for the wonderful ${msg} gift!`)
  }
  return card
}
function countDown(num){
  while (num>=0 ){
    console.log(num);
    num --
  }
  

}