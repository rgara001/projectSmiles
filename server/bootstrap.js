Meteor.startup(function () {
    if (Meals.find().count() === 0) {
        var meals = [
            {
                id: 0,
                restaurant: "Coyo",
                picture: "images/coyo-taco.jpg"
            },
            {
                id: 1,
                restaurant: "Mc Donald's",
                picture: "images/mc.jpg"
            },
            {
                id: 2,
                restaurant: "Pollo Tropical",
                picture: "images/pt.jpg"
            },
            {
                id: 3,
                restaurant: "Wendy's",
                picture: "images/ws.jpg"
            }
        ];

        for (var i = 0; i < meals.length; i++) {
            Meals.insert(meals[i]);
        }
    }
});