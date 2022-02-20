let player = {
    Name: "Harry",
    Health: 100,
    Fun: 50,
    eat: function(food) {
        if (food == "Apple") {
            console.log("You ate an apple!");
            this.Health += 10;
            console.log(this.Health);
        } else if (food == "Candy") {
            console.log("You ate some candy!");

            this.Health -= 10;

            console.log(this.Health);

            this.Fun += 10;
            console.log(this.Fun);
        }
    },
    play: function() {
        console.log("You're having fun!");

        this.Fun += 10;
        console.log(this.Fun);
    },
};

console.log(player);
player.eat("Apple");
player.eat("Candy");
player.play();