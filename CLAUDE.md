<system_context>
Advanced TypeScript-based Phaser 3 game collection featuring multiple mini-games with sophisticated shared systems for responsive design, unified input handling, state management, and cross-platform optimization. Built with Vite, using strict TypeScript, and phaser3-rex-plugins for enhanced functionality.
</system_context>

<file_map>
## FILE MAP
- `/src/games/prototype/` - Advanced RPG with complex state machines and combat
- `/src/games/dash/` - Endless runner with pixel-perfect collision detection  
- `/src/games/evade/` - Dodge mechanics with physics integration
- `/src/games/left-or-right/` - Decision-based mini-game with responsive UI
- `/src/games/rescue/` - Collection and rescue mechanics game
- `/src/shared/utils/GameUtils.ts` - Responsive design and device detection system
- `/src/shared/utils/AlignGrid.ts` - Grid-based UI positioning utilities
- `/src/shared/utils/Button.ts` - Consistent interactive UI elements
- `/src/shared/utils/consts/` - Centralized constants (AudioKeys, SceneKeys, etc.)
- `/src/shared/InputController.ts` - Unified cross-platform input management
- `/public/images/` - Game sprites, UI graphics, organized by game
- `/public/audios/` - Music and sound effects in multiple formats
- `/public/` - Level data JSON files and tilemap configurations
- `/vite/config.dev.mjs` - Development configuration with hot reloading
- `/vite/config.prod.mjs` - Production optimization with code splitting
</file_map>

<paved_path>
## ARCHITECTURE (PAVED PATH)

### Responsive Design System
ALL games MUST implement responsive handling using GameUtils:
```typescript
// Standard implementation pattern - MANDATORY for all games
GameUtils.setupResponsiveHandling(
  this,
  this.handleResize.bind(this),
  this.handleOrientationChange.bind(this)
);
```

### Unified Input System  
ALL games MUST use InputController for consistent cross-platform input:
```typescript
// Standard setup pattern - MANDATORY
this.inputController = new InputController(this);
this.inputController.initialize(this.handleAttack.bind(this));
```

### Scene Lifecycle Pattern
```typescript
class GameScene extends Phaser.Scene {
  init() {
    // Initialize variables and state before asset loading
  }
  
  preload() {
    // Load ALL assets with engaging progress feedback
    // Implement funny loading texts and progress animations
  }
  
  create() {
    // Set up game objects, physics, and systems
    // ALWAYS implement responsive handling here
  }
  
  update(time, delta) {
    // Optimized frame-by-frame game logic
    // NEVER create objects in this loop
  }
  
  shutdown() {
    // CRITICAL: Comprehensive cleanup and memory management
    this.events.removeAllListeners();
    window.removeEventListener('resize', this.handleResize);
    this.inputController?.destroy();
  }
}
```

### State Machine Architecture (Prototype Game)
```typescript
enum PlayerState {
  IDLE = 'idle',
  WALKING = 'walking', 
  ATTACKING = 'attacking',
  HURT = 'hurt',
  WALKING_ATTACK = 'walking-attack'
}

// Animation naming convention: ${action}-${direction}
// Priority: attacking/hurt states override movement states
```
</paved_path>

<patterns>
## DEVELOPMENT PATTERNS

### Commands (PAVED PATH)
```bash
# Development server - runs on port 8080 with hot reloading
npm run dev

# Production build - optimized bundle with code splitting
npm run build

# Preview build - test production build locally
npm run preview
```

### Responsive Design Implementation
```typescript
// Mobile landscape enforcement pattern
private handleOrientationChange() {
  const isLandscape = this.scale.width > this.scale.height;
  const isMobile = !this.sys.game.device.os.desktop;
  
  if (isMobile && !isLandscape) {
    this.showLandscapeMessage();
    this.scene.pause();
  }
}
```

### Input Handling Pattern
```typescript
// InputController capabilities:
// Desktop: WASD + Arrow keys + Space/Enter for actions
// Mobile: Virtual joystick + touch attack button
// Automatic device detection and control creation
// Responsive repositioning on screen changes
```

### Memory Management Pattern
```typescript
shutdown() {
  // Event listeners
  this.events.removeAllListeners();
  window.removeEventListener('resize', this.handleResize);
  
  // Input controllers  
  this.inputController?.destroy();
  
  // Particles and effects
  this.particles.forEach(p => p.destroy());
  
  // Timers and tweens
  this.timers.forEach(t => t.destroy());
  this.tweens.forEach(t => t.stop());
}
```

### Object Pooling Pattern
```typescript
class ObjectPool<T extends Phaser.GameObjects.GameObject> {
  private pool: T[] = [];
  
  get(): T {
    return this.pool.find(o => !o.active) || this.factory();
  }
  
  release(obj: T) {
    obj.setActive(false).setVisible(false);
  }
}
```

