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

        // Attach global event listeners
        window.addEventListener("pointerdown", this.onPointerDown.bind(this));
        window.addEventListener("pointerup", this.onPointerUp.bind(this));
        window.addEventListener("pointermove", this.onPointerMove.bind(this));

        // Add this controller to the scene's update list
        // This allows the controller's update method to be called every frame
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }

    private onPointerDown(event: PointerEvent) {
        this.isPointerDown = true;
        this.oldPointerX = event.clientX;
        this.oldPointerY = event.clientY;
        this.lastPointerTime = this.scene.game.loop.now;
        this.currentPointerX = event.clientX;
        this.currentPointerY = event.clientY;
    }

    private onPointerUp(event: PointerEvent) {
        this.isPointerDown = false;
        this.player.setVelocity(0, 0); // Stop the player when mouse is released
        this.oldPointerX = 0;
        this.oldPointerY = 0;
        this.lastPointerTime = 0;
    }

    private onPointerMove(event: PointerEvent) {
        if (this.isPointerDown) {
            this.currentPointerX = event.clientX;
            this.currentPointerY = event.clientY;
        }
    }

    // This update method will be called by the scene's event listener
    update(time: number, delta: number) {
        if (!this.player.active || !this.player.visible) {
            return; // Don't move if player is inactive or invisible
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
        window.removeEventListener("pointerdown", this.onPointerDown.bind(this));
        window.removeEventListener("pointerup", this.onPointerUp.bind(this));
        window.removeEventListener("pointermove", this.onPointerMove.bind(this));
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
    }
}