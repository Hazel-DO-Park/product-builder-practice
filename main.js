const recipes = [
    // --- Pasta & Noodles ---
    {
        name: 'Spaghetti Carbonara',
        description: '계란 기반의 크리미한 소스, 판체타, 치즈가 어우러진 클래식 이탈리안 파스타입니다.',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['pasta', 'eggs', 'pancetta', 'bacon', 'parmesan', 'pepper']
    },
    {
        name: 'Chicken Alfredo',
        description: '부드러운 닭가슴살을 곁들인 크리미하고 풍부한 맛의 페투치니 알프레도입니다.',
        image: 'https://images.unsplash.com/photo-1645112481351-9ee2c1c965d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['chicken', 'fettuccine', 'pasta', 'cream', 'parmesan', 'butter']
    },
    {
        name: 'Pesto Pasta',
        description: '신선한 바질 페스토와 방울토마토가 어우러진 파스타입니다.',
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['pasta', 'basil', 'pine nuts', 'parmesan', 'garlic', 'olive oil']
    },
    {
        name: 'Pad Thai',
        description: '계란, 땅콩, 숙주가 들어간 태국의 인기 볶음 쌀국수 요리입니다.',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['rice noodles', 'eggs', 'peanuts', 'bean sprouts', 'shrimp', 'chicken', 'tofu', 'lime']
    },
    {
        name: 'Macaroni and Cheese',
        description: '풍부하고 치즈 맛이 가득한 소스에 버무린 정통 맥앤치즈입니다.',
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['macaroni', 'pasta', 'cheese', 'cheddar', 'milk', 'butter', 'flour']
    },

    // --- Rice & Grains ---
    {
        name: 'Chicken Stir-Fry',
        description: '부드러운 닭고기와 다양한 채소를 함께 볶아낸 빠르고 건강한 요리입니다.',
        image: 'https://images.unsplash.com/photo-1512058560366-cd2429bb5c5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['chicken', 'broccoli', 'carrots', 'bell pepper', 'soy sauce', 'rice']
    },
    {
        name: 'Vegetable Fried Rice',
        description: '남은 밥과 채소를 활용하기 좋은 최고의 메뉴입니다.',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['rice', 'eggs', 'peas', 'carrots', 'corn', 'soy sauce', 'green onions']
    },
    {
        name: 'Mushroom Risotto',
        description: '풍미 가득한 버섯과 육수로 요리한 크리미한 이탈리안 쌀 요리입니다.',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['arborio rice', 'rice', 'mushrooms', 'vegetable broth', 'parmesan', 'white wine', 'onion']
    },
    {
        name: 'Kimchi Fried Rice',
        description: '잘 익은 김치로 만든 매콤하고 풍미 가득한 김치볶음밥입니다.',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['rice', 'kimchi', 'gochujang', 'eggs', 'sesame oil', 'green onions']
    },

    // --- Chicken & Beef ---
    {
        name: 'Classic Beef Tacos',
        description: '언제 먹어도 맛있는 정통 소고기 타코입니다.',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['ground beef', 'beef', 'taco shells', 'tortilla', 'lettuce', 'tomato', 'cheese', 'sour cream']
    },
    {
        name: 'Roast Chicken',
        description: '허브 향이 가득하고 껍질은 바삭, 속은 촉촉한 로스트 치킨입니다.',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['whole chicken', 'chicken', 'lemon', 'garlic', 'thyme', 'rosemary', 'butter']
    },
    {
        name: 'Beef Stew',
        description: '소고기와 뿌리 채소를 듬뿍 넣어 푹 끓인 든든한 스튜입니다.',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['beef chuck', 'beef', 'potatoes', 'carrots', 'onion', 'beef broth', 'red wine']
    },
    {
        name: 'Chicken Curry',
        description: '부드러운 닭고기가 들어간 진하고 향긋한 카레입니다.',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'garlic', 'ginger', 'rice']
    },
    {
        name: 'Grilled Steak',
        description: '간단한 시즈닝으로 완벽하게 구워낸 스테이크입니다.',
        image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['steak', 'beef', 'salt', 'pepper', 'garlic butter', 'rosemary']
    },

    // --- Salads & Soups ---
    {
        name: 'Tomato Basil Soup',
        description: '잘 익은 토마토와 신선한 바질로 만든 크리미한 수프입니다.',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['tomatoes', 'basil', 'onion', 'garlic', 'vegetable broth', 'cream']
    },
    {
        name: 'Caprese Salad',
        description: '신선한 모차렐라, 토마토, 바질이 어우러진 우아한 이탈리안 샐러드입니다.',
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['mozzarella', 'cheese', 'tomatoes', 'basil', 'balsamic glaze', 'olive oil']
    },
    {
        name: 'Caesar Salad',
        description: '아삭한 로메인 상추에 크리미한 드레싱과 크루통을 곁들인 샐러드입니다.',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['romaine lettuce', 'lettuce', 'croutons', 'parmesan', 'caesar dressing', 'chicken']
    },
    {
        name: 'Greek Salad',
        description: '오이, 토마토, 올리브, 페타 치즈가 들어간 상큼한 샐러드입니다.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['cucumber', 'tomatoes', 'kalamata olives', 'feta cheese', 'red onion', 'oregano']
    },
    {
        name: 'Chicken Noodle Soup',
        description: '추운 날 몸을 따뜻하게 해주는 최고의 소울 푸드입니다.',
        image: 'https://images.unsplash.com/photo-1547592115-0dec33f7e8ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['chicken', 'noodles', 'pasta', 'carrots', 'celery', 'onion', 'chicken broth']
    },

    // --- Breakfast & Brunch ---
    {
        name: 'Pancakes',
        description: '메이플 시럽을 곁들인 폭신폭신한 수제 팬케이크입니다.',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['flour', 'milk', 'eggs', 'sugar', 'baking powder', 'butter', 'maple syrup']
    },
    {
        name: 'French Toast',
        description: '시나몬 향이 살짝 가미된 노릇노릇한 프렌치 토스트입니다.',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['bread', 'eggs', 'milk', 'cinnamon', 'vanilla', 'butter', 'syrup']
    },
    {
        name: 'Omelette',
        description: '치즈와 채소를 듬뿍 넣은 클래식 계란 오믈렛입니다.',
        image: 'https://images.unsplash.com/photo-1510693395975-2393056e4233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['eggs', 'cheese', 'spinach', 'mushrooms', 'onions', 'peppers']
    },
    {
        name: 'Avocado Toast',
        description: '바삭한 토스트 위에 크리미한 아보카도를 올린 메뉴입니다.',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['bread', 'avocado', 'lemon', 'salt', 'pepper', 'red pepper flakes', 'eggs']
    },

    // --- Easy Snacks & Sides ---
    {
        name: 'Guacamole',
        description: '신선하고 매콤한 아보카도 딥 소스입니다.',
        image: 'https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['avocado', 'onion', 'tomatoes', 'cilantro', 'lime', 'jalapeno']
    },
    {
        name: 'Bruschetta',
        description: '토마토와 바질을 올린 바삭한 이탈리안 전채 요리입니다.',
        image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['baguette', 'bread', 'tomatoes', 'basil', 'garlic', 'olive oil', 'balsamic']
    },
    {
        name: 'Quesadilla',
        description: '치즈와 다양한 재료를 넣어 구운 바삭한 또띠아 요리입니다.',
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ingredients: ['tortilla', 'cheese', 'chicken', 'beef', 'peppers', 'onions']
    }
];

