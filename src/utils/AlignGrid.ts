import { Button } from "../utils/Button";

export class AlignGrid extends Phaser.GameObjects.Group {
  scene: Phaser.Scene;
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  rows: number;
  columns: number;
  baseX: number;
  baseY: number;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    cols = 3,
    rows = 3
  ) {
    super(scene);
    this.scene = scene;
    this.columns = cols;
    this.rows = rows;

    this.width = width;
    this.height = height;
    this.baseX = x;
    this.baseY = y;

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
    obj.x = this.baseX + x2;
    obj.y = this.baseY + y2;
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
    const newWidth = this.cellWidth * numberXcells;
    const newHeight = this.cellHeight * numberYcells;

    //calculate the center of the cell
    //by adding half of the height and width
    //to the x and y of the coordinates

    if (obj instanceof Phaser.GameObjects.Text || obj instanceof Button) {
      var x2 = this.cellWidth * xx + newWidth / 2;
      var y2 = this.cellHeight * yy + newHeight / 2;
      obj.x = this.baseX + x2;
      obj.y = this.baseY + y2;

      obj.setOrigin(0.5);

      obj.width = 0;
      obj.height = 0;

      let fontSize = 60;
      while (obj.height < newHeight && obj.width < newWidth) {
        // console.log("fontSize = ", fontSize);
        fontSize += 1;
        obj.setFontSize(fontSize);
      }
    } else if (obj instanceof Phaser.GameObjects.BitmapText) {
      var x2 = this.cellWidth * xx + newWidth / 2;
      var y2 = this.cellHeight * yy + newHeight / 2;
      obj.x = this.baseX + x2;
      obj.y = this.baseY + y2;

      obj.setOrigin(0.5);

      let fontSize = 60;
      while (obj.height < newHeight && obj.width < newWidth) {
        // console.log("fontSize = ", fontSize);
        fontSize += 1;
        obj.setFontSize(fontSize);
      }
    } else if (obj instanceof Phaser.GameObjects.Image) {
      var x2 = this.cellWidth * xx + newWidth / 2;
      var y2 = this.cellHeight * yy + newHeight / 2;
      obj.x = this.baseX + x2;
      obj.y = this.baseY + y2;

      obj.setOrigin(0.5);

      // gleichmäßig skalieren
      if (newWidth < newHeight) {
        obj.setDisplaySize(newWidth, newWidth);
      } else {
        obj.setDisplaySize(newHeight, newHeight);
      }
    } else if (obj instanceof Phaser.GameObjects.Rectangle) {
      var x2 = this.cellWidth * xx;
      var y2 = this.cellHeight * yy;
      obj.x = this.baseX + x2;
      obj.y = this.baseY + y2;

      obj.setOrigin(0);

      obj.width = newWidth;
      obj.height = newHeight;
    } else {
      var x2 = this.cellWidth * xx + newWidth / 2;
      var y2 = this.cellHeight * yy + newHeight / 2;
      obj.x = this.baseX + x2;
      obj.y = this.baseY + y2;

      obj.setOrigin(0.5);

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
    let graphics = this.scene.add.graphics();
    graphics.lineStyle(4, 0xff0000, 1).setDepth(9);

    for (let i = 0; i < this.width; i += this.cellWidth) {
      graphics.moveTo(this.baseX + i, this.baseY + 0);
      graphics.lineTo(this.baseX + i, this.baseY + this.height);
    }
    for (let i = 0; i < this.height; i += this.cellHeight) {
      graphics.moveTo(this.baseX + 0, this.baseY + i);
      graphics.lineTo(this.baseX + this.width, this.baseY + i);
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
