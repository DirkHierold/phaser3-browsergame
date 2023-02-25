export var Align = /** @class */ (function () {
  function Align() {}
  Align.scaleToGameW = function (
    obj: { displayWidth: number; scaleY: any; scaleX: any },
    per: number,
    scene: Phaser.Scene
  ) {
    var w = scene.scale.width;
    obj.displayWidth = w * per;
    obj.scaleY = obj.scaleX;
  };
  Align.scaleToGameH = function (
    obj: { displayHeight: number; scaleX: any; scaleY: any },
    per: number,
    scene: Phaser.Scene
  ) {
    var h = scene.scale.height;
    obj.displayHeight = h * per;
    obj.scaleX = obj.scaleY;
  };
  Align.centerH = function (
    obj: { x: number; displayWidth: number },
    scene: Phaser.Scene
  ) {
    obj.x = scene.scale.width / 2 - obj.displayWidth / 2;
  };
  Align.centerV = function (
    obj: { y: number; displayHeight: number },
    scene: Phaser.Scene
  ) {
    obj.y = scene.scale.height / 2 - obj.displayHeight / 2;
  };
  Align.center2 = function (
    obj: { x: number; displayWidth: number; y: number; displayHeight: number },
    scene: Phaser.Scene
  ) {
    obj.x = scene.scale.width / 2 - obj.displayWidth / 2;
    obj.y = scene.scale.height / 2 - obj.displayHeight / 2;
  };
  Align.center = function (obj: { x: number; y: number }, scene: Phaser.Scene) {
    obj.x = scene.scale.width / 2;
    obj.y = scene.scale.height / 2;
  };
  Align.getYPer = function (per: number, scene: Phaser.Scene) {
    return scene.scale.height * per;
  };
  Align.getXPer = function (per: number, scene: Phaser.Scene) {
    return scene.scale.width * per;
  };
  Align.centerToObj = function (
    obj1: { x: number; displayWidth: number; y: number; displayHeight: number },
    obj2: { displayWidth: number; displayHeight: number }
  ) {
    obj1.x = obj2.displayWidth / 2 - obj1.displayWidth / 2;
    obj1.y = obj2.displayHeight / 2 - obj1.displayHeight / 2;
  };
  return Align;
})();
