type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
  };

  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Avocado Toas",
      desc: "caper aoili, crispy onions, microgreens on our house-made sourdough bread.",
      img: "",
      price: 9.50,
      
    },

    {
        id: 2,
        title: "Italian Mallorca Sandwich",
        desc: "salami, coppa, prosciutto, munster cheese, arugula, black olive tappenade on a housemade mallorca, topped with confeccioner's sugar.",
        img: "",
        price: 9.5,
        
      },
      {
        id: 3,
        title: "Eggs and Toast",
        desc: "two eggs, however you want'em with croissant toast",
        img: "",
        price: 7.5,
        
      },
      {
        id: 4,
        title: "Chicken Club Sandwich",
        desc: "Housemade sandwich bread, roasted chicken, bacon, lettuce, munster cheese, tomato, pickled onions and caper mayo served with potato chips.",
        img: "",
        price: 13.5,
        
      },
      {
        id: 5,
        title: "Black Forest Picnic Sandwich",
        desc: "herbed croissant with black forest ham, pickles, lettuce, tomato, dijonnaise served your choice of side salad or potato chips",
        img: "",
        price: 12.5,
        
      },
      {
        id: 6,
        title: "Waffles and Berries",
        desc: "sourdough waffles, mixed berry merengue, fresh berries, house granola.",
        img: "",
        price: 12,
        
      },
      {
        id: 7,
        title: "Bananas Foster French Toast",
        desc: "Brioche French toast, banana caramel, candied pecans, maple butter. *Only available Saturdays and Sundays*",
        img: "",
        price: 11,
        
      },
      {
        id: 8,
        title: "Bacon, Egg and Cheese Sandwich",
        desc: "cheddar cheese on a toasted croissant served with your choice of side salad or potato chips",
        img: "",
        price: 10,
        
      },
    

];

export const pastries: Products = [
    {
      id: 1,
      title: "Cantucci",
      desc: "Italian doble baked cookie with almonds and cranberries",
      img: "",
      price: 2.50,
      
    },

    {
        id: 2,
        title: "Pecan Polvoron",
        desc: "polvorones hechos con harina de pecanas",
        img: "",
        price: 1.5,
        
      },
      {
        id: 3,
        title: "Vegan Chocolate Chunk Cookie",
        desc: "vegan cookie made with coconut oil, apple sauce and dark chocolate chips",
        img: "",
        price: 3,
        
      },
      {
        id: 4,
        title: "Chocolate Chunk Cookie",
        desc: "classic cookie wuth chunks of dark chocolate",
        img: "",
        price: 3,
        
      },
      {
        id: 5,
        title: "Oatmeal Raisin Cookie",
        desc: "spiced oatmeal cookie with raisins",
        img: "",
        price: 3,
        
      },
      {
        id: 6,
        title: "Doble Chocolate Cookie",
        desc: "crunchy cookie made with premium cacao and dark chocolate",
        img: "",
        price: 3,
        
      },
      {
        id: 7,
        title: "Cinnamon Roll",
        desc: "fluffy, sofy milk bread filled with cinnamon and sugar topped with vanilla glaze",
        img: "../public/cinnamonrolls.jpg",
        price: 3.5,
        
      },
      {
        id: 8,
        title: "Pain au Chocolat",
        desc: "croissant relleno de chocolate oscuro",
        img: "",
        price: 1.20,
        
      },
    

];

export const drinks: Products = [
    {
      id: 1,
      title: "Hot Chocolate",
      desc: "Topped with a home-made marshmallow",
      img: "",
      price: 4,
      
    },

    {
        id: 2,
        title: "Carrot Orange Ginger Juice",
        desc: "",
        img: "",
        price: 3.5,
        
      },
      {
        id: 3,
        title: "Cafe Provençal",
        desc: "iced double espresso, lavender syrup, oat milk",
        img: "",
        price: 3.5,
        
      },
      {
        id: 4,
        title: "Cafe Idolo",
        desc: "iced double espresso, orange syrup, oat milk",
        img: "",
        price: 3.5,
        
      },
      {
        id: 5,
        title: "Fresh Fruit Juice",
        desc: "See our fruits selection",
        img: "",
        price: 3,
        
      },
      {
        id: 6,
        title: "Latte",
        desc: "",
        img: "",
        price: 3,
        
      },
      {
        id: 7,
        title: "Cappuccino",
        desc: "",
        img: "",
        price: 3.5,
        
      },
      {
        id: 8,
        title: "Espresso",
        desc: "7g of medium roasted Peruvian coffee",
        img: "",
        price: 2,
        
      },
    

]