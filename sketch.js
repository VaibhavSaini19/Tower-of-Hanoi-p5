var WIDTH  = 800;
var HEIGHT = 600;

var TOTAL_DISKS = 3;

var DISK_Ht = 20;
var DISK_Wt = WIDTH/(16);

var towers = [];
var sequence = [];

var current = 0;
var update = 1;

var disk, prev, next, flag = 0, removeHt = 150;

let speedSlider;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  
  frameRate(3);
  
  label = createDiv('FPS range: 1 to 10 <br>');
  label.position(10, 30);  
  speedSlider = createSlider(1, 10, 3);
  speedSlider.parent(label);
  
  towers.push(new Tower(width/2 - 250, height/3, DISK_Ht*TOTAL_DISKS, 0));
  towers.push(new Tower(width/2,       height/3, DISK_Ht*TOTAL_DISKS, 1));
  towers.push(new Tower(width/2 + 250, height/3, DISK_Ht*TOTAL_DISKS, 2));
  
  for (let i = 0; i<TOTAL_DISKS; i++) {
    towers[0].disks.push(new Disk(i));
  }
  
  for(let tower of towers){
    tower.show();
  }
  moveTower(TOTAL_DISKS, towers[0], towers[1], towers[2]);
  // console.log(sequence);
}



function draw() {
  background(255);  
  
  let speed = speedSlider.value()
  frameRate(speed);
  fill(0);
  text('(Current: '+speed+')', 150, 45);
  
  
  if(!flag){  
    if (update == 1){
      from = sequence[current][0];
      to = sequence[current][1];
      current += 1;
      update = -1;
    }
    if (update == -1){
      disk = towers[from].pop();
      showTowers();
      disk.show(towers[from].x, removeHt);
      update += 1;
    }else if (update == 0){
      disk.show(towers[to].x, removeHt);
      showTowers();
      towers[to].push(disk);
      update += 1;
    }  

    if (current == sequence.length && update == 1){
      flag = 1;
    }
  }else{
    background(255)
    showTowers();
    noLoop();
  }
}


// Tower of Hanoi's Algorithm
function moveTower(totalDisks, fromTower, toTower, withTower){
  if (totalDisks >= 1){
    moveTower(totalDisks-1, fromTower, withTower, toTower);
    moveDisk(fromTower, toTower);
    moveTower(totalDisks-1, withTower, toTower, fromTower);
  }
}

function moveDisk(from, to){
  sequence.push([from.num, to.num]);
}
