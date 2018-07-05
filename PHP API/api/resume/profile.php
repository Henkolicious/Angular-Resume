<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    "Id" => "1",
    "FirstName" => "Henrik",
    "LastName" => "Larsson",    
    "Greeting" => "hello there",
    "DateOfBirth" => "1987-07-16",
    "Occupation" => "Software Engineer",
    "City" => "Uppsala",
    "Employer" => "Sogeti Sverige AB",
    "Image" => "assets/images/henlarss.jpg",
    "Age" => "",
    "LinkedInUrl" => "https://www.linkedin.com/in/henrik-larsson-2279b2105/",
    "FacebookUrl" => "https://www.facebook.com/henrik.larsson.1654",
    "GithubUrl" => "https://github.com/Henkolicious",
    "Link" => "https://hr.nih.gov/working-nih/competencies/competencies-proficiency-scale",
    "EmploymentLogo" => "assets/images/sogeti_logo.png",
    "DescriptionList" => array (    
        "I'm a meticulous and an analytical developer with a unviversity degree.
        I have a quite broad programming knowledge and I'm currently enjoying working within the Microsoft stack (C#).
        For a more detaild description, have a look at the other tabs.",                        
        "As a person I'm a well structured and social whom often enjoys learning new things. I can
        easely adjust to different problems and prefers to work within a group, but can of course work alone aswell. Some
        of my preferences are clear customer goals and problem statments.",                        
        "Some spare times intrests are workouts (gym mostly), playing a variaty of sports and some brain teasing puzzles or games."
    ),
    "MainLanguage" => "Swedish, mother tongue",
    "SecondaryLanguage" => "English, excellent",
);

echo json_encode($arr, JSON_PRETTY_PRINT);
