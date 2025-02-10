function assignStages(artists, stages) {
    for (var _i = 0, stages_1 = stages; _i < stages_1.length; _i++) {
        var stage = stages_1[_i];
        for (var _a = 0, artists_1 = artists; _a < artists_1.length; _a++) {
            var artist = artists_1[_a];
            if (stage.genres.includes(artist.genre)) {
                artist.stage = stage.id;
                break;
            }
        }
    }
}
//Fonction optimisée
function assignStagesOptimized(artists, stages) {
    const genreToStageMap = new Map();
    stages.forEach(stage => {
        stage.genres.forEach(genre => {
            genreToStageMap.set(genre, stage.id);
        });
    });

    artists.forEach(artist => {
        const stageId = genreToStageMap.get(artist.genre);
        if (stageId) {
            artist.stage = stageId;
        }
    });
}


//test comparaison des fonctions 

function generateStages() {
    return [
        { id: 'stage1', name: 'Scène Rock', genres: ['Rock'] },
        { id: 'stage2', name: 'Scène Jazz', genres: ['Jazz'] },
        { id: 'stage3', name: 'Scène Pop', genres: ['Pop'] },
        { id: 'stage4', name: 'Scène Hip-Hop', genres: ['Hip-Hop'] },
        { id: 'stage5', name: 'Scène Electro', genres: ['Electro'] },
        { id: 'stage6', name: 'Scène Blues', genres: ['Blues'] },
        { id: 'stage7', name: 'Scène Funk', genres: ['Funk'] },
        { id: 'stage8', name: 'Scène Soul', genres: ['Soul'] },
        { id: 'stage9', name: 'Scène Disco', genres: ['Disco'] },
        { id: 'stage10', name: 'Scène Reggae', genres: ['Reggae'] }
    ];
}

function generateArtistsWithGenres(size) {
    const genres = ['Rock', 'Jazz', 'Pop'];
    return Array.from({ length: size }, (_, i) => ({
        id: `id_${i}`,
        name: `Artiste_${i}`,
        genre: genres[i % genres.length]
    }));
}

function runPerformanceTests() {
    const testSizes = [100, 1000, 10000];
    const stages = generateStages();

    testSizes.forEach(size => {
        const artists = generateArtistsWithGenres(size);
        console.log(`\nTest avec ${size} artistes:`);

        console.time('Attribution des scènes (optimisée)');
        assignStagesOptimized(artists, stages);
        console.timeEnd('Attribution des scènes (optimisée)');
    });
}

// Lancer les tests
runPerformanceTests();