### Audio System Pattern
```typescript
// Browser audio policy handling
if (scene.sound.locked) {
  scene.sound.once('unlocked', () => {
    this.playBackgroundMusic();
  });
}

// Volume control with user preferences
this.backgroundMusic = this.sound.add(AudioKeys.BG_Music, {
  volume: 0.3,
  loop: true
});
```

### Constants Organization
```typescript
// AudioKeys.ts - Audio asset identifiers
export default {
  BG_Music: 'bg-music',
  JUMP_SOUND: 'jump-sound'
};

// SceneKeys.ts - Scene management
export default {
  MainMenu: 'MainMenu',
  GameScene: 'GameScene'  
};
```
</patterns>

<critical_notes>
## CRITICAL NOTES

### MANDATORY Implementation Requirements
- **Responsive Design**: ALL games MUST use `GameUtils.setupResponsiveHandling()`
- **Input Handling**: ALL games MUST implement `InputController` for cross-platform consistency
- **Memory Management**: CRITICAL cleanup in scene shutdown - memory leaks will occur without proper cleanup
- **TypeScript Strict Mode**: NO `any` types allowed - use proper Phaser interfaces
- **Performance**: NEVER create objects in update loops - causes garbage collection issues

### Technology Stack Requirements
- **Phaser 3.88.2**: Game engine with Arcade Physics
- **TypeScript 5.7.2**: Strict mode enabled, ES2020 target  
- **Vite 6.3.5**: Build tool with separate dev/prod configurations
- **phaser3-rex-plugins 1.80.16**: Virtual joystick and utilities

### Game-Specific Architecture Notes
- **Prototype Game**: Most advanced with 5+ player states, 40+ animation keys, complex combat
- **Dash Game**: Pixel-perfect collision, infinite scrolling, object pooling
- **Other Games**: Simpler state management but same responsive/input patterns

### Performance Critical Areas
- **Update Loops**: Avoid object creation, cache expensive calculations
- **Asset Loading**: Implement engaging progress feedback with funny loading texts
- **Physics**: Use efficient collision detection, proper body disposal
- **Audio**: Handle browser policies, multiple format support
- **Mobile**: Larger touch targets, context menu prevention, responsive controls

### Code Quality Standards
- **2-space indentation** with explicit typing
- **JSDoc comments** for public APIs and complex logic
- **Centralized constants** from `src/shared/utils/consts/`
- **Consistent formatting** and unused import removal
- **Browser compatibility** handling (audio unlock, orientation API)

### Anti-Patterns to Avoid
- Creating objects in update loops (garbage collection issues)
- Missing memory cleanup in shutdown (memory leaks)
- Ignoring responsive design requirements (mobile issues)
- Using hardcoded values instead of constants (maintenance issues)
- Skipping cross-platform testing (compatibility problems)
- Heavy calculations every frame (performance problems)
- Magic numbers instead of class properties/constants
- Missing graceful fallbacks for features/assets

### Commit Message Standards
```
<type>(<scope>): <description>

Types: feat, fix, docs, style, refactor, perf, test, chore, asset
Scopes: prototype, dash, evade, rescue, left-or-right, shared, input, audio, responsive, assets

Examples:
feat(prototype): add walking attack animation system
fix(shared): resolve memory leak in InputController cleanup  
asset(prototype): add new sword swing sound effects
```

### Testing Requirements
- Cross-platform testing (desktop keyboard/mouse + mobile touch)
- Multiple screen sizes for responsive validation
- Orientation changes with landscape enforcement testing
- Audio compatibility across browsers
- Performance monitoring (maintain 60fps target)
- Memory usage monitoring (no leaks in scene transitions)
</critical_notes>

<workflow>
## DEVELOPMENT WORKFLOW

### Bug Fix Process
1. **Reproduce** - Test on affected platforms, document steps, use dev tools
2. **Analyze** - Categorize: Physics, Animation, Input, Responsive, Audio, Memory
3. **Fix** - Minimal changes using existing patterns, focus on specific problem  
4. **Verify** - Test on all platforms, check performance impact, cross-platform validation

### Feature Implementation Process
1. **Plan** - Define scope, required assets, Phaser systems, shared utilities needed
2. **Design** - Create interfaces first, plan responsive behavior, state management
3. **Implement** - Use existing shared systems, follow responsive patterns, proper cleanup
4. **Test** - Desktop + mobile functionality, responsive behavior, audio, performance, memory

### Performance Analysis Focus
- Expensive operations in `update()` loops
- Object creation in hot paths
- Asset loading and disposal patterns  
- Physics calculations efficiency
- Particle effect performance
</workflow>