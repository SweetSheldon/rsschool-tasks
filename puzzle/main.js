class Puzzle{

constructor(gameField){
this.field = gameField;
this.resSize = 4;}


resize(resSize=4){
for(let i = 1;i<=(resSize*resSize-1);i++){
  console.log(i)
  const cell = document.createElement('div');
  cell.className='cell';
  cell.innerHTML=i;
  this.field.append(cell);
  cell.style.width = `${(document.getElementById("puzzle").offsetWidth/resSize)*0.9}px`;
  cell.style.height = `${(document.getElementById("puzzle").offsetHeight/resSize)*0.9}px`;
  // cell.style.width = (document.getElementById("puzzle").offsetWidth/(Math.abs(15+1)))
}
const cell = document.createElement('div');
  cell.className='cell clear';
  cell.innerHTML='';
  this.field.append(cell);
  cell.style.width = `${(document.getElementById("puzzle").offsetWidth/resSize)*0.9}px`;
}

clear(){
  var highlightedItems = document.querySelectorAll(".cell");
    highlightedItems.forEach(function(userItem) {
    userItem.remove();
  });}

}

const gameField = document.querySelector('#puzzle');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const puzzle = new Puzzle(gameField);

// function changeSize(num=4){
//     return num;
// }

three.addEventListener('click', button => {
  puzzle.clear();
  puzzle.resize(3);
})
four.addEventListener('click', button => {
  puzzle.clear();
  puzzle.resize(4);
})

five.addEventListener('click', button => {
  puzzle.clear();
  puzzle.resize(5);
})














//   function changeSize(size){
//     var highlightedItems = document.querySelectorAll(".cell");
//     highlightedItems.forEach(function(userItem) {
//     userItem.remove();
//     });
    
//     let abcde=0;
//     lol(size);
//     function lol(size){
//     for(let i = 1;i<=(size*size-1);i++){
//       console.log(i)
//       const cell = document.createElement('div');
//       cell.className='cell';
//       cell.innerHTML=i;
//       field.append(cell);
//       cell.style.width = `${(document.getElementById("puzzle").offsetWidth/size)*0.9}px`;
//       cell.style.height = `${(document.getElementById("puzzle").offsetHeight/size)*0.9}px`;
//     }
//     const cell = document.createElement('div');
//       cell.className='cell clear';
//       cell.innerHTML='';
//       field.append(cell);
//       cell.style.width = `${(document.getElementById("puzzle").offsetWidth/(Math.sqrt(15+1)))*0.9}px`;
//   }
//   resSize= size;
// }