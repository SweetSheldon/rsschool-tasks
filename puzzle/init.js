let container = document.createElement('div');
  container.className = "puzzle-container";
  document.body.append(container);

let puzzleField = document.querySelector('.puzzle-container');

let rules = document.createElement('div');
rules.className = "rules";
puzzleField.append(rules);

let rulesArea = document.querySelector('.rules');

let resThree = document.createElement('button');
resThree.id = "three";
resThree.innerHTML ='3x3'
rulesArea.append(resThree);

let resFour = document.createElement('button');
resFour.id = "four";
resFour.innerHTML ='4x4'
rulesArea.append(resFour);

let resFive = document.createElement('button');
resFive.id = "five";
resFive.innerHTML ='5x5'
rulesArea.append(resFive);

let puzzleId = document.createElement('div');
  puzzleId.id = "puzzle";
puzzleField.append(puzzleId);