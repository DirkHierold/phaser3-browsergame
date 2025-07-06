// Utility for pixel-perfect collision in Phaser 3
// Only works for static images (not animated spritesheets)

import Phaser from 'phaser';

export function pixelPerfectOverlap(
    spriteA: Phaser.GameObjects.Sprite,
    spriteB: Phaser.GameObjects.Sprite,
    scene: Phaser.Scene,
    alphaThreshold: number = 1
): boolean {
    // Get bounds intersection
    const boundsA = spriteA.getBounds();
    const boundsB = spriteB.getBounds();
    if (!Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB)) return false;

    // Calculate overlap rectangle
    const xStart = Math.max(boundsA.x, boundsB.x);
    const yStart = Math.max(boundsA.y, boundsB.y);
    const xEnd = Math.min(boundsA.right, boundsB.right);
    const yEnd = Math.min(boundsA.bottom, boundsB.bottom);

    // Get texture keys
    const keyA = spriteA.texture.key;
    const keyB = spriteB.texture.key;

    // Account for originX/originY
    const originAX = spriteA.originX;
    const originAY = spriteA.originY;
    const originBX = spriteB.originX;
    const originBY = spriteB.originY;

    // Get texture source images for width/height mapping
    const texA = scene.textures.get(keyA).getSourceImage();
    const texB = scene.textures.get(keyB).getSourceImage();
    // Loop through overlap area (step by 2 for perf)
    for (let x = xStart; x < xEnd; x += 2) {
        for (let y = yStart; y < yEnd; y += 2) {
            // Get local coords in each sprite (account for scale and origin)
            const ax = Math.round((x - (spriteA.x - spriteA.displayWidth * originAX)) / spriteA.displayWidth * texA.width);
            const ay = Math.round((y - (spriteA.y - spriteA.displayHeight * originAY)) / spriteA.displayHeight * texA.height);
            const bx = Math.round((x - (spriteB.x - spriteB.displayWidth * originBX)) / spriteB.displayWidth * texB.width);
            const by = Math.round((y - (spriteB.y - spriteB.displayHeight * originBY)) / spriteB.displayHeight * texB.height);
            // Only check if local coords are inside the texture bounds
            if (
                ax >= 0 && ay >= 0 && bx >= 0 && by >= 0 &&
                ax < texA.width && ay < texA.height &&
                bx < texB.width && by < texB.height
            ) {
                const alphaA = scene.textures.getPixelAlpha(ax, ay, keyA);
                const alphaB = scene.textures.getPixelAlpha(bx, by, keyB);
                if (alphaA >= alphaThreshold && alphaB >= alphaThreshold) {
                    return true;
                }
            }
        }
    }
    return false;
}
