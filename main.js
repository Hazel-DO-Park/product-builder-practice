class RecipeCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('recipe-card-template').content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.cloneNode(true));
    }

    connectedCallback() {
        const shadowRoot = this.shadowRoot;
        shadowRoot.querySelector('.card-title').innerText = this.getAttribute('title');
        shadowRoot.querySelector('.card-description').innerText = this.getAttribute('description');
        shadowRoot.querySelector('.card-image').src = this.getAttribute('image');
        shadowRoot.querySelector('.card-image').alt = this.getAttribute('title');
    }
}

customElements.define('recipe-card', RecipeCard);


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


document.getElementById('recommend-btn').addEventListener('click', () => {
    const input = document.getElementById('ingredient-input').value;
    const ingredients = input.toLowerCase().split(',').map(item => item.trim()).filter(item => item);
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; 

    if (ingredients.length === 0) return;

    const recommendedRecipes = recipes.filter(recipe => {
        return ingredients.some(ingredient => recipe.ingredients.includes(ingredient));
    });

    recommendedRecipes.forEach(recipe => {
        const recipeCard = document.createElement('recipe-card');
        recipeCard.setAttribute('title', recipe.name);
        recipeCard.setAttribute('description', recipe.description);
        recipeCard.setAttribute('image', recipe.image);
        resultsContainer.appendChild(recipeCard);
    });
});
