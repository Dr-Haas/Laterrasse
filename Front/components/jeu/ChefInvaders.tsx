'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Button } from '@/components/ui/Button'

interface GameObject {
  x: number
  y: number
  width: number
  height: number
  speed?: number
}

interface Enemy extends GameObject {
  emoji: string
  points: number
}

interface Knife extends GameObject {
  active: boolean
}

// Dimensions adaptées pour mobile/Game Boy
const CANVAS_WIDTH = 360
const CANVAS_HEIGHT = 480
const CHEF_WIDTH = 40
const CHEF_HEIGHT = 40
const CHEF_SPEED = 6
const KNIFE_WIDTH = 6
const KNIFE_HEIGHT = 16
const KNIFE_SPEED = 9
const ENEMY_WIDTH = 35
const ENEMY_HEIGHT = 35
const ENEMY_SPEED = 1
const ENEMY_ROWS = 3
const ENEMY_COLS = 6

const FOOD_EMOJIS = ['🍅', '🥕', '🥒', '🧅', '🥔', '🌶️', '🥦', '🍆']

export function ChefInvaders() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'paused' | 'gameOver'>('menu')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [level, setLevel] = useState(1)
  
  const gameLoopRef = useRef<number>(0)
  const keysPressed = useRef<Set<string>>(new Set())
  
  const chefRef = useRef<GameObject>({
    x: CANVAS_WIDTH / 2 - CHEF_WIDTH / 2,
    y: CANVAS_HEIGHT - CHEF_HEIGHT - 20,
    width: CHEF_WIDTH,
    height: CHEF_HEIGHT,
  })
  
  const knivesRef = useRef<Knife[]>([])
  const enemiesRef = useRef<Enemy[]>([])
  const enemyDirectionRef = useRef<'right' | 'left'>('right')
  const lastShotTimeRef = useRef(0)
  const animationFrameRef = useRef(0)

  // Initialiser les ennemis
  const initEnemies = useCallback((currentLevel: number) => {
    const enemies: Enemy[] = []
    const speedMultiplier = 1 + (currentLevel - 1) * 0.15
    const spacing = CANVAS_WIDTH / (ENEMY_COLS + 1)
    
    for (let row = 0; row < ENEMY_ROWS; row++) {
      for (let col = 0; col < ENEMY_COLS; col++) {
        enemies.push({
          x: spacing * (col + 0.5),
          y: 40 + row * 50,
          width: ENEMY_WIDTH,
          height: ENEMY_HEIGHT,
          speed: ENEMY_SPEED * speedMultiplier,
          emoji: FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)],
          points: 10 * (row + 1),
        })
      }
    }
    
    enemiesRef.current = enemies
    enemyDirectionRef.current = 'right'
  }, [])

  // Détecter les collisions
  const checkCollision = (obj1: GameObject, obj2: GameObject): boolean => {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    )
  }

  // Dessiner le chef
  const drawChef = (ctx: CanvasRenderingContext2D, chef: GameObject) => {
    // Corps du chef (toque)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.ellipse(chef.x + chef.width / 2, chef.y + 15, 20, 15, 0, 0, Math.PI * 2)
    ctx.fill()
    
    // Haut de la toque
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(chef.x + chef.width / 2 - 15, chef.y, 30, 15)
    
    // Visage
    ctx.fillStyle = '#ffdbac'
    ctx.beginPath()
    ctx.arc(chef.x + chef.width / 2, chef.y + 35, 18, 0, Math.PI * 2)
    ctx.fill()
    
    // Yeux
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(chef.x + chef.width / 2 - 7, chef.y + 32, 2, 0, Math.PI * 2)
    ctx.arc(chef.x + chef.width / 2 + 7, chef.y + 32, 2, 0, Math.PI * 2)
    ctx.fill()
    
    // Sourire
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(chef.x + chef.width / 2, chef.y + 35, 8, 0.2, Math.PI - 0.2)
    ctx.stroke()
    
    // Corps (veste de chef)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(chef.x + chef.width / 2 - 18, chef.y + 45, 36, 15)
  }

  // Dessiner un couteau
  const drawKnife = (ctx: CanvasRenderingContext2D, knife: Knife) => {
    // Lame
    ctx.fillStyle = '#c0c0c0'
    ctx.fillRect(knife.x, knife.y, knife.width, knife.height * 0.7)
    
    // Manche
    ctx.fillStyle = '#8b4513'
    ctx.fillRect(knife.x - 1, knife.y + knife.height * 0.7, knife.width + 2, knife.height * 0.3)
    
    // Brillance sur la lame
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(knife.x + 2, knife.y + 2, 2, knife.height * 0.5)
  }

  // Dessiner un ennemi
  const drawEnemy = (ctx: CanvasRenderingContext2D, enemy: Enemy) => {
    ctx.font = `${enemy.width}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(enemy.emoji, enemy.x + enemy.width / 2, enemy.y + enemy.height / 2)
  }

  // Boucle de jeu principale
  const gameLoop = useCallback((_timestamp: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Effacer le canvas
    ctx.fillStyle = '#1e293b'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Déplacer le chef
    const chef = chefRef.current
    if (keysPressed.current.has('ArrowLeft') && chef.x > 0) {
      chef.x -= CHEF_SPEED
    }
    if (keysPressed.current.has('ArrowRight') && chef.x < CANVAS_WIDTH - CHEF_WIDTH) {
      chef.x += CHEF_SPEED
    }

    // Tirer des couteaux
    const now = Date.now()
    if (keysPressed.current.has(' ') && now - lastShotTimeRef.current > 250) {
      knivesRef.current.push({
        x: chef.x + CHEF_WIDTH / 2 - KNIFE_WIDTH / 2,
        y: chef.y,
        width: KNIFE_WIDTH,
        height: KNIFE_HEIGHT,
        active: true,
      })
      lastShotTimeRef.current = now
    }

    // Mettre à jour et dessiner les couteaux
    knivesRef.current = knivesRef.current.filter(knife => {
      if (!knife.active) return false
      
      knife.y -= KNIFE_SPEED
      
      if (knife.y < -KNIFE_HEIGHT) {
        return false
      }
      
      drawKnife(ctx, knife)
      return true
    })

    // Déplacer les ennemis
    let shouldMoveDown = false
    const enemies = enemiesRef.current
    
    if (enemies.length > 0) {
      const leftmost = Math.min(...enemies.map(e => e.x))
      const rightmost = Math.max(...enemies.map(e => e.x + e.width))
      
      if (enemyDirectionRef.current === 'right' && rightmost >= CANVAS_WIDTH - 10) {
        enemyDirectionRef.current = 'left'
        shouldMoveDown = true
      } else if (enemyDirectionRef.current === 'left' && leftmost <= 10) {
        enemyDirectionRef.current = 'right'
        shouldMoveDown = true
      }
      
      enemies.forEach(enemy => {
        if (shouldMoveDown) {
          enemy.y += 20
        } else {
          enemy.x += enemyDirectionRef.current === 'right' ? enemy.speed! : -enemy.speed!
        }
      })
    }

    // Vérifier les collisions
    knivesRef.current.forEach(knife => {
      enemies.forEach((enemy, enemyIndex) => {
        if (knife.active && checkCollision(knife, enemy)) {
          knife.active = false
          setScore(prev => prev + enemy.points)
          enemies.splice(enemyIndex, 1)
        }
      })
    })

    // Dessiner les ennemis
    enemies.forEach(enemy => {
      drawEnemy(ctx, enemy)
      
      // Vérifier si un ennemi atteint le chef
      if (enemy.y + enemy.height >= chef.y) {
        setGameState('gameOver')
      }
    })

    // Dessiner le chef
    drawChef(ctx, chef)

    // Vérifier si tous les ennemis sont éliminés
    if (enemies.length === 0) {
      setLevel(prev => prev + 1)
      initEnemies(level + 1)
      setScore(prev => prev + 100 * level) // Bonus de niveau
    }

    // Continuer la boucle
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }
  }, [gameState, level, initEnemies])

  // Démarrer le jeu
  const startGame = useCallback(() => {
    setGameState('playing')
    setScore(0)
    setLevel(1)
    chefRef.current.x = CANVAS_WIDTH / 2 - CHEF_WIDTH / 2
    knivesRef.current = []
    initEnemies(1)
  }, [initEnemies])

  // Gestion des touches
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault()
        keysPressed.current.add(e.key)
      }
      if (e.key === 'Escape' && gameState === 'playing') {
        setGameState('paused')
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameState])

  // Gérer la boucle de jeu
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }
    
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, gameLoop])

  // Mettre à jour le high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [score, highScore])

  // Gérer le game over
  useEffect(() => {
    if (gameState === 'gameOver') {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState])

  // Gestion des contrôles tactiles
  const handleTouchButton = (action: 'left' | 'right' | 'shoot', isPressed: boolean) => {
    if (action === 'left' || action === 'right') {
      const key = action === 'left' ? 'ArrowLeft' : 'ArrowRight'
      if (isPressed) {
        keysPressed.current.add(key)
      } else {
        keysPressed.current.delete(key)
      }
    } else if (action === 'shoot' && isPressed) {
      keysPressed.current.add(' ')
      setTimeout(() => keysPressed.current.delete(' '), 100)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 pb-8">
      {/* Game Boy Container */}
      <div style={{padding: "20px"}} className="relative bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-6 shadow-2xl max-w-md mx-auto border-8 border-purple-700">
        {/* Logo Game Boy Style */}
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold text-purple-900 tracking-wider">
            CHEF BOY
          </h2>
          <div className="text-xs text-purple-800 tracking-widest">ADVANCE</div>
        </div>

        {/* Screen Container */}
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4 mb-6 shadow-inner">
          {/* Power LED */}
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${gameState === 'playing' ? 'bg-red-500 animate-pulse' : 'bg-red-900'}`}></div>
            <span className="text-xs text-slate-400">POWER</span>
          </div>

          {/* Score Display */}
          <div className="flex justify-between mb-2 px-2">
            <div className="text-green-400 text-sm font-mono">
              SCORE: {score.toString().padStart(6, '0')}
            </div>
            <div className="text-green-400 text-sm font-mono">
              LV: {level.toString().padStart(2, '0')}
            </div>
          </div>

          {/* Game Screen */}
          <div className="relative bg-[#9bbc0f] rounded-lg overflow-hidden shadow-lg border-4 border-slate-900">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="w-full h-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
            
            {/* Overlay Menu */}
            {gameState === 'menu' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center text-white space-y-4 p-4">
                  <h3 className="text-2xl font-bold mb-2">🧑‍🍳 Chef Invaders 🔪</h3>
                  <div className="space-y-1 text-sm">
                    <p>D-Pad : Déplacer</p>
                    <p>Bouton A : Tirer</p>
                  </div>
                  <button 
                    onClick={startGame}
                    className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-colors"
                  >
                    START
                  </button>
                </div>
              </div>
            )}

            {/* Overlay Pause */}
            {gameState === 'paused' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center text-white space-y-4">
                  <h3 className="text-2xl font-bold">⏸️ PAUSE</h3>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setGameState('playing')}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold"
                    >
                      REPRENDRE
                    </button>
                    <button 
                      onClick={() => setGameState('menu')}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold"
                    >
                      MENU
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Overlay Game Over */}
            {gameState === 'gameOver' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center text-white space-y-3 p-4">
                  <h3 className="text-2xl font-bold text-red-500">GAME OVER!</h3>
                  <div className="text-lg space-y-1" style={{margin: "10px 0"}}>
                    <p style={{margin: "10px 0"}}>Score: <span className="text-yellow-400 font-bold">{score}</span></p>
                    <p style={{margin: "10px 0"}}>Niveau: <span className="text-green-400 font-bold">{level}</span></p>
                    {score === highScore && score > 0 && (
                      <p className="text-purple-400 font-bold animate-pulse text-sm">🏆 RECORD ! 🏆</p>
                    )}
                  </div>
                  <div className="flex gap-3 justify-center" style={{margin: "10px 0"}}>
                    <button 
                      style={{padding: "10px 20px"}}
                      onClick={startGame}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold"
                    >
                      REJOUER
                    </button>
                    <button 
                      style={{padding: "10px 20px"}}
                      onClick={() => setGameState('menu')}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-bold"
                    >
                      MENU
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* High Score Display */}
          <div className="mt-2 text-center">
            <span className="text-xs text-slate-400 font-mono">
              HI-SCORE: {highScore.toString().padStart(6, '0')}
            </span>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex justify-between items-end px-2">
          {/* D-Pad (Croix directionnelle) */}
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Centre du D-Pad */}
              <div className="w-10 h-10 bg-slate-800 rounded-sm"></div>
              
              {/* Gauche */}
              <button
                onTouchStart={() => handleTouchButton('left', true)}
                onTouchEnd={() => handleTouchButton('left', false)}
                onMouseDown={() => handleTouchButton('left', true)}
                onMouseUp={() => handleTouchButton('left', false)}
                onMouseLeave={() => handleTouchButton('left', false)}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-10 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-l-lg shadow-lg border-2 border-slate-900 flex items-center justify-center text-white font-bold select-none"
                style={{ touchAction: 'none' }}
              >
                ◀
              </button>
              
              {/* Droite */}
              <button
                onTouchStart={() => handleTouchButton('right', true)}
                onTouchEnd={() => handleTouchButton('right', false)}
                onMouseDown={() => handleTouchButton('right', true)}
                onMouseUp={() => handleTouchButton('right', false)}
                onMouseLeave={() => handleTouchButton('right', false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-10 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-r-lg shadow-lg border-2 border-slate-900 flex items-center justify-center text-white font-bold select-none"
                style={{ touchAction: 'none' }}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 items-center">
            {/* Bouton A (Tirer) */}
            <div className="text-center">
              <button
                onTouchStart={() => handleTouchButton('shoot', true)}
                onMouseDown={() => handleTouchButton('shoot', true)}
                className="w-16 h-16 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full shadow-lg border-4 border-red-800 flex items-center justify-center text-white font-bold text-xl select-none transition-all"
                style={{ touchAction: 'none' }}
              >
                A
              </button>
              <span className="text-xs text-purple-900 font-bold block mt-1">FIRE</span>
            </div>
            
            {/* Bouton B (Pause) */}
            <div className="text-center">
              <button
                onClick={() => {
                  if (gameState === 'playing') {
                    setGameState('paused')
                  } else if (gameState === 'paused') {
                    setGameState('playing')
                  }
                }}
                className="w-16 h-16 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 rounded-full shadow-lg border-4 border-yellow-700 flex items-center justify-center text-white font-bold text-xl select-none transition-all"
                style={{ touchAction: 'none' }}
              >
                B
              </button>
              <span className="text-xs text-purple-900 font-bold block mt-1">PAUSE</span>
            </div>
          </div>
        </div>

        {/* Start/Select Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => gameState === 'menu' && startGame()}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded-full text-xs text-white font-bold shadow-md transform rotate-[-10deg] select-none"
            style={{ touchAction: 'none' }}
          >
            START
          </button>
          <button
            onClick={() => setGameState('menu')}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded-full text-xs text-white font-bold shadow-md transform rotate-[-10deg] select-none"
            style={{ touchAction: 'none' }}
          >
            SELECT
          </button>
        </div>

        {/* Speakers */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-1">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-1 h-1 rounded-full bg-purple-700"></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Instructions mobiles */}
      <div style={{padding: "20px", margin: "5px 0"}} className="bg-slate-800 p-4 rounded-lg border-2 border-slate-600 text-white max-w-md text-sm">
        <h3 className="text-lg font-bold mb-2">📖 Instructions :</h3>
        <ul className="space-y-1 text-xs">
          <li>• Utilisez le D-Pad pour déplacer le chef</li>
          <li>• Bouton A pour lancer des couteaux</li>
          <li>• Bouton B pour mettre en pause</li>
          <li>• Éliminez tous les ingrédients !</li>
          <li>• La difficulté augmente à chaque niveau</li>
        </ul>
      </div>
    </div>
  )
}

