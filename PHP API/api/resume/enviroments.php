<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "Prefix" => "Microsoft Windows",
        "Heading" => "Windows Operating System (OS)",
        "Description" => "I have been using Windows OS all my life, from v3.11 to v10 and I have a pretty good understanding of it.",
        "Logo" => "assets/images/windows_logo.png",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Microsoft_Windows",
    ),
    array(
        "Id" => "2",
        "Prefix" => "Linux / Unix",
        "Heading" => "Linux / Unix",
        "Description" => "I have some advanced knowledge of Linux distributions. Mostly university courses regarding Linux - in depth.",
        "Logo" => "assets/images/linux_logo.jpg",
        "List" => array(
            "Administrating UNIX systems",
            "Raspberry pies",
            "sudo make me a sandwich (xkcd)",
        ),
        "Link" => "https://en.wikipedia.org/wiki/Linux",
    ),
    array(
        "Id" => "3",
        "Prefix" => "IIS",
        "Heading" => "Internet Information Service (IIS)",
        "Description" => "Hence the common day to day work in the Microsoft stack, ofcourse I have encounterd the IIS. Guess you could say I know the basics here as well.",
        "Logo" => "assets/images/iis_logo.png",
        "List" => array(
            "Hosting",
            "Web-apps",
            "Services",
            "Other",
        ),
        "Link" => "https://en.wikipedia.org/wiki/Internet_Information_Services",
    ),
    array(
        "Id" => "4",
        "Prefix" => "EpiServer 6",
        "Heading" => "EpiServer 6 - Content Managment System (CMS)",
        "Description" => "Been working in a project where EpiServer 6 was used. Defining pages and displaying properties pretty much, however there is alot more to this CMS tool.",
        "Logo" => "assets/images/epi_logo.png",
        "List" => array(
        ),
        "Link" => "https://www.episerver.se/",
    ),
    array(
        "Id" => "5",
        "Prefix" => "VS 2010-2017",
        "Heading" => "Visual Studio - Integrated Development Enviroment (IDE)",
        "Description" => "Almost all of why work have gone through this IDE. Unless there are some lightweigh applications/scripts or even Java for instance.",
        "Logo" => "assets/images/vs_logo.jpg",
        "List" => array(
        ),
        "Link" => "https://www.visualstudio.com/",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
