class Tower {
  constructor(x, y, h, num) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.num = num;
    this.disks = [];
  }
  
  pop() {
    return this.disks.pop();
  }
  
  push(disk) {
    this.disks.push(disk)
  }
  
  show() {
    stroke(0);
    strokeWeight(6);
    
    line(this.x, this.y, this.x, this.y + this.h);
    
    strokeWeight(1);
    for (let i = 0; i < this.disks.length; i++) {
      let offset = -i * DISK_Ht;
      let disk = this.disks[i];
      
      disk.show(this.x, this.y + this.h + offset);
    }
  }
}



function showTowers(){
  for(let tower of towers){
        tower.show()
    }
}
