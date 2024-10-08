"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const filter_1 = require("./filter");
// Define patterns for "Bitly"
const bitlyPatterns = [
    /bitly\.com/i,
    /bit\.ly/i,
    /bitly/i
];
// Create a filter instance for "Bitly"
const bitlyFilter = new filter_1.ContentFilter(bitlyPatterns);
// Sample texts
const samples = [
    'I had a problem with bit.ly link and Bitly service was not helpful.',
    'Check out this new feature at bit.ly/xyz',
    'Here’s a link to bitly.com for you.',
    'Bit.ly links are great!',
    'The service is very good.'
];
// Test the filter
samples.forEach(text => {
    console.log(`Text: "${text}"`);
    console.log(`Relevant mention found: ${bitlyFilter.filterText(text)}`);
});
