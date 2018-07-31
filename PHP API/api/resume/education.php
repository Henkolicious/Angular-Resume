<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "Prefix" => "University",
        "From" => "2013",
        "Dividor" => "-",
        "To" => "2016",
        "Heading" => "Degree of Bachelor of Science with a major in Computer Enineering",
        "Description" => "This is currently my main degree. Been thinking about getting a masters degree later on.",
        "Logo" => "assets/images/miun_logo.png",        
        "List" => array(
            "Programming",
            "Mathematics",
            "Theory",
            "Algorithms and datastructurs",
            "Networks",
            "Security",
            "Other",
        ),
        "Credits" => "180HP",
        "Link" => "https://www.miun.se/utbildning/program/data-och-it/datateknik/utbildningsplan/?utbildningsplanid=1069",
    ),
    array(
        "Id" => "2",
        "Prefix" => "High School",
        "From" => "2003",
        "Dividor" => "-",
        "To" => "2006",
        "Heading" => "Natural Science - alignment to Mathematics and Computers",
        "Description" => "University-preparatory high school program (gymnasium), primarily designed to prepare students for higher education.",
        "Logo" => "assets/images/sg_logo.png",        
        "List" => array(
        ),
        "Credits" => "2500 Points",
        "Link" => "https://gymnasium.sundsvall.se/program/naturvetenskapsprogrammet/",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
