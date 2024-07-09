
$(".boxIcon").click(function(){
        $(".boxContainer").addClass("open");
    });
    $(".closeing").click(function(){
        $(".boxContainer").removeClass("open");
});
$("#about h2").on("click",function(){
        $("p").slideUp(500);
        $(this).next("p").stop().slideToggle(500);
});
let maxChar = 100;
$("#messageTextarea").on("input", function(){
        let currChar = $(this).val();
        let remainingChars = maxChar - currChar.length;
        if (remainingChars >= 0){
            $(".counterChar").text(remainingChars);
        } else {
            $(".counterChar").text("your available characters finished");
        }
});
function calculateCountdown(targetDate){
    const targetDateTime = new Date(targetDate).getTime();
    setInterval(function(){
        const now = new Date().getTime();
        const timeDifference = (targetDateTime - now);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
       $(".theDay").html(`${days} D`) ;
       $(".thehour").html(`${hours} h`) ;
       $(".theminute").html(`${minutes} m`);
       $(".thesecond").html(`${seconds} s`)
    }, 1000);
}
calculateCountdown("2025-06-19T00:00:00");