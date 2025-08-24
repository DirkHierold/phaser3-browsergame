# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 8080 with hot reloading)
- **Production build**: `npm run build` (optimized bundle with code splitting)
- **Preview build**: `npm run preview` (test production build locally)

## Project Architecture Overview

This is a sophisticated TypeScript-based Phaser 3 game collection using Vite as the build tool. The project contains multiple mini-games with advanced shared systems for responsive design, unified input handling, state management, and cross-platform optimization.

### Technology Stack
- **Phaser 3.88.2**: Game engine with Arcade Physics
- **TypeScript 5.7.2**: Strict mode enabled, ES2020 target
- **Vite 6.3.5**: Build tool with separate dev/prod configurations
- **phaser3-rex-plugins 1.80.16**: Virtual joystick and additional utilities

### Project Structure

```
src/
├── games/                    # Individual game implementations
│   ├── prototype/           # Advanced RPG with complex state machines
│   ├── dash/                # Endless runner with pixel-perfect collision
│   ├── evade/               # Dodge mechanics with physics
│   ├── left-or-right/       # Decision-based mini-game
│   └── rescue/              # Collection and rescue mechanics
├── shared/                  # Comprehensive shared library
│   ├── utils/               # Core utilities and systems
│   │   ├── GameUtils.ts     # Responsive design and device detection
│   │   ├── AlignGrid.ts     # Grid-based UI positioning
│   │   ├── Button.ts        # Consistent interactive elements
│   │   └── consts/          # Centralized constants
│   │       ├── AudioKeys.ts # Audio asset identifiers
│   │       ├── SceneKeys.ts # Scene transition keys
│   │       └── [other].ts   # Domain-specific constants
│   ├── InputController.ts   # Unified cross-platform input
│   └── [Entity classes]     # Reusable game entities
public/                      # Static assets with organized structure
├── images/                  # Sprites, UI, and game graphics
├── audios/                  # Music and sound effects
└── [level-data].json        # Game configuration and level data
```

## Core Systems and Patterns

### Responsive Design Architecture

Every game implements comprehensive responsive handling using the `GameUtils` system:

```typescript
// Standard implementation across all games
GameUtils.setupResponsiveHandling(
  this,
  this.handleResize.bind(this),
  this.handleOrientationChange.bind(this)
);
```

**Key Features:**
- Automatic device detection (mobile vs desktop)
- Landscape orientation enforcement on mobile devices
- Dynamic scaling calculations maintaining aspect ratios
- Relative position preservation during screen changes
- Localized orientation messages (German/English support)
- Memory-safe event listener management

### Unified Input System

The `InputController` provides consistent input handling across all platforms:

```typescript
// Standard setup pattern
this.inputController = new InputController(this);
this.inputController.initialize(this.handleAttack.bind(this));
```

**Capabilities:**
- **Desktop**: WASD + Arrow keys + Space/Enter for actions
- **Mobile**: Virtual joystick (phaser3-rex-plugins) + touch attack button
- Automatic device detection and appropriate control creation
- Responsive repositioning of mobile controls on screen changes
- Proper cleanup and memory management

### Advanced Scene Management

All games follow a consistent scene lifecycle with sophisticated asset and memory management:

