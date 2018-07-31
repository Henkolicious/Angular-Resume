<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "Prefix" => "",
        "From" => "2018-01",
        "Dividor" => "-",
        "To" => "2018-03",
        "Credits" => "3HP",
        "Heading" => "Machine Learning (ML)",
        "Description" => "Implementing ML algorithms and techniques, at Blekinge Tekniska Högskola.",
        "Logo" => "assets/images/ML_logo.jpg",
        "List" => array(
            "K-nearest neighbor",
            "K-means",
            "Correlation coefficient",
            "Artificial neural network's and Gradient Descents",
            "Artificial neural network's and Deep Learning",
            "Convolutional Neural Network's and Decition Trees",
            "Clustering methods",
            "Practical applications in data mining"
        ),
        "Link" => "https://www.bth.se/eng/courses/C5650/20181/",
    ),
    array(
        "Id" => "2",
        "Prefix" => "",
        "From" => "2018-09",
        "Dividor" => "-",
        "To" => "2018-10",
        "Credits" => "5HP",
        "Heading" => "Artificial Intelligence (AI)",
        "Description" => " In computer science, AI research is defined as the study of \"intelligent agents\". Any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.",
        "Logo" => "assets/images/AI_logo.jpg",
        "List" => array(
        ),
        "Link" => "http://www.uu.se/utbildning/utbildningar/selma/kurser/?kKod=1DL340&lasar=18/19&typ=1",
    ),
    array(
        "Id" => "3",
        "Prefix" => "",
        "From" => "2018-09",
        "Dividor" => "-",
        "To" => "2019-01",
        "Credits" => "7,5HP",
        "Heading" => "Block chain technology",
        "Description" => "A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp and transaction data. Decentralized system.",
        "Logo" => "assets/images/blockchain_logo.jpg",
        "List" => array(
        ),
        "Link" => "https://www.hv.se/utbildning/kurs/bitcoin-och-blockchain-teknik-och-teori-med-python-deltid-distans-bbt200/?anmkod=HV-33067&termin=HT%202018",
    ),
    array(
        "Id" => "4",
        "Prefix" => "",
        "From" => "?",
        "Dividor" => "-",
        "To" => "?",
        "Credits" => "7,5HP",
        "Heading" => "Next up - Mathematical Statistics",
        "Description" => "Mathematical statistics is the application of probability theory, a branch of mathematics, to statistics, as opposed to techniques for collecting statistical data.",
        "Logo" => "assets/images/math_logo.jpg",
        "List" => array(
            "Probability",
            "Statistics",
            "Stochastic Processes",
        ),
        "Link" => "https://liu.se/en/organisation/liu/mai/ms",
    ),
    array(
        "Id" => "5",
        "Prefix" => "",
        "From" => "?",
        "Dividor" => "-",
        "To" => "?",
        "Credits" => "7,5HP",
        "Heading" => "Next up - Data Mining",
        "Description" => "Data mining is the process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.",
        "Logo" => "assets/images/DM_logo.png",
        "List" => array(
            "Preprocessing",
            "Patterns",
            "Modeling",
            "Evaluation",
        ),
        "Link" => "https://en.wikipedia.org/wiki/Data_mining",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
