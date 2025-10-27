module.exports = [
"[project]/components/carte/ImagePlaceholder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImagePlaceholder",
    ()=>ImagePlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ImagePlaceholder({ name, className = "" }) {
    // Extrait l'emoji basé sur le type de plat
    const getEmoji = (name)=>{
        const lower = name.toLowerCase();
        if (lower.includes("kebab") || lower.includes("galette") || lower.includes("pain")) return "🥙";
        if (lower.includes("burger")) return "🍔";
        if (lower.includes("chicken")) return "🍗";
        if (lower.includes("tacos")) return "🌮";
        if (lower.includes("assiette")) return "🍽️";
        if (lower.includes("salade")) return "🥗";
        if (lower.includes("box")) return "📦";
        if (lower.includes("frites")) return "🍟";
        if (lower.includes("nuggets")) return "🍗";
        if (lower.includes("tenders")) return "🍤";
        if (lower.includes("wings")) return "🔥";
        if (lower.includes("viande")) return "🥩";
        if (lower.includes("boisson") || lower.includes("canette")) return "🥤";
        if (lower.includes("bouteille")) return "🧃";
        if (lower.includes("energy")) return "⚡";
        if (lower.includes("café") || lower.includes("cafe")) return "☕";
        if (lower.includes("étudiant")) return "🎓";
        if (lower.includes("enfant")) return "👶";
        return "🍴";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center bg-gradient-to-br from-terrasse-yellow/30 to-terrasse-red/30 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-8xl md:text-9xl",
                    children: getEmoji(name)
                }, void 0, false, {
                    fileName: "[project]/components/carte/ImagePlaceholder.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/60 text-sm font-bebas tracking-wider",
                    children: "Photo à venir"
                }, void 0, false, {
                    fileName: "[project]/components/carte/ImagePlaceholder.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/carte/ImagePlaceholder.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/carte/ImagePlaceholder.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/carte/MenuItemCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItemCard",
    ()=>MenuItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carte$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/carte/ImagePlaceholder.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MenuItemCard({ item, index }) {
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay: index * 0.1
        },
        whileHover: {
            scale: 1.03,
            rotate: 0.5
        },
        className: "bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(230,50,45,0.5)] transition-all duration-300 border-4 border-terrasse-black",
        children: [
            item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 md:h-56 overflow-hidden bg-terrasse-black",
                children: [
                    imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carte$2f$ImagePlaceholder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImagePlaceholder"], {
                        name: item.name,
                        className: "absolute inset-0"
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: item.image,
                                alt: item.name,
                                fill: true,
                                className: "object-cover hover:scale-110 transition-transform duration-500",
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                onError: ()=>setImageError(true)
                            }, void 0, false, {
                                fileName: "[project]/components/carte/MenuItemCard.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-terrasse-black/60 via-transparent to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/carte/MenuItemCard.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 right-3 bg-terrasse-red text-white font-bebas text-lg px-4 py-2 rounded-full shadow-lg z-10 backdrop-blur-sm",
                        children: item.badge
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/carte/MenuItemCard.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 md:p-8",
                style: {
                    padding: "20px 10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bebas text-3xl md:text-4xl text-terrasse-black leading-tight mb-3",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-terrasse-black/70 text-base md:text-lg mb-5 leading-relaxed",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: item.prices.map((priceOption, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                flex items-center justify-between p-3 md:p-4 rounded-xl
                ${idx % 2 === 0 ? "bg-terrasse-yellow/20" : "bg-terrasse-blue/20"}
                border-2 border-terrasse-black/10
              `,
                                style: {
                                    padding: "5px 5px",
                                    margin: "5px 5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bebas text-lg md:text-xl text-terrasse-black",
                                        children: priceOption.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bebas text-2xl md:text-3xl text-terrasse-red",
                                        children: [
                                            priceOption.price,
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/components/carte/MenuItemCard.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuItemCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/carte/MenuItemCard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/carte/MenuItemCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/menu-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MENU_DATA",
    ()=>MENU_DATA
]);
const MENU_DATA = {
    sandwiches: [
        {
            name: "Pain Rond",
            description: "Le classique kebab en pain moelleux",
            image: "/menu/kebab-pain-rond.jpg",
            badge: "🔥 TOP",
            prices: [
                {
                    label: "Seul",
                    price: 6
                },
                {
                    label: "+ Frites",
                    price: 7
                },
                {
                    label: "Menu complet",
                    price: 8
                }
            ]
        },
        {
            name: "Galette",
            description: "Roulé dans une galette croustillante",
            image: "/menu/kebab-galette.jpg",
            prices: [
                {
                    label: "Seul",
                    price: 6
                },
                {
                    label: "+ Frites",
                    price: 7
                },
                {
                    label: "Menu complet",
                    price: 8
                }
            ]
        },
        {
            name: "Baguette",
            description: "Version française du kebab",
            image: "/menu/kebab-baguette.jpg",
            prices: [
                {
                    label: "Seul",
                    price: 6
                },
                {
                    label: "+ Frites",
                    price: 7
                },
                {
                    label: "Menu complet",
                    price: 8
                }
            ]
        },
        {
            name: "Tacos",
            description: "Tacos français, grillé et généreux",
            image: "/menu/tacos.jpg",
            badge: "😋 GOURMAND",
            prices: [
                {
                    label: "Seul",
                    price: 7
                },
                {
                    label: "+ Frites",
                    price: 8
                },
                {
                    label: "Menu complet",
                    price: 9
                }
            ]
        }
    ],
    burgers: [
        {
            name: "Cheeseburger",
            description: "Burger maison avec cheddar fondant",
            image: "/menu/cheeseburger.jpg",
            prices: [
                {
                    label: "Simple",
                    price: 8
                },
                {
                    label: "Menu simple",
                    price: 10
                },
                {
                    label: "Double",
                    price: 10
                },
                {
                    label: "Menu double",
                    price: 12
                }
            ]
        },
        {
            name: "Cheese Chicken",
            description: "Tendre poulet pané et fromage",
            image: "/menu/cheese-chicken.jpg",
            prices: [
                {
                    label: "Simple",
                    price: 8
                },
                {
                    label: "Menu simple",
                    price: 10
                },
                {
                    label: "Double",
                    price: 10
                },
                {
                    label: "Menu double",
                    price: 12
                }
            ]
        }
    ],
    assiettes: [
        {
            name: "Assiette 1 Viande",
            description: "Viande au choix + frites + salade",
            image: "/menu/assiette-1-viande.jpg",
            prices: [
                {
                    label: "L'assiette",
                    price: 12
                }
            ]
        },
        {
            name: "Assiette 2-3 Viandes",
            description: "Mixez vos viandes préférées",
            image: "/menu/assiette-2-3-viandes.jpg",
            badge: "💪 COPIEUX",
            prices: [
                {
                    label: "L'assiette",
                    price: 15
                }
            ]
        },
        {
            name: "Salade",
            description: "Tenders ou Falafel sur lit de salade",
            image: "/menu/salade.jpg",
            prices: [
                {
                    label: "Seule",
                    price: 7
                },
                {
                    label: "Menu",
                    price: 8
                }
            ]
        }
    ],
    box: [
        {
            name: "Box Kebab Poulet",
            description: "Kebab poulet + frites avec cheddar fondu",
            image: "/menu/box-kebab-poulet.jpg",
            badge: "🧀 CHEDDAR",
            prices: [
                {
                    label: "Seule",
                    price: 8
                },
                {
                    label: "Menu",
                    price: 10
                }
            ]
        },
        {
            name: "Box 15 Pièces",
            description: "4 tenders + 6 nuggets + 5 wings",
            image: "/menu/box-15-pieces.jpg",
            prices: [
                {
                    label: "Box seule",
                    price: 15
                },
                {
                    label: "Menu (+2 frites +2 boissons)",
                    price: 20
                }
            ]
        },
        {
            name: "Box 20 Pièces",
            description: "6 tenders + 7 nuggets + 7 wings",
            image: "/menu/box-20-pieces.jpg",
            badge: "👨‍👩‍👧‍👦 PARTAGE",
            prices: [
                {
                    label: "Box seule",
                    price: 17
                },
                {
                    label: "Menu (+3 frites +3 boissons)",
                    price: 25
                }
            ]
        },
        {
            name: "Menu Étudiant",
            description: "Sandwich + frites + boisson",
            image: "/menu/menu-etudiant.jpg",
            badge: "💰 BON PLAN",
            prices: [
                {
                    label: "Le menu",
                    price: 7.5
                }
            ]
        },
        {
            name: "Menu Enfant",
            description: "4 nuggets ou petit burger + frites + Capri-Sun",
            image: "/menu/menu-enfant.jpg",
            prices: [
                {
                    label: "Le menu",
                    price: 7
                }
            ]
        }
    ],
    accompagnements: [
        {
            name: "Frites",
            description: "Croustillantes et dorées",
            image: "/menu/frites.jpg",
            prices: [
                {
                    label: "Petite",
                    price: 2
                },
                {
                    label: "Moyenne",
                    price: 3
                },
                {
                    label: "Grande",
                    price: 4
                }
            ]
        },
        {
            name: "Nuggets",
            description: "Poulet pané croustillant",
            image: "/menu/nuggets.jpg",
            prices: [
                {
                    label: "5 pièces",
                    price: 4
                },
                {
                    label: "7 pièces",
                    price: 5
                },
                {
                    label: "10 pièces",
                    price: 8
                }
            ]
        },
        {
            name: "Tenders",
            description: "Filets de poulet panés",
            image: "/menu/tenders.jpg",
            prices: [
                {
                    label: "5 pièces",
                    price: 6
                },
                {
                    label: "7 pièces",
                    price: 9
                },
                {
                    label: "10 pièces",
                    price: 12
                }
            ]
        },
        {
            name: "Wings",
            description: "Ailes de poulet épicées",
            image: "/menu/wings.jpg",
            prices: [
                {
                    label: "5 pièces",
                    price: 4
                },
                {
                    label: "7 pièces",
                    price: 5
                },
                {
                    label: "10 pièces",
                    price: 8
                }
            ]
        },
        {
            name: "Supplément Viande",
            description: "Viande au choix en extra",
            image: "/menu/supplement-viande.jpg",
            prices: [
                {
                    label: "Petite",
                    price: 4
                },
                {
                    label: "Moyenne",
                    price: 6
                },
                {
                    label: "Grande",
                    price: 9
                }
            ]
        }
    ],
    boissons: [
        {
            name: "Canettes",
            description: "Coca, Fanta, Sprite, Oasis...",
            image: "/menu/canettes.jpg",
            prices: [
                {
                    label: "La canette",
                    price: 2
                }
            ]
        },
        {
            name: "Bouteilles",
            description: "Eau, jus, Ice Tea...",
            image: "/menu/bouteilles.jpg",
            prices: [
                {
                    label: "La bouteille",
                    price: 2
                }
            ]
        },
        {
            name: "Energy Drinks",
            description: "Monster, Red Bull",
            image: "/menu/energy-drinks.jpg",
            prices: [
                {
                    label: "La canette",
                    price: 3
                }
            ]
        },
        {
            name: "Café",
            description: "Expresso ou allongé",
            image: "/menu/cafe.jpg",
            prices: [
                {
                    label: "La tasse",
                    price: 1
                }
            ]
        }
    ]
};
}),
"[project]/components/carte/MenuCategories.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuCategories",
    ()=>MenuCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carte$2f$MenuItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/carte/MenuItemCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/menu-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function MenuCategories() {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sandwiches");
    const categories = [
        {
            id: "sandwiches",
            label: "Sandwiches",
            icon: "🌯",
            color: "bg-terrasse-red"
        },
        {
            id: "burgers",
            label: "Burgers",
            icon: "🍔",
            color: "bg-terrasse-yellow"
        },
        {
            id: "assiettes",
            label: "Assiettes",
            icon: "🍽️",
            color: "bg-terrasse-red"
        },
        {
            id: "box",
            label: "Box",
            icon: "📦",
            color: "bg-terrasse-yellow"
        },
        {
            id: "accompagnements",
            label: "Accompagnements",
            icon: "🍟",
            color: "bg-terrasse-red"
        },
        {
            id: "boissons",
            label: "Boissons",
            icon: "🥤",
            color: "bg-terrasse-yellow"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            padding: "60px 20px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px]",
            style: {
                padding: "10px 10px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 md:mb-14",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto pb-4 -mx-4 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 md:gap-4 min-w-min md:justify-center",
                            style: {
                                padding: "20px 10px"
                            },
                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>setActiveCategory(category.id),
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: `
                    ${category.color}
                    ${activeCategory === category.id ? "ring-4 ring-white scale-105" : "opacity-80"}
                    flex-shrink-0 px-6 py-4 md:px-8 md:py-5 rounded-2xl
                    transition-all duration-300 shadow-xl
                    hover:scale-105 hover:opacity-100
                  `,
                                    style: {
                                        padding: "5px 10px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-2 min-w-[100px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl md:text-4xl",
                                                children: category.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/carte/MenuCategories.tsx",
                                                lineNumber: 43,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bebas text-lg md:text-xl text-white whitespace-nowrap",
                                                children: category.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/carte/MenuCategories.tsx",
                                                lineNumber: 44,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/carte/MenuCategories.tsx",
                                        lineNumber: 42,
                                        columnNumber: 19
                                    }, this)
                                }, category.id, false, {
                                    fileName: "[project]/components/carte/MenuCategories.tsx",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/carte/MenuCategories.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuCategories.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/carte/MenuCategories.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            padding: "20px 10px"
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1600px]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MENU_DATA"][activeCategory]?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$carte$2f$MenuItemCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemCard"], {
                                    item: item,
                                    index: index
                                }, `${item.name}-${index}`, false, {
                                    fileName: "[project]/components/carte/MenuCategories.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/carte/MenuCategories.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, activeCategory, false, {
                        fileName: "[project]/components/carte/MenuCategories.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/carte/MenuCategories.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                    style: {
                        padding: "20px 10px"
                    },
                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RESTAURANT_INFO"].contact.phone.replace(/\s/g, '')}`,
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.5
                    },
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    className: "fixed bottom-8 right-8 z-40 bg-terrasse-red text-white font-bebas text-2xl md:text-3xl px-10 py-5 rounded-2xl shadow-2xl transition-transform flex items-center gap-3 cursor-pointer",
                    children: "📞 Commander"
                }, void 0, false, {
                    fileName: "[project]/components/carte/MenuCategories.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        padding: "20px 10px 0"
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "mt-16 md:mt-20 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bebas text-3xl md:text-4xl text-terrasse-yellow mb-4",
                                            style: {
                                                margin: "20px 0"
                                            },
                                            children: "🥩 Nos Viandes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/carte/MenuCategories.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: [
                                                "Kebab",
                                                "Poulet",
                                                "Steak",
                                                "Kefta",
                                                "Cordon",
                                                "Falafel"
                                            ].map((viande)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        padding: "5px 15px"
                                                    },
                                                    className: "bg-terrasse-red px-4 py-2 rounded-full font-bebas text-lg",
                                                    children: viande
                                                }, viande, false, {
                                                    fileName: "[project]/components/carte/MenuCategories.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/carte/MenuCategories.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/carte/MenuCategories.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bebas text-3xl md:text-4xl text-terrasse-yellow mb-4",
                                            style: {
                                                margin: "20px 0"
                                            },
                                            children: "🧂 Nos Sauces"
                                        }, void 0, false, {
                                            fileName: "[project]/components/carte/MenuCategories.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: [
                                                "Mayo",
                                                "Ketchup",
                                                "Blanche",
                                                "Harissa",
                                                "Algérienne",
                                                "Andalouse",
                                                "Biggy",
                                                "Samouraï"
                                            ].map((sauce)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        padding: "5px 15px"
                                                    },
                                                    className: "bg-terrasse-yellow text-terrasse-black px-4 py-2 rounded-full font-bebas text-lg",
                                                    children: sauce
                                                }, sauce, false, {
                                                    fileName: "[project]/components/carte/MenuCategories.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/carte/MenuCategories.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/carte/MenuCategories.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/carte/MenuCategories.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 pt-8 border-t border-white/20 text-center",
                            style: {
                                margin: "20px 0"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-xl md:text-2xl",
                                style: {
                                    margin: "20px 0"
                                },
                                children: [
                                    "💡 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bebas text-terrasse-yellow",
                                        children: "Supplément fromage :"
                                    }, void 0, false, {
                                        fileName: "[project]/components/carte/MenuCategories.tsx",
                                        lineNumber: 136,
                                        columnNumber: 18
                                    }, this),
                                    " +1€"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/carte/MenuCategories.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/carte/MenuCategories.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carte/MenuCategories.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/carte/MenuCategories.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/carte/MenuCategories.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/carte/MenuHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuHero",
    ()=>MenuHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function MenuHero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-gradient-to-br from-terrasse-blue via-terrasse-blue to-terrasse-yellow overflow-hidden",
        style: {
            padding: "60px 20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 text-6xl",
                        children: "🍔"
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuHero.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-12 right-4 text-5xl",
                        children: "🌯"
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuHero.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-8 text-5xl",
                        children: "🍟"
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuHero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 right-12 text-4xl",
                        children: "🥤"
                    }, void 0, false, {
                        fileName: "[project]/components/carte/MenuHero.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/carte/MenuHero.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px] relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none drop-shadow-2xl",
                                style: {
                                    padding: "20px 10px"
                                },
                                children: "LA CARTE"
                            }, void 0, false, {
                                fileName: "[project]/components/carte/MenuHero.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/carte/MenuHero.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3,
                                duration: 0.6
                            },
                            className: "text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl leading-relaxed",
                            style: {
                                padding: "20px 10px"
                            },
                            children: [
                                "Des saveurs authentiques, des produits frais,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/carte/MenuHero.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                "et des prix qui donnent le sourire ! 😋"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/carte/MenuHero.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: 0.5,
                                duration: 0.5
                            },
                            className: "bg-terrasse-yellow text-terrasse-black font-bebas text-2xl md:text-3xl px-8 py-3 rounded-2xl shadow-2xl",
                            style: {
                                padding: "20px 10px",
                                margin: "20px 10px"
                            },
                            children: "🔥 Tous nos plats sont faits minute !"
                        }, void 0, false, {
                            fileName: "[project]/components/carte/MenuHero.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/carte/MenuHero.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/carte/MenuHero.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/carte/MenuHero.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_c0fc56cf._.js.map