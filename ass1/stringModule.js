// stringModule.js
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize; // Export the function