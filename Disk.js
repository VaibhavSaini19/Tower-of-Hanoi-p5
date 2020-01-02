class Disk {
  constructor(rank) {
    this.size = map(TOTAL_DISKS - rank, 0, TOTAL_DISKS, 25, 175);
    this.color = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ]
  }

  show(x, y) {
    fill(this.color);

    rectMode(CENTER);
    let w = this.size;
    rect(x, y, w, DISK_Ht);
  }
}