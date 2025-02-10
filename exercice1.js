function findArtistIndex(artists, name) {
    for (var i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
            return artists[i].id;
        }
    }
    return -1;
}
//Version optimisée 
function findArtistIndexOptimized(artists, name) {
    var left = 0;
    var right = artists.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        var midName = artists[mid].name;
        if (midName === name) {
            return artists[mid].id;
        }
        else if (midName < name) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
//Test des fonctions
// Génération des données de test
function generateArtists(size) {
    var artists = [];
    for (var i = 0; i < size; i++) {
        artists.push({
            id: "id_".concat(i),
            name: "Artiste_".concat(i)
        });
    }
    return artists.sort(function (a, b) { return a.name.localeCompare(b.name); });
}
// Tests de performance
function runPerformanceTests() {
    var testSizes = [100, 1000, 10000, 100000];
    testSizes.forEach(function (size) {
        var artists = generateArtists(size);
        var searchName = "Artiste_".concat(Math.floor(size / 2));
        console.log("\nTest avec ".concat(size, " artistes:"));
        console.time('Recherche linéaire');
        findArtistIndex(artists, searchName);
        console.timeEnd('Recherche linéaire');
        console.time('Recherche binaire');
        findArtistIndexOptimized(artists, searchName);
        console.timeEnd('Recherche binaire');
    });
}
// Exécution des tests
console.log('Démarrage des tests de performance...');
runPerformanceTests();
//Démarrage des tests de performance...
// Test avec 100 artistes:
// Recherche linéaire: 0.058ms
// Recherche binaire: 0.024ms
// Test avec 1000 artistes:
// Recherche linéaire: 0.012ms
// Recherche binaire: 0.066ms
// Test avec 10000 artistes:
// Recherche linéaire: 0.122ms
// Recherche binaire: 0.015ms
// Test avec 100000 artistes:
// Recherche linéaire: 0.265ms
// Recherche binaire: 0.005ms
