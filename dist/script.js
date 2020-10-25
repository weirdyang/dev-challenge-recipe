new Vue({
  el: "#app",
  data: {
    name: "Amazing cheesecake",
    yield: "12 servings",
    durations:[{
      name: "prep time",
      duration: "45 mins"
    },{
      name: "cook time",
      duration: "1 hour"
    },{
      name: "total time",
      duration: "1h 45mins"
    },],
    description: "Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.",
    steps: [],
    components: [ 
                {
      name: "Cheesecake",
      ingredients:
      ["four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature", "1 cup (200g)<b> granulated sugar</b>", "1 cup (240g) full-fat <b>sour cream</b>, at room temperature","1 teaspoon <b>pure vanilla extract</b>","2 teaspoons <b>fresh lemon juice </b>(optional, but recommended)","3 large <b>eggs</b>, at room temperature","topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) "]},{
        name: "Graham Cracker Crust",
        ingredients: ["1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)", "5 Tablespoons (70g)<b> unsalted butter</b>, melted", "1/4 cup (50g) <b>granulated sugar</b>"]
      }],
  instructions:[
    "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).",
    "<b>Make the crust</b>: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.",
    "<b>Make the filling</b>: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.",
    "<b>Prepare the simple water bath</b> (see note) Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)","Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.","Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.",
    "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days."
  ],
  notes: ["<b>Make Ahead Instructions:</b> This cheesecake can be made the day before. It has to chill for quite some time before serving. See step 5. Another way to make this cheesecake ahead of time is to freeze it. Cheesecake can be frozen up to 3 months. See instructions in blog post above.","<b>Fresh Raspberry Sauce:</b> Combine 2 cups fresh or frozen raspberries (do not thaw if using frozen), 3 Tablespoons granulated sugar, and 1 teaspoon fresh lemon juice in a small saucepan over medium heat. Stir the mixture as it begins to cook, breaking up some of the raspberries as you stir. Once simmering, continue to stir and allow to simmer for 5 minutes. Remove the pan from heat and press through a fine mesh strainer to remove the seeds. Allow the thin raspberry sauce to cool completely before using. Store for 1-2 weeks in the refrigerator.", "<b>Water Bath:</b> Some readers have baked cheesecakes with a large pan of hot water on the rack beneath the baking cheesecake. In this manner, the cheesecake does not bake directly in a roasting pan of water. This is a wonderful alternative if you do not own a large roasting pan or are nervous about your springform pan leaking. Simply place a large baking pan filled with 1 inch of hot water on the bottom rack of the oven.", "<b>Room Temperature Ingredients:</b> Bring all cold ingredients to room temperature before beginning. Room temperature ingredients combine quickly and evenly, so you won’t risk over-mixing. Also, beating cold ingredients together will result in a chunky cheesecake batter, hardly the way you want to begin!","<b>Non-US Readers:</b> With the help of other non-US readers who do not have access to graham crackers, here is a basic crust recipe you can follow for a 9-inch springform pan. 250g digestive biscuits + 100g butter + no sugar. Grind the digestive biscuits into crumbs, melt the butter, and mix with the crumbs. Press into pan and pre-bake as directed in step 2. And from what I understand, spreadable cream cheese sold in a tub in countries outside of the US is a little different from the spreadable cream cheese in the US. It’s thicker, sturdier, and more solid and should be OK to make cheesecake. I have no experience with it, but this is what I’ve heard from other non-US readers."]
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    }
  }
});