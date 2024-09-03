<?php

header('Content-Type: application/json');

$chatFile = 'chat.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Read and return chat messages

} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Append a new message
   
}