**Lifecycle Pattern:**
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
    // Avoid object creation in this loop
  }
  
  shutdown() {
    // CRITICAL: Comprehensive cleanup and memory management
    this.events.removeAllListeners();
    window.removeEventListener('resize', this.handleResize);
    this.inputController?.destroy();
  }
}
```

### State Machine Implementation

The prototype game demonstrates advanced state management patterns:

```typescript
enum PlayerState {
  IDLE = 'idle',
  WALKING = 'walking',
  ATTACKING = 'attacking',
  HURT = 'hurt',
  WALKING_ATTACK = 'walking-attack'
}
```

**Features:**
- Complex state transitions with animation coordination
- Priority state handling (attacking/hurt states override movement)
- Seamless state transitions with frame persistence
- Directional animation selection (`${action}-${direction}` pattern)

## Game-Specific Implementations

### Prototype Game (Most Advanced)
- **State Machine**: 5+ player states with complex transitions
- **Animation System**: 40+ directional animation keys
- **Combat Mechanics**: Physics-based with dynamic hitboxes
- **Enemy AI**: Respawning system with death animations
- **Audio Integration**: Footsteps, combat sounds, background music
- **Responsive Design**: Complete implementation with relative positioning

### Dash Game
- **Collision Detection**: Pixel-perfect collision utilities
- **Scrolling System**: Infinite scrolling with obstacle generation
- **Physics Integration**: Custom collision shapes and boundaries
- **Performance Optimization**: Object pooling and efficient updates

### Other Games (Evade, Left-or-Right, Rescue)
- Each implements core responsive and input patterns
- Simpler state management than prototype
- Consistent shared utility usage
- Unique game mechanics and objectives

## Development Workflow and Standards

### Code Quality Requirements
- **TypeScript Strict Mode**: Enforced across entire project
- **No `any` Types**: Use proper Phaser interfaces and custom types
- **JSDoc Documentation**: Required for all public APIs
- **Centralized Constants**: Use constants from `src/shared/utils/consts/`
- **Consistent Formatting**: 2-space indentation, explicit typing

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
- **Cross-Platform Testing**: Desktop (keyboard/mouse) and mobile (touch)
- **Multiple Screen Sizes**: Validate responsive behavior
- **Orientation Changes**: Test landscape enforcement on mobile
- **Audio Compatibility**: Verify playback across browsers
- **Performance Monitoring**: Maintain 60fps target
- **Memory Management**: No leaks in scene transitions

### Performance Optimization Patterns

**Object Pooling:**
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

**Efficient Updates:**
- Minimize object creation in update loops
- Cache expensive calculations
- Batch operations when possible
- Use throttling for non-critical operations

## Memory Management and Cleanup

### Critical Cleanup Patterns
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

### Memory Leak Prevention
- Always clean up event listeners in scene shutdown
- Properly dispose of physics bodies and collision handlers
- Clear particle emitters and visual effects on transitions
- Remove timer events and tweens
- Destroy input controllers and custom objects

## Audio System Management

### Comprehensive Audio Handling
```typescript
// Browser audio policy handling
if (scene.sound.locked) {
  scene.sound.once('unlocked', () => {
    this.playBackgroundMusic();
  });
}

// Volume control and user preferences
this.backgroundMusic = this.sound.add(AudioKeys.BG_Music, {
  volume: 0.3,
  loop: true
});
```

**Features:**
- Background music with volume controls
- Sound effects with proper browser policy handling
- Multiple audio format support (.mp3, .wav, .ogg)
- User preference management

## Asset Management

### Loading and Organization
- **Images**: Organized in `/public/images/` with consistent naming
- **Audio**: Multiple formats in `/public/audios/` for browser compatibility
- **Level Data**: JSON configuration files in `/public/` root
- **Tilemaps**: Tiled editor files in `/public/tilemaps/`

### Loading Screen Implementation
```typescript
// Engaging loading screens with progress tracking
this.load.on('progress', (progress: number) => {
  this.updateProgressBar(progress);
  this.updateFunnyText(progress);
});
```

## Mobile Optimization and Responsive Design

### Touch-Friendly Implementation
- Larger touch targets for mobile devices
- Context menu prevention on long press
- Proper touch event handling
- Responsive control positioning

### Orientation Handling
```typescript
private handleOrientationChange() {
  const isLandscape = this.scale.width > this.scale.height;
  const isMobile = !this.sys.game.device.os.desktop;
  
  if (isMobile && !isLandscape) {
    this.showLandscapeMessage();
    this.scene.pause();
  }
}
```

## Constants and Configuration Management

### Centralized Constants Structure
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

## Documentation Standards

### JSDoc Requirements
```typescript
/**
 * Sets up responsive handling for a Phaser scene with mobile optimization
 * @param scene - The Phaser scene to add responsive handling to
 * @param resizeCallback - Optional callback function to execute on resize
 * @param orientationCallback - Optional callback for orientation changes
 * @example
 * GameUtils.setupResponsiveHandling(this, this.handleResize.bind(this));
 */
