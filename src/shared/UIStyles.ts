export const UIStyles = {
  // Simplified color palette using Phaser color constants
  colors: {
    primary: 0x8B4513,      // Brown - main UI color  
    primaryHover: 0xA0522D, // Lighter brown - hover state
    text: 0xFFFFFF,         // White - main text color
    background: 0x000000,   // Black - backgrounds and overlays
    accent: 0xDAA520        // Gold - accent color for highlights
  },

  // Typography
  fonts: {
    title: {
      fontSize: '48px',
      fontFamily: 'serif',
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: '32px', 
      fontFamily: 'serif',
      fontWeight: 'normal'
    },
    button: {
      fontSize: '28px',
      fontFamily: 'serif', 
      fontWeight: 'bold'
    },
    text: {
      fontSize: '24px',
      fontFamily: 'serif',
      fontWeight: 'normal'
    }
  },

  // Button styles
  button: {
    primary: {
      fontSize: '28px',
      fontFamily: 'serif',
      fontWeight: 'bold',
      color: '#FFFFFF',
      backgroundColor: '#8B4513',
      padding: { x: 30, y: 15 },
      stroke: '#000000',
      strokeThickness: 2
    }
  },

  // Text styles
  text: {
    title: {
      fontSize: '64px',
      fontFamily: 'serif', 
      fontWeight: 'bold',
      color: '#DAA520',
      stroke: '#000000',
      strokeThickness: 4
    },
    gameOver: {
      fontSize: '72px',
      fontFamily: 'serif',
      fontWeight: 'bold',
      color: '#DAA520',
      stroke: '#000000', 
      strokeThickness: 4
    },
    loading: {
      fontSize: '24px',
      fontFamily: 'serif',
      color: '#FFFFFF'
    }
  }
};