function createRecipeCard(recipe) {
    const template = document.getElementById('recipe-card-template');
    const card = template.content.cloneNode(true);
    
    card.querySelector('.card-title').textContent = recipe.name;
    card.querySelector('.card-description').textContent = recipe.description;
    card.querySelector('.card-image').src = recipe.image;
    card.querySelector('.card-image').alt = recipe.name;
    
    return card;
}

function displayRecipes(recipeList) {
    const container = document.getElementById('results-container');
    container.innerHTML = '';
    
    if (recipeList.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No exact matches found, but here are some of our favorites!</p>';
        // Fallback: Show random featured recipes if absolutely nothing matches (though our logic below prevents 0)
        const fallback = getFallbackRecipes([], 3);
        fallback.forEach(recipe => container.appendChild(createRecipeCard(recipe)));
        return;
    }
    
    recipeList.forEach(recipe => {
        container.appendChild(createRecipeCard(recipe));
    });
}

function getFallbackRecipes(excludeRecipes, count) {
    // Filter out recipes that are already shown
    const pool = recipes.filter(r => !excludeRecipes.includes(r));
    // Shuffle the pool
    const shuffled = pool.sort(() => 0.5 - Math.random());
    // Return requested number
    return shuffled.slice(0, count);
}

// Initial display of featured recipes
document.addEventListener('DOMContentLoaded', () => {
    // Show first 3 recipes as featured
    displayRecipes(recipes.slice(0, 3));
    
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    // Search Functionality
    function performSearch() {
        const input = document.getElementById('ingredient-input').value;
        const userIngredients = input.toLowerCase().split(',').map(item => item.trim()).filter(item => item);
        
        if (userIngredients.length === 0) {
            // If input is empty, show default featured
            displayRecipes(recipes.slice(0, 3)); 
            return;
        }

        // 1. Find exact matches
        let filteredRecipes = recipes.filter(recipe => {
            return userIngredients.some(ingredient => recipe.ingredients.includes(ingredient));
        });

        // 2. If fewer than 3 matches, fill with others
        if (filteredRecipes.length < 3) {
            const needed = 3 - filteredRecipes.length;
            const extras = getFallbackRecipes(filteredRecipes, needed);
            filteredRecipes = filteredRecipes.concat(extras);
        }

        displayRecipes(filteredRecipes);
        
        // Scroll to results
        document.getElementById('results-container').scrollIntoView({ behavior: 'smooth' });
    }

    // Recommend Button Logic
    const recommendBtn = document.getElementById('recommend-btn');
    if (recommendBtn) {
        recommendBtn.addEventListener('click', performSearch);
    }

    // Enter Key Logic for Input
    const ingredientInput = document.getElementById('ingredient-input');
    if (ingredientInput) {
        ingredientInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});
