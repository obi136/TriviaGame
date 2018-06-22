window.onload = function () {

    var counter = 0;

    var intervalId;

    $("#countdownTimer").html("10:00");

    var countTimer = {

        time: 0,

        load: function () {
            countTimer.time = 0;
            console.log(counter);
            

        },

        start: function () {
            // if (!counter) {
                intervalId = setInterval(countTimer.count, 1000);
                counter = 600;
            // }

        },

        count: function () {
            counter--;
            console.log("counter = " + counter);
            // $("#countdownTimer").html(counter);

        
            var displayTime = countTimer.timeConverter(counter);
            $("#countdownTimer").html(displayTime);
            
            if (counter === 0){
                clearInterval(intervalId);
                alert("Time's Up");
            }

            // var displayTime = countTimer.timeConverter(countTimer.time);
            // $("#countdownTimer").html(displayTime);
        },

        timeConverter: function (t) {

            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }

            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
        
    }
    countTimer.start();

    var selValue = 0;

    $(document).ready(function(){
        $("#SubmitAnswers").click(function(){
            selValue = $("input[name=inlineRadioOptions]:checked").val();
            selValue += $("input[name=inlineRadioOptions1]:checked").val();
            selValue += $("input[name=inlineRadioOptions2]:checked").val();
            selValue += $("input[name=inlineRadioOptions3]:checked").val();
            selValue += $("input[name=inlineRadioOptions4]:checked").val();
            selValue += $("input[name=inlineRadioOptions5]:checked").val();
            // selValue += Number($("input[name=inlineRadioOptions1]:checked").val());
            // selValue += Number($("input[name=inlineRadioOptions]:checked").val());
            // selValue += Number($("input[name=inlineRadioOptions2]:checked").val());
            // selValue += Number($("input[name=inlineRadioOptions3]:checked").val());
            // selValue += Number($("input[name=inlineRadioOptions4]:checked").val());
            // selValue += Number($("input[name=inlineRadioOptions5]:checked").val());
            console.log(selValue);
            if (selValue === "111111"){
                $("#resultBlock").html("Answers Correct: 6 out of 6");
                $("#resultBlock").append("<br>Well Done!");
            }
            // else if (selValue <= 6 && selValue >= 1){
            //     $("#resultBlock").html("Answers Correct: " + selValue + " out of 6");
            //     $("#resultBlock").append("<br>You're Somewhat Car Knowledgable");
            // }
            else {
                $("#resultBlock").html("Answers Correct: 0 out of 6");
                $("#resultBlock").append("<br>Read More Car & Driver!");
            }

        });
    });


}