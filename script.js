
document.getElementById("searchButton").addEventListener("click", function () {
    const input = document.getElementById("ingredientInput").value;
    if (!input) {
        alert("Please enter ingredients to search.");
        return;
    }

    // Simulate fetching recipes
    const recipes = [
        "Pancakes with " + input,
        "Omelette with " + input,
        "Smoothie with " + input
    ];

    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const li = document.createElement("li");
        li.textContent = recipe;
        recipeList.appendChild(li);
    });

    alert("Recipes successfully loaded!");
});
