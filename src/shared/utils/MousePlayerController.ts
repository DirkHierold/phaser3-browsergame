// MousePlayerController.ts
import Phaser from "phaser";
import Player from "../Player"; // Assuming Player.ts is in the same directory or accessible

export default class MousePlayerController {
    private player: Player;
    private scene: Phaser.Scene;

    private isPointerDown: boolean = false;
    private oldPointerX: number = 0;
    private oldPointerY: number = 0;
    private lastPointerTime: number = 0;
    private currentPointerX: number = 0;
    private currentPointerY: number = 0;

    constructor(scene: Phaser.Scene, player: Player) {
        this.scene = scene;
        this.player = player;

        // Attach global event listeners using arrow functions for proper 'this' binding
        window.addEventListener("pointerdown", this.onPointerDown);
        window.addEventListener("pointerup", this.onPointerUp);
        window.addEventListener("pointermove", this.onPointerMove);

        // Add this controller to the scene's update list
        // This allows the controller's update method to be called every frame
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    // Use arrow functions for event handlers
    private onPointerDown = (event: PointerEvent) => {
        // Only proceed if the player object still exists and is active
        if (!this.player || !this.player.active) return;

        this.isPointerDown = true;
        this.oldPointerX = event.clientX;
        this.oldPointerY = event.clientY;
        this.lastPointerTime = this.scene.game.loop.now;
        this.currentPointerX = event.clientX;
        this.currentPointerY = event.clientY;
    }

    private onPointerUp = (event: PointerEvent) => {
        // Only proceed if the player object still exists and is active
        if (!this.player || !this.player.active) return;

        this.isPointerDown = false;
        this.player.setVelocity(0, 0); // Stop the player when mouse is released
        this.oldPointerX = 0;
        this.oldPointerY = 0;
        this.lastPointerTime = 0;
    }

    private onPointerMove = (event: PointerEvent) => {
        // Only proceed if the player object still exists and is active
        if (!this.player || !this.player.active) return;

        if (this.isPointerDown) {
            this.currentPointerX = event.clientX;
            this.currentPointerY = event.clientY;
        }
    }

    // This update method will be called by the scene's event listener
    update = (time: number, delta: number) => { // Also use arrow function for update if binding directly in constructor
        if (!this.player || !this.player.active || !this.player.visible) {
            return; // Don't move if player or controller is inactive or invisible
        }

        if (this.isPointerDown) {
            const now = time;
            const dt = (now - this.lastPointerTime) / 1000; // Seconds

            const dx = this.currentPointerX - this.oldPointerX;
            const dy = this.currentPointerY - this.oldPointerY;

            let vx = 0;
            let vy = 0;

            if (dt > 0) {
                vx = dx / dt;
                vy = dy / dt;
            }

            this.player.setVelocity(vx, vy);

            if (Math.abs(dx) > 1) {
                this.player.setFlipX(dx <= 0);
            }
            this.oldPointerX = this.currentPointerX;
            this.oldPointerY = this.currentPointerY;
            this.lastPointerTime = now;
        }
    }

    // Call this method when the controller is no longer needed (e.g., scene shutdown)
    destroy() {
        // When removing, you must pass the exact same function reference
        window.removeEventListener("pointerdown", this.onPointerDown);
        window.removeEventListener("pointerup", this.onPointerUp);
        window.removeEventListener("pointermove", this.onPointerMove);
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);

        // Nullify references to prevent memory leaks, especially important for the player
        this.player = null as any; // Cast to any to satisfy TypeScript, as player might be null after destroy
        this.scene = null as any; // Same for scene
    }
}