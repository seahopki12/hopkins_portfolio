

$(".dropdown-item").click(function(){
    let portfolioTxt = $(this).text(); 
    // let replacedTxt = document.querySelector("#portfolioTitle");
    $("#portfolioTitle").text(portfolioTxt);
})