```

### Code Comment Standards
- Explain complex game logic and mathematical calculations
- Document performance considerations and optimizations
- Note mobile-specific implementations and workarounds
- Explain state machine transitions and conditions

## Problem-Solving and Implementation Guidelines

### Feature Implementation Process
1. **Planning**: Analyze requirements and shared utility usage
2. **Design**: Plan responsive design and input handling
3. **Implementation**: Follow established patterns and conventions
4. **Testing**: Verify cross-platform functionality
5. **Documentation**: Update guides and add inline documentation
6. **Optimization**: Performance testing and memory management

### Bug Fix Methodology
1. **Reproduce**: Test on affected platforms with specific conditions
2. **Analyze**: Use browser dev tools and console logging
3. **Identify**: Determine root cause and affected systems
4. **Fix**: Implement minimal, focused solution
5. **Verify**: Test fix across all platforms
6. **Document**: Update troubleshooting guides if needed

## Build Configuration and Deployment

### Environment Configurations
- **Development**: `vite/config.dev.mjs` - Hot reloading, port 8080
- **Production**: `vite/config.prod.mjs` - Optimized bundle, code splitting
- **Phaser Optimization**: Separate chunk for framework code

### TypeScript Configuration
- **Strict Mode**: Enabled with comprehensive type checking
- **ES2020 Target**: Modern JavaScript features
- **Bundle Resolution**: Optimized for Vite bundling
- **Library Integration**: DOM types for browser APIs

## Project Rules and Best Practices

### Essential Development Patterns
- Always use `GameUtils.setupResponsiveHandling()` for all games
- Implement `InputController` for consistent cross-platform input
- Follow state machine patterns for complex character behavior
- Use object pooling for frequently created/destroyed objects
- Cache expensive calculations and batch operations
- Leverage shared utilities before creating new functionality
- Maintain proper separation of concerns in scene architecture
- Test on both desktop and mobile throughout development
- Use `this.time.delayedCall()` instead of `setTimeout()` for game timing
- Prefer composition over inheritance for game entities
- Use proper Phaser types and interfaces (avoid `any` type)

### Code Quality Standards
- Follow TypeScript strict mode (as configured in tsconfig.json)
- Use 2-space indentation with explicit typing
- Implement JSDoc comments for public methods and complex game logic
- Remove unused imports and variables consistently
- Check if Phaser objects exist before using them
- Validate JSON level data and external inputs
- Handle browser compatibility issues (audio unlock, orientation API)

### Anti-Patterns to Avoid
- Creating objects in update loops (causes garbage collection)
- Missing memory cleanup in scene shutdown (memory leaks)
- Ignoring responsive design requirements (mobile issues)
- Using hardcoded values instead of constants (maintenance issues)
- Skipping cross-platform testing (compatibility problems)
- Heavy calculations every frame (performance problems)
- Using magic numbers instead of class properties or constants
- Missing graceful fallbacks for missing features or assets

This comprehensive guide ensures consistent development practices, optimal performance, and maintainable code architecture across the entire game collection while leveraging the sophisticated shared systems already in place.

## Phaser 3 Engine Documentation

For comprehensive Phaser 3 engine documentation, API references, and best practices, refer to the documentation files in the `doc/` folder:

### Available Documentation

- **`doc/phaser-overview.md`**: Complete Phaser 3 engine overview, core concepts, and game development fundamentals
- **`doc/api-documentation.md`**: Full API reference for Phaser 3 classes, methods, and properties
- **`doc/api-documentation-2.md`**: Extended API documentation with additional examples and use cases
- **`doc/phaser-editor.md`**: Phaser Editor documentation for visual game development tools
- **`doc/getting-started.md`**: Getting started guide for Phaser 3 development

### Usage Guidelines

When implementing new features or fixing bugs in this Phaser 3 game collection:

1. **Reference the documentation first**: Check the relevant doc files for proper Phaser 3 syntax, methods, and best practices
2. **Follow Phaser conventions**: Use the documented patterns and conventions from the official Phaser documentation
3. **Leverage engine features**: Utilize built-in Phaser systems (physics, animations, audio, etc.) as documented
4. **Maintain consistency**: Ensure all implementations follow both the project patterns above AND Phaser 3 best practices

These documentation files provide the authoritative reference for Phaser 3 engine usage, ensuring all AI-assisted development follows proper engine conventions and utilizes the full capabilities of the Phaser framework.