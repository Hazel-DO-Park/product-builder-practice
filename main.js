const recipes = [
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish with a creamy egg-based sauce, pancetta, and cheese.',
        image: 'https://www.allrecipes.com/thmb/Vg2GXE_3Ftr4Vwe-zI_v--e_i4w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/44813-spaghetti-carbonara-ii-DDMFS-4x3-3444033333a948329622a5a58a74f4b2.jpg',
        ingredients: ['pasta', 'eggs', 'pancetta', 'parmesan', 'pepper']
    },
    {
        name: 'Chicken Alfredo',
        description: 'Creamy and rich fettuccine alfredo with tender chicken breast.',
        image: 'https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-plate.jpg',
        ingredients: ['chicken', 'fettuccine', 'cream', 'parmesan', 'butter']
    },
    {
        name: 'Classic Beef Tacos',
        description: 'A timeless favorite, these beef tacos are perfect for any night of the week.',
        image: 'https://static01.nyt.com/images/2022/10/12/dining/11taco-methods-14/11taco-methods-14-mediumSquareAt3X.jpg',
        ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomato', 'cheese', 'sour cream']
    },
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
        ingredients: ['mozzarella', 'tomatoes', 'basil', 'balsamic glaze']
    },
    {
        name: 'Chicken Stir-Fry',
        description: 'A quick and healthy stir-fry with tender chicken and a variety of colorful vegetables.',
        image: 'https://www.allrecipes.com/thmb/k9Eea23AAG2L1Sq2f3aX-c2yNfE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/228823-quick-chicken-stir-fry-DDMFS-4x3-1f3f07238d8f4d92a95fe27f10137746.jpg',
        ingredients: ['chicken', 'broccoli', 'carrots', 'bell pepper', 'soy sauce', 'rice']
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
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No recipes found. Try different ingredients!</p>';
        return;
    }
    
    recipeList.forEach(recipe => {
        container.appendChild(createRecipeCard(recipe));
    });
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

    // Recommend Button Logic
    const recommendBtn = document.getElementById('recommend-btn');
    if (recommendBtn) {
        recommendBtn.addEventListener('click', () => {
            const input = document.getElementById('ingredient-input').value;
            const userIngredients = input.toLowerCase().split(',').map(item => item.trim()).filter(item => item);
            
            if (userIngredients.length === 0) {
                displayRecipes(recipes.slice(0, 3)); // Reset to featured
                return;
            }

            const filteredRecipes = recipes.filter(recipe => {
                return userIngredients.some(ingredient => recipe.ingredients.includes(ingredient));
            });

            displayRecipes(filteredRecipes);
            
            // Scroll to results
            document.getElementById('results-container').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
