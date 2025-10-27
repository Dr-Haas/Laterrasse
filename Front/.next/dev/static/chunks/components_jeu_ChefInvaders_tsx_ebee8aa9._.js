(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/jeu/ChefInvaders.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChefInvaders",
    ()=>ChefInvaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Dimensions adaptées pour mobile/Game Boy
const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 480;
const CHEF_WIDTH = 40;
const CHEF_HEIGHT = 40;
const CHEF_SPEED = 6;
const KNIFE_WIDTH = 6;
const KNIFE_HEIGHT = 16;
const KNIFE_SPEED = 9;
const ENEMY_WIDTH = 35;
const ENEMY_HEIGHT = 35;
const ENEMY_SPEED = 1;
const ENEMY_ROWS = 3;
const ENEMY_COLS = 6;
const FOOD_EMOJIS = [
    '🍅',
    '🥕',
    '🥒',
    '🧅',
    '🥔',
    '🌶️',
    '🥦',
    '🍆'
];
function ChefInvaders() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('menu');
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [highScore, setHighScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // États pour la soumission du score
    const [showScoreForm, setShowScoreForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playerName, setPlayerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [playerEmail, setPlayerEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const gameLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const keysPressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const chefRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: CANVAS_WIDTH / 2 - CHEF_WIDTH / 2,
        y: CANVAS_HEIGHT - CHEF_HEIGHT - 20,
        width: CHEF_WIDTH,
        height: CHEF_HEIGHT
    });
    const knivesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const enemiesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const enemyDirectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('right');
    const lastShotTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Initialiser les ennemis
    const initEnemies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChefInvaders.useCallback[initEnemies]": (currentLevel)=>{
            const enemies = [];
            const speedMultiplier = 1 + (currentLevel - 1) * 0.15;
            const spacing = CANVAS_WIDTH / (ENEMY_COLS + 1);
            for(let row = 0; row < ENEMY_ROWS; row++){
                for(let col = 0; col < ENEMY_COLS; col++){
                    enemies.push({
                        x: spacing * (col + 0.5),
                        y: 40 + row * 50,
                        width: ENEMY_WIDTH,
                        height: ENEMY_HEIGHT,
                        speed: ENEMY_SPEED * speedMultiplier,
                        emoji: FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)],
                        points: 10 * (row + 1)
                    });
                }
            }
            enemiesRef.current = enemies;
            enemyDirectionRef.current = 'right';
        }
    }["ChefInvaders.useCallback[initEnemies]"], []);
    // Détecter les collisions
    const checkCollision = (obj1, obj2)=>{
        return obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y;
    };
    // Dessiner le chef
    const drawChef = (ctx, chef)=>{
        // Corps du chef (toque)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.ellipse(chef.x + chef.width / 2, chef.y + 15, 20, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        // Haut de la toque
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(chef.x + chef.width / 2 - 15, chef.y, 30, 15);
        // Visage
        ctx.fillStyle = '#ffdbac';
        ctx.beginPath();
        ctx.arc(chef.x + chef.width / 2, chef.y + 35, 18, 0, Math.PI * 2);
        ctx.fill();
        // Yeux
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(chef.x + chef.width / 2 - 7, chef.y + 32, 2, 0, Math.PI * 2);
        ctx.arc(chef.x + chef.width / 2 + 7, chef.y + 32, 2, 0, Math.PI * 2);
        ctx.fill();
        // Sourire
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(chef.x + chef.width / 2, chef.y + 35, 8, 0.2, Math.PI - 0.2);
        ctx.stroke();
        // Corps (veste de chef)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(chef.x + chef.width / 2 - 18, chef.y + 45, 36, 15);
    };
    // Dessiner un couteau
    const drawKnife = (ctx, knife)=>{
        // Lame
        ctx.fillStyle = '#c0c0c0';
        ctx.fillRect(knife.x, knife.y, knife.width, knife.height * 0.7);
        // Manche
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(knife.x - 1, knife.y + knife.height * 0.7, knife.width + 2, knife.height * 0.3);
        // Brillance sur la lame
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(knife.x + 2, knife.y + 2, 2, knife.height * 0.5);
    };
    // Dessiner un ennemi
    const drawEnemy = (ctx, enemy)=>{
        ctx.font = `${enemy.width}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(enemy.emoji, enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
    };
    // Boucle de jeu principale
    const gameLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChefInvaders.useCallback[gameLoop]": (_timestamp)=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Effacer le canvas
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            // Déplacer le chef
            const chef = chefRef.current;
            if (keysPressed.current.has('ArrowLeft') && chef.x > 0) {
                chef.x -= CHEF_SPEED;
            }
            if (keysPressed.current.has('ArrowRight') && chef.x < CANVAS_WIDTH - CHEF_WIDTH) {
                chef.x += CHEF_SPEED;
            }
            // Tirer des couteaux
            const now = Date.now();
            if (keysPressed.current.has(' ') && now - lastShotTimeRef.current > 250) {
                knivesRef.current.push({
                    x: chef.x + CHEF_WIDTH / 2 - KNIFE_WIDTH / 2,
                    y: chef.y,
                    width: KNIFE_WIDTH,
                    height: KNIFE_HEIGHT,
                    active: true
                });
                lastShotTimeRef.current = now;
            }
            // Mettre à jour et dessiner les couteaux
            knivesRef.current = knivesRef.current.filter({
                "ChefInvaders.useCallback[gameLoop]": (knife)=>{
                    if (!knife.active) return false;
                    knife.y -= KNIFE_SPEED;
                    if (knife.y < -KNIFE_HEIGHT) {
                        return false;
                    }
                    drawKnife(ctx, knife);
                    return true;
                }
            }["ChefInvaders.useCallback[gameLoop]"]);
            // Déplacer les ennemis
            let shouldMoveDown = false;
            const enemies = enemiesRef.current;
            if (enemies.length > 0) {
                const leftmost = Math.min(...enemies.map({
                    "ChefInvaders.useCallback[gameLoop].leftmost": (e)=>e.x
                }["ChefInvaders.useCallback[gameLoop].leftmost"]));
                const rightmost = Math.max(...enemies.map({
                    "ChefInvaders.useCallback[gameLoop].rightmost": (e)=>e.x + e.width
                }["ChefInvaders.useCallback[gameLoop].rightmost"]));
                if (enemyDirectionRef.current === 'right' && rightmost >= CANVAS_WIDTH - 10) {
                    enemyDirectionRef.current = 'left';
                    shouldMoveDown = true;
                } else if (enemyDirectionRef.current === 'left' && leftmost <= 10) {
                    enemyDirectionRef.current = 'right';
                    shouldMoveDown = true;
                }
                enemies.forEach({
                    "ChefInvaders.useCallback[gameLoop]": (enemy)=>{
                        if (shouldMoveDown) {
                            enemy.y += 20;
                        } else {
                            enemy.x += enemyDirectionRef.current === 'right' ? enemy.speed : -enemy.speed;
                        }
                    }
                }["ChefInvaders.useCallback[gameLoop]"]);
            }
            // Vérifier les collisions
            knivesRef.current.forEach({
                "ChefInvaders.useCallback[gameLoop]": (knife)=>{
                    enemies.forEach({
                        "ChefInvaders.useCallback[gameLoop]": (enemy, enemyIndex)=>{
                            if (knife.active && checkCollision(knife, enemy)) {
                                knife.active = false;
                                setScore({
                                    "ChefInvaders.useCallback[gameLoop]": (prev)=>prev + enemy.points
                                }["ChefInvaders.useCallback[gameLoop]"]);
                                enemies.splice(enemyIndex, 1);
                            }
                        }
                    }["ChefInvaders.useCallback[gameLoop]"]);
                }
            }["ChefInvaders.useCallback[gameLoop]"]);
            // Dessiner les ennemis
            enemies.forEach({
                "ChefInvaders.useCallback[gameLoop]": (enemy)=>{
                    drawEnemy(ctx, enemy);
                    // Vérifier si un ennemi atteint le chef
                    if (enemy.y + enemy.height >= chef.y) {
                        setGameState('gameOver');
                    }
                }
            }["ChefInvaders.useCallback[gameLoop]"]);
            // Dessiner le chef
            drawChef(ctx, chef);
            // Vérifier si tous les ennemis sont éliminés
            if (enemies.length === 0) {
                setLevel({
                    "ChefInvaders.useCallback[gameLoop]": (prev)=>prev + 1
                }["ChefInvaders.useCallback[gameLoop]"]);
                initEnemies(level + 1);
                setScore({
                    "ChefInvaders.useCallback[gameLoop]": (prev)=>prev + 100 * level
                }["ChefInvaders.useCallback[gameLoop]"]); // Bonus de niveau
            }
            // Continuer la boucle
            if (gameState === 'playing') {
                gameLoopRef.current = requestAnimationFrame(gameLoop);
            }
        }
    }["ChefInvaders.useCallback[gameLoop]"], [
        gameState,
        level,
        initEnemies
    ]);
    // Démarrer le jeu
    const startGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChefInvaders.useCallback[startGame]": ()=>{
            setGameState('playing');
            setScore(0);
            setLevel(1);
            chefRef.current.x = CANVAS_WIDTH / 2 - CHEF_WIDTH / 2;
            knivesRef.current = [];
            initEnemies(1);
        }
    }["ChefInvaders.useCallback[startGame]"], [
        initEnemies
    ]);
    // Gestion des touches
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChefInvaders.useEffect": ()=>{
            const handleKeyDown = {
                "ChefInvaders.useEffect.handleKeyDown": (e)=>{
                    if ([
                        'ArrowLeft',
                        'ArrowRight',
                        ' '
                    ].includes(e.key)) {
                        e.preventDefault();
                        keysPressed.current.add(e.key);
                    }
                    if (e.key === 'Escape' && gameState === 'playing') {
                        setGameState('paused');
                    }
                }
            }["ChefInvaders.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "ChefInvaders.useEffect.handleKeyUp": (e)=>{
                    keysPressed.current.delete(e.key);
                }
            }["ChefInvaders.useEffect.handleKeyUp"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return ({
                "ChefInvaders.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                }
            })["ChefInvaders.useEffect"];
        }
    }["ChefInvaders.useEffect"], [
        gameState
    ]);
    // Gérer la boucle de jeu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChefInvaders.useEffect": ()=>{
            if (gameState === 'playing') {
                gameLoopRef.current = requestAnimationFrame(gameLoop);
            }
            return ({
                "ChefInvaders.useEffect": ()=>{
                    if (gameLoopRef.current) {
                        cancelAnimationFrame(gameLoopRef.current);
                    }
                }
            })["ChefInvaders.useEffect"];
        }
    }["ChefInvaders.useEffect"], [
        gameState,
        gameLoop
    ]);
    // Mettre à jour le high score
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChefInvaders.useEffect": ()=>{
            if (score > highScore) {
                setHighScore(score);
            }
        }
    }["ChefInvaders.useEffect"], [
        score,
        highScore
    ]);
    // Gérer le game over
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChefInvaders.useEffect": ()=>{
            if (gameState === 'gameOver') {
                if (gameLoopRef.current) {
                    cancelAnimationFrame(gameLoopRef.current);
                }
            }
        }
    }["ChefInvaders.useEffect"], [
        gameState
    ]);
    // Fonction pour soumettre le score
    const submitScore = async ()=>{
        if (!playerName.trim()) {
            setSubmitMessage('❌ Veuillez entrer un nom');
            return;
        }
        if (!playerEmail.trim() || !playerEmail.includes('@')) {
            setSubmitMessage('❌ Veuillez entrer un email valide');
            return;
        }
        setIsSubmitting(true);
        setSubmitMessage('');
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/game-scores`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    playerName: playerName.trim(),
                    playerEmail: playerEmail.trim(),
                    score: score,
                    difficulty: level >= 5 ? 'hard' : level >= 3 ? 'medium' : 'easy',
                    gameDuration: Math.floor(Date.now() / 1000) // Timestamp approximatif
                })
            });
            if (response.ok) {
                setSubmitMessage('✅ Score enregistré avec succès !');
                setPlayerName('');
                setPlayerEmail('');
                setTimeout(()=>{
                    setShowScoreForm(false);
                    setSubmitMessage('');
                }, 2000);
            } else {
                setSubmitMessage('❌ Erreur lors de l\'enregistrement');
            }
        } catch (error) {
            setSubmitMessage('❌ Erreur de connexion au serveur');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Gestion des contrôles tactiles
    const handleTouchButton = (action, isPressed)=>{
        if (action === 'left' || action === 'right') {
            const key = action === 'left' ? 'ArrowLeft' : 'ArrowRight';
            if (isPressed) {
                keysPressed.current.add(key);
            } else {
                keysPressed.current.delete(key);
            }
        } else if (action === 'shoot' && isPressed) {
            keysPressed.current.add(' ');
            setTimeout(()=>keysPressed.current.delete(' '), 100);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20pxgit a"
                },
                className: "relative bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-6 shadow-2xl max-w-md mx-auto border-8 border-purple-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-purple-900 tracking-wider",
                                children: "CHEF BOY"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-purple-800 tracking-widest",
                                children: "ADVANCE"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4 mb-6 shadow-inner",
                        style: {
                            padding: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-2 h-2 rounded-full ${gameState === 'playing' ? 'bg-red-500 animate-pulse' : 'bg-red-900'}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: "POWER"
                                    }, void 0, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mb-2 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 text-sm font-mono",
                                        children: [
                                            "SCORE: ",
                                            score.toString().padStart(6, '0')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-green-400 text-sm font-mono",
                                        children: [
                                            "LV: ",
                                            level.toString().padStart(2, '0')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-[#9bbc0f] rounded-lg overflow-hidden shadow-lg border-4 border-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        width: CANVAS_WIDTH,
                                        height: CANVAS_HEIGHT,
                                        className: "w-full h-auto",
                                        style: {
                                            imageRendering: 'crisp-edges'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    gameState === 'menu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-white space-y-4 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: "🧑‍🍳 Chef Invaders 🔪"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "10px 0"
                                                            },
                                                            children: "D-Pad : Déplacer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Bouton A : Tirer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        padding: "5px 10px",
                                                        margin: "10px 0"
                                                    },
                                                    onClick: startGame,
                                                    className: "mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-colors",
                                                    children: "START"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this),
                                    gameState === 'paused' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-white space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold",
                                                    children: "⏸️ PAUSE"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setGameState('playing'),
                                                            className: "px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold",
                                                            children: "REPRENDRE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setGameState('menu'),
                                                            className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold",
                                                            children: "MENU"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this),
                                    gameState === 'gameOver' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/90 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-white space-y-3 p-4 max-w-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-red-500",
                                                    children: "GAME OVER!"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg space-y-1",
                                                    style: {
                                                        margin: "10px 0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "10px 0"
                                                            },
                                                            children: [
                                                                "Score: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-yellow-400 font-bold",
                                                                    children: score
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 58
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                margin: "10px 0"
                                                            },
                                                            children: [
                                                                "Niveau: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-400 font-bold",
                                                                    children: level
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 59
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 21
                                                        }, this),
                                                        score === highScore && score > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple-400 font-bold animate-pulse text-sm",
                                                            children: "🏆 RECORD ! 🏆"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 19
                                                }, this),
                                                !showScoreForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    style: {
                                                        margin: "15px 0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowScoreForm(true),
                                                            className: "px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-sm w-full",
                                                            children: "💾 Enregistrer mon score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-400",
                                                            children: "Entrez dans le tableau des meilleurs scores !"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 p-4 rounded-lg space-y-3",
                                                    style: {
                                                        margin: "15px 0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-bold text-green-400",
                                                            children: "📝 Enregistrer le score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-300 mb-1",
                                                                            children: "Nom :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: playerName,
                                                                            onChange: (e)=>setPlayerName(e.target.value),
                                                                            placeholder: "Votre nom",
                                                                            maxLength: 50,
                                                                            className: "w-full px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-green-500 focus:outline-none text-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                            lineNumber: 515,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                    lineNumber: 513,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-300 mb-1",
                                                                            children: "Email :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            value: playerEmail,
                                                                            onChange: (e)=>setPlayerEmail(e.target.value),
                                                                            placeholder: "votre@email.com",
                                                                            className: "w-full px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-green-500 focus:outline-none text-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 23
                                                        }, this),
                                                        submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-sm ${submitMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`,
                                                            children: submitMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 538,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: submitScore,
                                                                    disabled: isSubmitting,
                                                                    className: `flex-1 px-4 py-2 rounded-lg font-bold text-sm ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white`,
                                                                    children: isSubmitting ? '⏳ Envoi...' : '✅ Valider'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setShowScoreForm(false);
                                                                        setSubmitMessage('');
                                                                    },
                                                                    disabled: isSubmitting,
                                                                    className: "px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold text-sm",
                                                                    children: "✖️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 justify-center",
                                                    style: {
                                                        margin: "10px 0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            style: {
                                                                padding: "10px 20px"
                                                            },
                                                            onClick: startGame,
                                                            className: "px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold",
                                                            children: "REJOUER"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            style: {
                                                                padding: "10px 20px"
                                                            },
                                                            onClick: ()=>setGameState('menu'),
                                                            className: "px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-bold",
                                                            children: "MENU"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400 font-mono",
                                    children: [
                                        "HI-SCORE: ",
                                        highScore.toString().padStart(6, '0')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 591,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-32 h-32",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-slate-800 rounded-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                            lineNumber: 604,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onTouchStart: ()=>handleTouchButton('left', true),
                                            onTouchEnd: ()=>handleTouchButton('left', false),
                                            onMouseDown: ()=>handleTouchButton('left', true),
                                            onMouseUp: ()=>handleTouchButton('left', false),
                                            onMouseLeave: ()=>handleTouchButton('left', false),
                                            className: "absolute left-0 top-1/2 -translate-y-1/2 w-12 h-10 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-l-lg shadow-lg border-2 border-slate-900 flex items-center justify-center text-white font-bold select-none",
                                            style: {
                                                touchAction: 'none'
                                            },
                                            children: "◀"
                                        }, void 0, false, {
                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                            lineNumber: 607,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onTouchStart: ()=>handleTouchButton('right', true),
                                            onTouchEnd: ()=>handleTouchButton('right', false),
                                            onMouseDown: ()=>handleTouchButton('right', true),
                                            onMouseUp: ()=>handleTouchButton('right', false),
                                            onMouseLeave: ()=>handleTouchButton('right', false),
                                            className: "absolute right-0 top-1/2 -translate-y-1/2 w-12 h-10 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-r-lg shadow-lg border-2 border-slate-900 flex items-center justify-center text-white font-bold select-none",
                                            style: {
                                                touchAction: 'none'
                                            },
                                            children: "▶"
                                        }, void 0, false, {
                                            fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                            lineNumber: 620,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 601,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onTouchStart: ()=>handleTouchButton('shoot', true),
                                                onMouseDown: ()=>handleTouchButton('shoot', true),
                                                className: "w-16 h-16 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full shadow-lg border-4 border-red-800 flex items-center justify-center text-white font-bold text-xl select-none transition-all",
                                                style: {
                                                    touchAction: 'none'
                                                },
                                                children: "A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-purple-900 font-bold block mt-1",
                                                children: "FIRE"
                                            }, void 0, false, {
                                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                lineNumber: 646,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (gameState === 'playing') {
                                                        setGameState('paused');
                                                    } else if (gameState === 'paused') {
                                                        setGameState('playing');
                                                    }
                                                },
                                                className: "w-16 h-16 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 rounded-full shadow-lg border-4 border-yellow-700 flex items-center justify-center text-white font-bold text-xl select-none transition-all",
                                                style: {
                                                    touchAction: 'none'
                                                },
                                                children: "B"
                                            }, void 0, false, {
                                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                lineNumber: 651,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-purple-900 font-bold block mt-1",
                                                children: "PAUSE"
                                            }, void 0, false, {
                                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 599,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4 mt-6",
                        style: {
                            margin: "10px 0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>gameState === 'menu' && startGame(),
                                className: "px-6 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded-full text-xs text-white font-bold shadow-md transform rotate-[-10deg] select-none",
                                style: {
                                    touchAction: 'none',
                                    padding: "2px 5px"
                                },
                                children: "START"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setGameState('menu'),
                                className: "px-6 py-2 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded-full text-xs text-white font-bold shadow-md transform rotate-[-10deg] select-none",
                                style: {
                                    touchAction: 'none',
                                    padding: "2px 5px"
                                },
                                children: "SELECT"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 flex flex-col gap-1",
                        children: [
                            ...Array(6)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    ...Array(3)
                                ].map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 rounded-full bg-purple-700"
                                    }, j, false, {
                                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                        lineNumber: 692,
                                        columnNumber: 17
                                    }, this))
                            }, i, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 688,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20px",
                    margin: "5px 0"
                },
                className: "bg-slate-800 p-4 rounded-lg border-2 border-slate-600 text-white max-w-md text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-2",
                        children: "📖 Instructions :"
                    }, void 0, false, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 701,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Utilisez le D-Pad pour déplacer le chef"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Bouton A pour lancer des couteaux"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Bouton B pour mettre en pause"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Éliminez tous les ingrédients !"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• La difficulté augmente à chaque niveau"
                            }, void 0, false, {
                                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                                lineNumber: 707,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/jeu/ChefInvaders.tsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/jeu/ChefInvaders.tsx",
                lineNumber: 700,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/jeu/ChefInvaders.tsx",
        lineNumber: 402,
        columnNumber: 5
    }, this);
}
_s(ChefInvaders, "n6okd4Y2tQDAlpyTuOC3+9tI0cc=");
_c = ChefInvaders;
var _c;
__turbopack_context__.k.register(_c, "ChefInvaders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_jeu_ChefInvaders_tsx_ebee8aa9._.js.map