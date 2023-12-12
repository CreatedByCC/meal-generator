const mealPlans = {
    breakfast: ["Overnight oats", "Loaded avocado toast", "Broccoli and cheese egg bake", "Yogurt and fruit parfaits", "Chocolate cherry chia pudding"],
    lunch: ["Grilled chicken salad", "Veggie wrap with hummus", "Tuna salad sandwich", "Quinoa and black bean salad", "Grilled cheese and tomato soup"],
    dinner: ["Baked salmon with roasted vegetables", "Chicken fajitas with guacamole", "Spaghetti with meatballs", "Beef stir-fry with rice", "Vegetarian chili"]
};

const pickMeal = (mealArr) => {
    const randomIndex = Math.floor(Math.random() * mealArr.length);
    const randomMeal = mealArr[randomIndex];
    
    return randomMeal;
};

const generateMealPlan = meals => {
    const pickBreakfast = pickMeal(meals.breakfast);
    const pickLunch = pickMeal(meals.lunch);
    const pickDinner = pickMeal(meals.dinner);

    console.log(`Breakfast: ${pickBreakfast}`);
    console.log(`Lunch: ${pickLunch}`);
    console.log(`Dinner: ${pickDinner}`);
};

generateMealPlan(mealPlans);