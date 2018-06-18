<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => 1,
        "Language" => "C#",
        "Knowledge" => 60,
        "Description" => "This is the primary language I currently use in my day to day work. Guess I know a thing or two here 😊",
    ),
    array(
        "Id" => 2,
        "Language" => "C++",
        "Knowledge" => 30,
        "Description" => "Most of the work from my University degree was made in this language. Assignments, O(n) notation algorithms, data structures and more.",
    ),
    array(
        "Id" => 3,
        "Language" => "Java",
        "Knowledge" => 20,
        "Description" => "Made some basic console applications early on and a tiny webb-app in my University studies.",
    ),
    array(
        "Id" => 4,
        "Language" => "AngularJS",
        "Knowledge" => 20,
        "Description" => "I made a \"Magic mirror\" at home with this.",
    ),
    array(
        "Id" => 5,
        "Language" => "Angular 2+",
        "Knowledge" => 30,
        "Description" => "This page is built with Angular, but I have not build anything in production yet.",
    ),
    array(
        "Id" => 6,
        "Language" => "HTML",
        "Knowledge" => 60,
        "Description" => "Well, I'd say I know the basics here. Pretty much just elements with attributes.",
    ),
    array(
        "Id" => 7,
        "Language" => "CSS",
        "Knowledge" => 50,
        "Description" => "I'm alright, I guess. Try this page out on different browser or devices for instance.",
    ),
    array(
        "Id" => 8,
        "Language" => "JavaScript",
        "Knowledge" => 40,
        "Description" => "var omg = \"everything is a string language\";",
    ),
    array(
        "Id" => 9,
        "Language" => "TypeScript",
        "Knowledge" => 40,
        "Description" => "I Do know a little here aswell.",
    ),
    array(
        "Id" => 10,
        "Language" => "PHP",
        "Knowledge" => 40,
        "Description" => "Used when I have an apache server, e.g one.com hosting. Don't know alot though, but propably enough to make some magic happen.",
    ),
    array(
        "Id" => 11,
        "Language" => "PowerShell",
        "Knowledge" => 10,
        "Description" => "Done some small scripts with this.",
    ),
    array(
        "Id" => 12,
        "Language" => "MS T-SQL",
        "Knowledge" => 40,
        "Description" => "This is the other part of my day to day work. Stored prosedures mostly combined with Entity Framework.",
    ),
    array(
        "Id" => 13,
        "Language" => ".NET MVC",
        "Knowledge" => 20,
        "Description" => "Guess I can make some magic happen here, have not used in production yet though.",
    ),
    array(
        "Id" => 14,
        "Language" => ".NET Web forms",
        "Knowledge" => 50,
        "Description" => "I do know a some stuffs here aswell. But I don't really like this kind of post-back shenanigans.",
    ),
    array(
        "Id" => 15,
        "Language" => ".NET WPF (C# Desktop)",
        "Knowledge" => 40,
        "Description" => "Been working in a pretty big desktop application for a relatively large scale customer. The project setup is domain models, services/databases, reports and the client application. Structure of the application is MVVM.",
    ),
    array(
        "Id" => 16,
        "Language" => "Python",
        "Knowledge" => 15,
        "Description" => "Written a few lines for Machine Lerning.",
    ),
    array(
        "Id" => 17,
        "Language" => "Arduino (C/C++)",
        "Knowledge" => 10,
        "Description" => "I got a small dev-kit at home that I'm fiddeling with when I got some spare time.",
    ),
    array(
        "Id" => 18,
        "Language" => "Go-lang",
        "Knowledge" => 5,
        "Description" => "Tried this out for a bit in Advent of Code.",
    ),
    array(
        "Id" => 19,
        "Language" => "SASS / SCSS",
        "Knowledge" => 40,
        "Description" => "SASS or SCSS is quite important to understand for graceful degradations and for cross browser support.",
    ),
    array(
        "Id" => 1337,
        "Language" => "Ping pong 🏓",
        "Knowledge" => 100,
        "Description" => "I'm better than you, challange accepted? 🙊",
    )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>