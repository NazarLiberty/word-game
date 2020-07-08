const data = [
    {
        completed: false,
        level: 1,
        templateNumber: 1,
        words: [
            { word: 'Тарас', guessed: false, },
            { word: 'Траса', guessed: false },
            { word: 'Тара', guessed: false },
            { word: 'Сара', guessed: false },
            { word: 'Раса', guessed: false },
            { word: 'Раста', guessed: false }
        ],
        letters: [
            { letter: 'А', id: 1 },
            { letter: 'Р', id: 2 },
            { letter: 'С', id: 3 },
            { letter: 'А', id: 4 },
            { letter: 'Т', id: 5 },
        ],
        miscWords: [{ word: "раст", guessed: false }]
    },
    {
        completed: false,
        level: 2,
        templateNumber: 2,
        words: [
            { word: 'декор', guessed: false, },
            { word: 'кредо', guessed: false },
            { word: 'кедр', guessed: false },
            { word: 'деко', guessed: false },
            { word: 'код', guessed: false },
            { word: 'рок', guessed: false }
        ],
        letters: [
            { letter: 'К', id: 1 },
            { letter: 'Р', id: 2 },
            { letter: 'О', id: 3 },
            { letter: 'Д', id: 4 },
            { letter: 'Е', id: 5 },
        ],
        miscWords: [
            { word: 'док', guessed: false },
            { word: 'орк', guessed: false },
            { word: 'докер', guessed: false },
            { word: 'кодер', guessed: false },
            { word: 'корд', guessed: false },
        ]
    },
    {
        completed: false,
        level: 3,
        templateNumber: 3,
        words: [
            { word: 'колба', guessed: true, },
            { word: 'бокал', guessed: true },
            { word: 'кедр', guessed: true },
            { word: 'деко', guessed: true },
            { word: 'код', guessed: false },
            { word: 'кола', guessed: false }
        ],
        letters: [
            { letter: 'К', id: 1 },
            { letter: 'Р', id: 2 },
            { letter: 'О', id: 3 },
            { letter: 'Д', id: 4 },
            { letter: 'Е', id: 5 },
        ],
        miscWords: [
            { word: 'док', guessed: false },
            { word: 'орк', guessed: false },
            { word: 'докер', guessed: false },
            { word: 'кодер', guessed: false },
            { word: 'корд', guessed: false },
        ]
    }
]
export default data