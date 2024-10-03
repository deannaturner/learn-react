export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientItemList({ ingredients }: { ingredients: Array<string> }) {
  return ingredients.map((ingredient) => 
    <li key={ingredient}>
      {ingredient}
    </li>
  );
}

function RecipeDiv({name, ingredients}: {name: string, ingredients: Array<string>}) {
  return (
    <div>
      <h2> {name} </h2>
      <ul>
        <IngredientItemList ingredients={ingredients} />
      </ul>
    </div>
  )
}

export default function RecipeList() {
  const RecipeDivList = recipes.map((recipe) => 
    <RecipeDiv key={recipe.id} name={recipe.name} ingredients={Array.from(recipe.ingredients)} />
  );
  return (
    <div>
      <h1>Recipes</h1>
      {RecipeDivList}
    </div>
  );
}