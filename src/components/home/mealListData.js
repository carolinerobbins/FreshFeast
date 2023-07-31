const user = {
  dietChoice: [],
  alergens: []
};

const meals = [
  {
    _id: 'meal1',
    name: 'Fried Squidward',
    active: true,
    description: 'Fried calamari—also known as calamari fritti—is a classic Italian antipasto.',
    cuisine: 'Italian',
    dietType: [],
    numberOfRatings: 10,
    ratings: {
      1: 0,
      2: 1,
      3: 2,
      4: 4,
      5: 3,
    },
    recommended: false,
    favorites: 10,
    allergens: ['seafood'],
    photo: 'https://www.thespruceeats.com/thmb/BSYlH-mloaBfGESJrYjXxOtJmeU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-calamari-2019531-hero-01-e294f265d7e84c0f89d4b5759759ffbf.jpg',
    ingredients: ['squid', 'flour', 'breadcrumbs', 'oil', 'egg'],
    nutrition: 'Array',
  },
  {
    _id: 'meal2',
    name: 'Krabby Patty',
    active: true,
    description: "The Krabby Patty is the Krusty Krab's signature and popular food item.",
    cuisine: 'American',
    dietType: ['vegetarian'],
    numberOfRatings: 28,
    ratings: {
      1: 0,
      2: 1,
      3: 2,
      4: 10,
      5: 15,
    },
    recommended: true,
    favorites: 8,
    allergens: ['seafood', 'gluten'],
    photo: 'https://static.wikia.nocookie.net/spongebob/images/2/2f/Krusty_Krab_Training_Video_081.png/revision/latest/scale-to-width-down/300?cb=20211125123843',
    ingredients: ['frozen patty', 'lettuce','onions', 'tomatoes', 'sea cheese', 'pickles', 'mustard', 'ketchup', 'secret formula'],
    nutrition: 'Array',
  },
  {
    _id: 'meal3',
    name: 'Chum Bucket',
    active: true,
    description: "Chum is the signature ingredient in all of Plankton's menu items. In real life, chum is bait used by fishermen, made out of chopped fish.",
    cuisine: 'Seafood',
    dietType: [],
    numberOfRatings: 35,
    ratings: {
      1: 10,
      2: 12,
      3: 8,
      4: 4,
      5: 1,
    },
    recommended: true,
    favorites: 1,
    allergens: ['seafood'],
    photo: 'https://static.wikia.nocookie.net/spongebob/images/e/e2/Chum_Bucket_chum_stock_art.png/revision/latest?cb=20230124082042',
    ingredients: ['Organs', 'eyeballs', 'bones'],
    nutrition: 'Array',
  },
]

export { user, meals };