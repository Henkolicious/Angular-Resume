<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "Prefix" => "",
        "From" => "Ongoing",
        "Dividor" => "",
        "To" => "",
        "Heading" => "Azure 70-532 Certificate",
        "Description" => "Developing Microsoft Azure Solutions. Candidates of this exam are experienced in designing, programming, implementing, automating, and monitoring Microsoft Azure solutions. Candidates should be proficient with development tools, techniques, and approaches used to build scalable and resilient solutions.",
        "Logo" => "assets/images/azure_logo.jpg",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Microsoft_Azure",
    ),
    array(
        "Id" => "2",
        "Prefix" => "5 days",
        "From" => "2017-06-26",
        "Dividor" => "-",
        "To" => "2017-06-30",
        "Heading" => "Masterclass C# Development",
        "Description" => "The C# Masterclass moves beyond the syntax and semantics. It's focus is on applying C#, along with selected parts of the .Net Framework, to build elegant, extensible, multi-paradigm solutions to everyday problems.",
        "Logo" => "assets/images/informator_logo.png",
        "List" => array(
            "Lambda and Delegates",
            "OO and dynamic",
            "Classes: outside-in",
            "Design patterns",
            "Dependency Inversion",
            "Generic Programming",
            "Higher Order Programming",
            "Reflection and attributes",
            "Event driven architecture",
            "Encoding and Unicode",
        ),
        "Link" => "https://informator.se/utbildningar/systemutveckling/net-visual-studio/net_generellt/c-master-class",
    ),
    array(
        "Id" => "3",
        "Prefix" => "5 days",
        "From" => "2016-09-12",
        "Dividor" => "-",
        "To" => "2016-09-16",
        "Heading" => "Developing Applications in IBM Business Process Manager Advanced V8.5.5 - I",
        "Description" => "Business process management is a discipline in operations management that uses various methods to discover, model, analyze, measure, improve, optimize, and automate business processes.",
        "Logo" => "assets/images/arrow_logo.jpg",
        "List" => array(
        ),
        "Link" => "https://edu.arrow.com/uk/c/index.html/129/websphere-course-list",
    ),
    array(
        "Id" => "4",
        "Prefix" => "5 days",
        "From" => "2016-08-22",
        "Dividor" => "-",
        "To" => "2016-08-26",
        "Heading" => "Process Implementing with IBM Business Process Manager Standard-Adv - V8.5.6, I - II",
        "Description" => "Business process management is a discipline in operations management that uses various methods to discover, model, analyze, measure, improve, optimize, and automate business processes.",
        "Logo" => "assets/images/arrow_logo.jpg",
        "List" => array(
        ),
        "Link" => "https://edu.arrow.com/uk/c/index.html/129/websphere-course-list",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
