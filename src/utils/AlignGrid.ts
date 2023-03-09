import { Button } from "../utils/Button";

export class AlignGrid extends Phaser.GameObjects.Group {
  scene: Phaser.Scene;
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  rows: number;
  columns: number;

  constructor(scene: Phaser.Scene, cols = 3, rows = 3) {
    super(scene);
    this.scene = scene;
    this.columns = cols;
    this.rows = rows;

    this.width = this.scene.scale.width;
    this.height = this.scene.scale.height;

    //cw cell width is the parent width divided by the number of columns
    this.cellWidth = this.width / this.columns;
    //ch cell height is the parent height divided the number of rows
    this.cellHeight = this.height / this.rows;
  }
  //place an object in relation to the grid
  private placeAt(xx: number, yy: number, obj: any) {
    //calculate the center of the cell
    //by adding half of the height and width
    //to the x and y of the coordinates
    var x2 = this.cellWidth * xx + this.cellWidth / 2;
    var y2 = this.cellHeight * yy + this.cellHeight / 2;
    obj.x = x2;
    obj.y = y2;
  }

  placeAtIndex(index: number, obj: any) {
    var yy = Math.floor(index / this.columns);
    var xx = index - yy * this.columns;
    this.placeAt(xx, yy, obj);
  }

  private placeAtAndScale(
    xx: number,
    yy: number,
    obj: any,
    numberXcells: number,
    numberYcells: number
  ) {
    console.log("placeAtAndScale object = ", obj);
    //calculate the center of the cell
    //by adding half of the height and width
    //to the x and y of the coordinates
    var x2 = this.cellWidth * xx;
    var y2 = this.cellHeight * yy;
    obj.x = x2;
    obj.y = y2;

    const newWidth = this.cellWidth * numberXcells;
    const newHeight = this.cellHeight * numberYcells;
    // obj.setDisplaysize(
    //   this.cellWidth * numberXcells,
    //   this.cellHeight * numberYcells
    // );
    obj.setOrigin(0);

    if (obj instanceof Phaser.GameObjects.Text || obj instanceof Button) {
      obj.width = 0;
      obj.height = 0;

      let fontSize = 60;
      while (obj.height < newHeight && obj.width < newWidth) {
        console.log("fontSize = ", fontSize);
        fontSize += 1;
        obj.setFontSize(fontSize);
      }

      // Mittig setzen
      obj.x = obj.x + 0.5 * (newWidth - obj.width);
      obj.y = obj.y + 0.5 * (newHeight - obj.height);
    } else {
      obj.width = newWidth;
      obj.height = newHeight;
    }
  }

  placeAtIndexAndScale(
    index: number,
    obj: any,
    numberXcells: number,
    numberYcells: number
  ) {
    var yy = Math.floor(index / this.columns);
    var xx = index - yy * this.columns;
    this.placeAtAndScale(xx, yy, obj, numberXcells, numberYcells);
  }

  //mostly for planning and debugging this will
  //create a visual representation of the grid
  show() {
    console.log("show AlignGrid");
    let graphics = this.scene.add.graphics();
    graphics.lineStyle(4, 0xff0000, 1).setDepth(9);
    //
    //
    console.log(this.width, this.cellWidth);
    for (let i = 0; i < this.width; i += this.cellWidth) {
      graphics.moveTo(i, 0);
      graphics.lineTo(i, this.height);
    }
    console.log(this.height, this.cellHeight);
    for (let i = 0; i < this.height; i += this.cellHeight) {
      graphics.moveTo(0, i);
      graphics.lineTo(this.width, i);
    }
    graphics.strokePath();
  }

  showNumbers() {
    this.show();
    let n = 0;
    for (var i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        let numText = this.scene.add
          .text(0, 0, n.toString(), {
            color: "red",
          })
          .setDepth(10);
        numText.setOrigin(0.5, 0.5);
        let fontSize = 40;

        numText.setFontSize(fontSize);

        this.placeAt(j, i, numText);
        n++;
      }
    }
  }
}
