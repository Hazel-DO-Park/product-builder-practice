const recipes = [
    // --- Pasta & Noodles ---
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish with a creamy egg-based sauce, pancetta, and cheese.',
        image: 'https://www.allrecipes.com/thmb/Vg2GXE_3Ftr4Vwe-zI_v--e_i4w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/44813-spaghetti-carbonara-ii-DDMFS-4x3-3444033333a948329622a5a58a74f4b2.jpg',
        ingredients: ['pasta', 'eggs', 'pancetta', 'bacon', 'parmesan', 'pepper']
    },
    {
        name: 'Chicken Alfredo',
        description: 'Creamy and rich fettuccine alfredo with tender chicken breast.',
        image: 'https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-plate.jpg',
        ingredients: ['chicken', 'fettuccine', 'pasta', 'cream', 'parmesan', 'butter']
    },
    {
        name: 'Pesto Pasta',
        description: 'Fresh basil pesto tossed with pasta and cherry tomatoes.',
        image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2019/06/Basil-Pesto-Pasta-3.jpg',
        ingredients: ['pasta', 'basil', 'pine nuts', 'parmesan', 'garlic', 'olive oil']
    },
    {
        name: 'Pad Thai',
        description: 'A popular Thai stir-fried noodle dish with eggs, peanuts, and bean sprouts.',
        image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2018/08/Pad-Thai-8.jpg',
        ingredients: ['rice noodles', 'eggs', 'peanuts', 'bean sprouts', 'shrimp', 'chicken', 'tofu', 'lime']
    },
    {
        name: 'Macaroni and Cheese',
        description: 'Classic comfort food with tender macaroni in a rich, cheesy sauce.',
        image: 'https://www.momontimeout.com/wp-content/uploads/2018/11/homemade-mac-and-cheese-recipe.jpg',
        ingredients: ['macaroni', 'pasta', 'cheese', 'cheddar', 'milk', 'butter', 'flour']
    },

    // --- Rice & Grains ---
    {
        name: 'Chicken Stir-Fry',
        description: 'A quick and healthy stir-fry with tender chicken and a variety of colorful vegetables.',
        image: 'https://www.allrecipes.com/thmb/k9Eea23AAG2L1Sq2f3aX-c2yNfE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/228823-quick-chicken-stir-fry-DDMFS-4x3-1f3f07238d8f4d92a95fe27f10137746.jpg',
        ingredients: ['chicken', 'broccoli', 'carrots', 'bell pepper', 'soy sauce', 'rice']
    },
    {
        name: 'Vegetable Fried Rice',
        description: 'A great way to use up leftover rice and veggies.',
        image: 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Fried-Rice-7.jpg',
        ingredients: ['rice', 'eggs', 'peas', 'carrots', 'corn', 'soy sauce', 'green onions']
    },
    {
        name: 'Mushroom Risotto',
        description: 'Creamy Italian rice dish cooked with broth and savory mushrooms.',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg',
        ingredients: ['arborio rice', 'rice', 'mushrooms', 'vegetable broth', 'parmesan', 'white wine', 'onion']
    },
    {
        name: 'Kimchi Fried Rice',
        description: 'Spicy and flavorful fried rice made with fermented kimchi.',
        image: 'https://www.koreanbapsang.com/wp-content/uploads/2018/02/Kimchi-Fried-Rice-3.jpg',
        ingredients: ['rice', 'kimchi', 'gochujang', 'eggs', 'sesame oil', 'green onions']
    },

    // --- Chicken & Beef ---
    {
        name: 'Classic Beef Tacos',
        description: 'A timeless favorite, these beef tacos are perfect for any night of the week.',
        image: 'https://static01.nyt.com/images/2022/10/12/dining/11taco-methods-14/11taco-methods-14-mediumSquareAt3X.jpg',
        ingredients: ['ground beef', 'beef', 'taco shells', 'tortilla', 'lettuce', 'tomato', 'cheese', 'sour cream']
    },
    {
        name: 'Roast Chicken',
        description: 'Juicy roasted chicken with crispy skin and herbs.',
        image: 'https://www.recipetineats.com/wp-content/uploads/2017/04/Roast-Chicken-Dinner-3.jpg',
        ingredients: ['whole chicken', 'chicken', 'lemon', 'garlic', 'thyme', 'rosemary', 'butter']
    },
    {
        name: 'Beef Stew',
        description: 'Hearty and comforting stew with chunks of beef and root vegetables.',
        image: 'https://www.onceuponachef.com/images/2011/02/Beef-Stew-1.jpg',
        ingredients: ['beef chuck', 'beef', 'potatoes', 'carrots', 'onion', 'beef broth', 'red wine']
    },
    {
        name: 'Chicken Curry',
        description: 'A rich and aromatic curry with tender chicken pieces.',
        image: 'https://www.averiecooks.com/wp-content/uploads/2015/09/chickencurry-15.jpg',
        ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'garlic', 'ginger', 'rice']
    },
    {
        name: 'Grilled Steak',
        description: 'Perfectly grilled steak with a simple seasoning.',
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2020/05/grilled-steak-5.jpg',
        ingredients: ['steak', 'beef', 'salt', 'pepper', 'garlic butter', 'rosemary']
    },

    // --- Salads & Soups ---
    {
        name: 'Tomato Basil Soup',
        description: 'A creamy and flavorful soup made with ripe tomatoes and fresh basil.',
        image: 'https://www.allrecipes.com/thmb/3_s02ssQGZ_07tL48X_i2s2DSWM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12985-creamy-tomato-soup-DDMFS-4x3-0947-82c5f76f082d49c19b67482f34800361.jpg',
        ingredients: ['tomatoes', 'basil', 'onion', 'garlic', 'vegetable broth', 'cream']
    },
    {
        name: 'Caprese Salad',
        description: 'A simple and elegant Italian salad with fresh mozzarella, tomatoes, and basil.',
        image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg',
        ingredients: ['mozzarella', 'cheese', 'tomatoes', 'basil', 'balsamic glaze', 'olive oil']
    },
    {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with creamy caesar dressing and croutons.',
        image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_sb98n_CX-41ihHYFc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba249589d830d129f28e9f6.jpg',
        ingredients: ['romaine lettuce', 'lettuce', 'croutons', 'parmesan', 'caesar dressing', 'chicken']
    },
    {
        name: 'Greek Salad',
        description: 'Refreshing salad with cucumbers, tomatoes, olives, and feta cheese.',
        image: 'https://www.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2.jpg',
        ingredients: ['cucumber', 'tomatoes', 'kalamata olives', 'feta cheese', 'red onion', 'oregano']
    },
    {
        name: 'Chicken Noodle Soup',
        description: 'The ultimate comfort food for a cold day.',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Chicken-Noodle-Soup-Recipe-1200.jpg',
        ingredients: ['chicken', 'noodles', 'pasta', 'carrots', 'celery', 'onion', 'chicken broth']
    },

    // --- Breakfast & Brunch ---
    {
        name: 'Pancakes',
        description: 'Fluffy homemade pancakes served with maple syrup.',
        image: 'https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-Old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg',
        ingredients: ['flour', 'milk', 'eggs', 'sugar', 'baking powder', 'butter', 'maple syrup']
    },
    {
        name: 'French Toast',
        description: 'Golden brown french toast with a hint of cinnamon.',
        image: 'https://www.mccormick.com/-/media/project/mccormick-us/mccormick/recipes/quick-and-easy-french-toast-800x800.jpg',
        ingredients: ['bread', 'eggs', 'milk', 'cinnamon', 'vanilla', 'butter', 'syrup']
    },
    {
        name: 'Omelette',
        description: 'Classic egg omelette with cheese and vegetables.',
        image: 'https://www.incredibleegg.org/wp-content/uploads/2020/11/basic-french-omelet-930x620.jpg',
        ingredients: ['eggs', 'cheese', 'spinach', 'mushrooms', 'onions', 'peppers']
    },
    {
        name: 'Avocado Toast',
        description: 'Crispy toast topped with creamy mashed avocado.',
        image: 'https://cookieandkate.com/images/2012/04/avocado-toast-with-egg-recipe-1-1.jpg',
        ingredients: ['bread', 'avocado', 'lemon', 'salt', 'pepper', 'red pepper flakes', 'eggs']
    },

    // --- Easy Snacks & Sides ---
    {
        name: 'Guacamole',
        description: 'Fresh and spicy avocado dip.',
        image: 'https://www.cookingclassy.com/wp-content/uploads/2018/05/guacamole-9.jpg',
        ingredients: ['avocado', 'onion', 'tomatoes', 'cilantro', 'lime', 'jalapeno']
    },
    {
        name: 'Bruschetta',
        description: 'Toasted bread topped with a fresh tomato and basil mixture.',
        image: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/bruschetta-recipe-10-1200.jpg',
        ingredients: ['baguette', 'bread', 'tomatoes', 'basil', 'garlic', 'olive oil', 'balsamic']
    },
    {
        name: 'Quesadilla',
        description: 'Crispy tortilla filled with melted cheese and other fillings.',
        image: 'https://www.simplyrecipes.com/thmb/5w9M4h8Jz00j8d7j8k8j7j8j7j8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Quesadilla-LEAD-1-5c7b9b1b7b7b4b7b8b7b9b1b7b7b4b7b.jpg',
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
