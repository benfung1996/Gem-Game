$(document).ready(function() {

    var ranNum = Math.floor((Math.random() *  102) +19);

    $("#random-number").text(ranNum);

    var counter = 0;
    var wins = 0;
    var losses = 0;

    var redValue = Math.floor((Math.random() * 12) +1);
    var blueValue = Math.floor((Math.random() * 12) +1);
    var goldValue = Math.floor((Math.random() * 12) +1);
    var greenValue = Math.floor((Math.random() * 12) +1);

    console.log(redValue);
    console.log(blueValue);
    console.log(goldValue);
    console.log(greenValue);

    $("#wins").text(wins);
    $("#losses").text(losses);

    $("#red").on("click", function() {
       
        counter = counter + redValue;
        $("#score").text(counter);
        checker();

    })

    $("#blue").on("click", function() {
       
        counter = counter + blueValue;
        $("#score").text(counter);
        checker();
        
    })

    $("#gold").on("click", function() {
       
        counter = counter + goldValue;
        $("#score").text(counter);
        checker();
        
    })

    $("#green").on("click", function() {
       
        counter = counter + greenValue;
        $("#score").text(counter);
        checker();
        
    })

    function checker() {

        if (counter === ranNum) {
            alert("Winner!!");
            wins++;
            $("#wins").text(wins);
            reset();
        }

        else if (counter > ranNum) {
            alert("Losser!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    };

    function reset() {

        ranNum = Math.floor((Math.random() *  102) +19);

        $("#random-number").text(ranNum);

        counter = 0;
        
        $("#score").text(counter);
    
        redValue = Math.floor((Math.random() * 12) +1);
        blueValue = Math.floor((Math.random() * 12) +1);
        goldValue = Math.floor((Math.random() * 12) +1);
        greenValue = Math.floor((Math.random() * 12) +1);

    };

});

