class Game {
  constructor(canvasId, scoreId, gameNumber) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.scoreElement = document.getElementById(scoreId);
    this.gameNumber = gameNumber;

    this.player = {
      x: 50,
      y: 200,
      size: 40,
      speed: 4,
      emoji: gameNumber === 1 ? '💪' : '🏃'
    };

    this.collectibles = [];
    this.obstacles = [];
    this.score = 0;
    this.gameActive = true;
    this.keys = {};

    this.setupControls();
    this.spawnCollectibles();
    this.spawnObstacles();
    this.gameLoop();
  }

  setupControls() {
    document.addEventListener('keydown', (e) => { this.keys[e.key] = true; });
    document.addEventListener('keyup', (e) => { this.keys[e.key] = false; });
  }

  spawnCollectibles() {
    for (let i = 0; i < 5; i++) {
      this.collectibles.push({
        x: Math.random() * (this.canvas.width - 30) + 15,
        y: Math.random() * (this.canvas.height - 30) + 15,
        size: 25,
        emoji: '⚡'
      });
    }
  }

  spawnObstacles() {
    for (let i = 0; i < 3; i++) {
      this.obstacles.push({
        x: Math.random() * (this.canvas.width - 40) + 20,
        y: Math.random() * (this.canvas.height - 40) + 20,
        size: 35,
        speedX: (Math.random() - 0.5) * 3,
        speedY: (Math.random() - 0.5) * 3,
        emoji: '🔥'
      });
    }
  }

  update() {
    if (!this.gameActive) return;

    // Movimiento
    const keys = this.keys;
    const p = this.player;
    const arrow = this.gameNumber === 1;

    if (arrow) {
      if (keys['ArrowUp']) p.y -= p.speed;
      if (keys['ArrowDown']) p.y += p.speed;
      if (keys['ArrowLeft']) p.x -= p.speed;
      if (keys['ArrowRight']) p.x += p.speed;
    } else {
      if (keys['w']) p.y -= p.speed;
      if (keys['s']) p.y += p.speed;
      if (keys['a']) p.x -= p.speed;
      if (keys['d']) p.x += p.speed;
    }

    // Límites
    p.x = Math.max(0, Math.min(this.canvas.width - p.size, p.x));
    p.y = Math.max(0, Math.min(this.canvas.height - p.size, p.y));

    // Obstáculos en movimiento
    this.obstacles.forEach(o => {
      o.x += o.speedX;
      o.y += o.speedY;
      if (o.x <= 0 || o.x >= this.canvas.width - o.size) o.speedX *= -1;
      if (o.y <= 0 || o.y >= this.canvas.height - o.size) o.speedY *= -1;
    });

    // Colisiones
    this.collectibles = this.collectibles.filter(c => {
      const dist = Math.hypot(p.x - c.x, p.y - c.y);
      if (dist < p.size) {
        this.score += 10;
        this.scoreElement.textContent = this.score;
        return false;
      }
      return true;
    });

    this.obstacles.forEach(o => {
      const dist = Math.hypot(p.x - o.x, p.y - o.y);
      if (dist < p.size) this.gameActive = false;
    });

    if (this.collectibles.length === 0) this.spawnCollectibles();
  }

  draw() {
    const ctx = this.ctx;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.font = `${this.player.size}px Arial`;
    ctx.fillText(this.player.emoji, this.player.x, this.player.y + this.player.size);

    this.collectibles.forEach(c => {
      ctx.font = `${c.size}px Arial`;
      ctx.fillText(c.emoji, c.x, c.y + c.size);
    });

    this.obstacles.forEach(o => {
      ctx.font = `${o.size}px Arial`;
      ctx.fillText(o.emoji, o.x, o.y + o.size);
    });

    if (!this.gameActive) {
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillStyle = '#fff';
      ctx.font = '40px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('¡Game Over!', this.canvas.width / 2, this.canvas.height / 2);
    }
  }

  gameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.gameLoop());
  }
}

let game1 = new Game('gameCanvas1', 'score1', 1);
let game2 = new Game('gameCanvas2', 'score2', 2);

function restartGame(num) {
  if (num === 1) game1 = new Game('gameCanvas1', 'score1', 1);
  else game2 = new Game('gameCanvas2', 'score2', 2);
}
