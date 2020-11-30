let portfolio = [{
    name: "Vacation Planner",
    gif: "Assets/Vacation Planner.gif",
    github: "https://github.com/seahopki12/vacation_planner",
    gitpage: "https://seahopki12.github.io/vacation_planner/"
},
{
    name: "Weather Dashboard",
    gif: "Assets/Weather Dashboard.gif",
    github: "https://github.com/seahopki12/weather_dashboard",
    gitpage: "https://seahopki12.github.io/weather_dashboard/"
},
{
    name: "Work Day Scheduler",
    gif: "Assets/Work Day Scheduler.gif",
    github: "https://github.com/seahopki12/work_day_scheduler",
    gitpage: "https://seahopki12.github.io/work_day_scheduler/"
},
{
    name: "Coding Quiz",
    gif: "Assets/Coding Quiz.gif",
    github: "https://github.com/seahopki12/coding_quiz",
    gitpage: "https://seahopki12.github.io/coding_quiz/"
},
{
    name: "Password Generator",
    gif: "Assets/Password Generator.gif",
    github: "https://github.com/seahopki12/password_generator",
    gitpage: "https://seahopki12.github.io/password_generator/"
},
{
    name: "Eat-Da-Burger!",
    gif: "Assets/Eat-Da-Burger!.gif",
    github: "https://github.com/seahopki12/burger",
    gitpage: "https://gentle-wave-77495.herokuapp.com/"
},
{
    name: "Holiday Wish List",
    gif: "Assets/Wish List.gif",
    github: "https://github.com/seahopki12/holiday_wish_list",
    gitpage: "https://project-two-gwu.herokuapp.com/"
}];

$(".dropdown-item").click(function(){
    let portfolioTxt = $(this).text();
    let portfolioGif = `Assets/${portfolioTxt}.gif`;
    // let replacedTxt = document.querySelector("#portfolioTitle");
    $("#portfolio").css("visibility", "visible");
    $("#portfolioTitle").text(portfolioTxt);
    $("#gif").attr("src", portfolioGif);

    if (portfolioTxt === "Vacation Planner") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/vacation_planner");
        $("#gitPageLink").attr("href", "https://seahopki12.github.io/vacation_planner/" );
    } else if (portfolioTxt === "Weather Dashboard") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/weather_dashboard");
        $("#gitPageLink").attr("href", "https://seahopki12.github.io/weather_dashboard/" );
    } else if (portfolioTxt === "Work Day Scheduler") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/work_day_scheduler");
        $("#gitPageLink").attr("href", "https://seahopki12.github.io/work_day_scheduler/" );
    } else if (portfolioTxt === "Coding Quiz") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/coding_quiz");
        $("#gitPageLink").attr("href", "https://seahopki12.github.io/coding_quiz/" );
    } else if (portfolioTxt === "Password Generator") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/password_generator");
        $("#gitPageLink").attr("href", "https://seahopki12.github.io/password_generator/" );
    } else if (portfolioTxt === "Eat-Da-Burger!") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/burger");
        $("#gitPageLink").attr("href", "https://gentle-wave-77495.herokuapp.com/" );
    } else if (portfolioTxt === "Holiday Wish List") {
        $("#gitHubLink").attr("href", "https://github.com/seahopki12/holiday_wish_list");
        $("#gitPageLink").attr("href", "https://project-two-gwu.herokuapp.com/");
    }
});