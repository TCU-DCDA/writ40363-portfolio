
// p5.js sketch: Code Rain animation for Digital Media & Web Development skill card
// Creates a Matrix-like falling code effect with programming terms
// Uses instance mode to place canvas in a specific div

(function() {
  let rainDrops = [];
  let numDrops = 8;
  
  const sketch = (p) => {
    p.setup = function() {
      // Create canvas and attach to skill card div
      let canvas = p.createCanvas(200, 150);
      let target = document.getElementById('skill1-p5-canvas');
      if (target) {
        canvas.parent(target);
      }
      
      // Initialize code rain drops
      for (let i = 0; i < numDrops; i++) {
        rainDrops.push(createRainDrop(p));
      }
      
      p.frameRate(12); // Slower frame rate for classic code rain effect
    };

    p.draw = function() {
      // Dark background with slight transparency for trailing effect
      p.fill(0, 0, 0, 50);
      p.rect(0, 0, p.width, p.height);
      
      // Update and draw each rain drop
      for (let drop of rainDrops) {
        updateRainDrop(p, drop);
        drawRainDrop(p, drop);
      }
    };
  };

  // Create a new rain drop with random properties
  function createRainDrop(p) {
    return {
      x: p.random(p.width),
      y: p.random(-100, 0),
      speed: p.random(2, 5),
      symbols: generateCodeString(),
      spacing: 16,
      length: p.random(5, 12)
    };
  }

  // Update rain drop position and reset when it goes off screen
  function updateRainDrop(p, drop) {
    drop.y += drop.speed;
    
    // Reset drop when it falls below the canvas
    if (drop.y > p.height + drop.length * drop.spacing) {
      drop.x = p.random(p.width);
      drop.y = p.random(-100, -20);
      drop.speed = p.random(2, 5);
      drop.symbols = generateCodeString();
      drop.length = p.random(5, 12);
    }
  }

  // Draw the rain drop as a vertical string of code symbols
  function drawRainDrop(p, drop) {
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont('monospace');
    p.textSize(12);
    
    for (let i = 0; i < drop.length; i++) {
      let symbolY = drop.y + i * drop.spacing;
      
      // Skip if symbol is above or below visible area
      if (symbolY < -20 || symbolY > p.height + 20) continue;
      
      // Calculate opacity - brightest at the front (bottom) of the drop
      let opacity = p.map(i, 0, drop.length - 1, 255, 50);
      
      // Use green color with varying opacity for classic Matrix effect
      if (i === drop.length - 1) {
        // Brightest symbol at front - white/bright green
        p.fill(150, 255, 150, opacity);
      } else {
        // Other symbols - green with decreasing opacity
        p.fill(0, 255, 70, opacity);
      }
      
      // Get symbol from the code string, cycling through if needed
      let symbolIndex = i % drop.symbols.length;
      p.text(drop.symbols[symbolIndex], drop.x, symbolY);
    }
  }

  // Generate a string of random code-related characters and terms
  function generateCodeString() {
    const codeChars = [
      // Programming symbols
      '<', '>', '{', '}', '(', ')', '[', ']', '=', '+', '-', '*', '/', ';', 
      ':', '?', '!', '#', '$', '%', '&', '|', '^', '~', '@',
      // Code snippets
      'if', 'el', 'for', 'fn', 'var', 'let', 'css', 'js', 'py', 'html',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'A', 'B', 'C', 'X', 'Y', 'Z'
    ];
    
    let result = [];
    let length = Math.floor(Math.random() * 15) + 8; // 8-22 characters
    
    for (let i = 0; i < length; i++) {
      result.push(codeChars[Math.floor(Math.random() * codeChars.length)]);
    }
    
    return result;
  }

  // Create the p5 instance
  new p5(sketch);
})();


// To use this illustration, add the following to your HTML:
// <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
// <script src="css/skill1-illustration.js"></script>
// <div id="defaultCanvas0"></div> <!-- p5 will create the canvas here -->
