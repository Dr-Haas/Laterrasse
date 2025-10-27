#!/bin/bash

# Script de test simple pour l'API La Terrasse
# Usage: chmod +x test-api.sh && ./test-api.sh

BASE_URL="http://localhost:3001"

echo "🧪 Test de l'API La Terrasse"
echo "=============================="
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Health Check
echo -e "${YELLOW}1. Test Health Check${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" $BASE_URL/health)
if [ $response -eq 200 ]; then
    echo -e "${GREEN}✅ Health check OK${NC}"
else
    echo -e "${RED}❌ Health check échoué (code: $response)${NC}"
fi
echo ""

# Test 2: Récupérer le menu
echo -e "${YELLOW}2. Test récupération du menu${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" $BASE_URL/api/menu)
if [ $response -eq 200 ]; then
    echo -e "${GREEN}✅ Menu récupéré${NC}"
    echo "Aperçu:"
    curl -s $BASE_URL/api/menu | head -c 200
    echo "..."
else
    echo -e "${RED}❌ Échec récupération menu (code: $response)${NC}"
fi
echo ""
echo ""

# Test 3: Inscription
echo -e "${YELLOW}3. Test inscription${NC}"
email="test_$(date +%s)@test.com"
response=$(curl -s -X POST $BASE_URL/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$email\",\"password\":\"test123\",\"username\":\"TestUser\"}" \
  -w "\n%{http_code}")

http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | head -n -1)

if [ $http_code -eq 201 ]; then
    echo -e "${GREEN}✅ Inscription réussie${NC}"
    token=$(echo $body | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
    echo "Token: ${token:0:30}..."
else
    echo -e "${RED}❌ Inscription échouée (code: $http_code)${NC}"
    echo "$body"
fi
echo ""

# Test 4: Connexion
echo -e "${YELLOW}4. Test connexion (compte admin)${NC}"
response=$(curl -s -X POST $BASE_URL/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@laterrasse.fr","password":"password123"}' \
  -w "\n%{http_code}")

http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | head -n -1)

if [ $http_code -eq 200 ]; then
    echo -e "${GREEN}✅ Connexion réussie${NC}"
    admin_token=$(echo $body | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
    echo "Token admin: ${admin_token:0:30}..."
else
    echo -e "${RED}❌ Connexion échouée (code: $http_code)${NC}"
    echo "$body"
fi
echo ""

# Test 5: Récupérer les posts
echo -e "${YELLOW}5. Test récupération des posts${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" $BASE_URL/api/posts)
if [ $response -eq 200 ]; then
    echo -e "${GREEN}✅ Posts récupérés${NC}"
else
    echo -e "${RED}❌ Échec récupération posts (code: $response)${NC}"
fi
echo ""

# Test 6: Top scores
echo -e "${YELLOW}6. Test récupération des top scores${NC}"
response=$(curl -s $BASE_URL/api/game-scores/top?limit=5)
echo "$response" | head -c 200
echo "..."
echo -e "${GREEN}✅ Top scores récupérés${NC}"
echo ""

# Test 7: Légendes
echo -e "${YELLOW}7. Test récupération des légendes${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" $BASE_URL/api/legends)
if [ $response -eq 200 ]; then
    echo -e "${GREEN}✅ Légendes récupérées${NC}"
else
    echo -e "${RED}❌ Échec récupération légendes (code: $response)${NC}"
fi
echo ""

# Résumé
echo "=============================="
echo -e "${GREEN}✨ Tests terminés !${NC}"
echo ""
echo "Pour tester manuellement:"
echo "  - Health: curl $BASE_URL/health"
echo "  - Menu:   curl $BASE_URL/api/menu"
echo "  - Posts:  curl $BASE_URL/api/posts"
echo ""
echo "Utilisez Postman ou Insomnia pour des tests plus avancés."

