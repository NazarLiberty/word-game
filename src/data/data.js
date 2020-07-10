const data = [
    {
        completed: false,
        level: 1,
        templateNumber: 1,
        words: [
            { word: 'Тарас', guessed: false, stretch: false, },
            { word: 'Траса', guessed: false, stretch: false, },
            { word: 'Тара', guessed: false, stretch: true, },
            { word: 'Сара', guessed: false, stretch: true, },
            { word: 'Раса', guessed: false, stretch: true, },
            { word: 'Раста', guessed: false, stretch: true, }
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
            { word: 'декор', guessed: false, stretch: false, },
            { word: 'кредо', guessed: false, stretch: true, },
            { word: 'кедр', guessed: false, stretch: false, },
            { word: 'деко', guessed: false, stretch: true, },
            { word: 'код', guessed: false, stretch: false, },
            { word: 'рок', guessed: false, stretch: true, }
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
            { word: 'блок', guessed: false, stretch: false, },
            { word: 'бокал', guessed: false, stretch: false, },
            { word: 'кола', guessed: false, stretch: false, },
            { word: 'лак', guessed: false, stretch: true, },
            { word: 'бак', guessed: false, stretch: true, },
            { word: 'колба', guessed: false, stretch: true, }
        ],
        letters: [
            { letter: 'К', id: 1 },
            { letter: 'О', id: 2 },
            { letter: 'А', id: 3 },
            { letter: 'Б', id: 4 },
            { letter: 'Л', id: 5 },
        ],
        miscWords: [
            { word: 'бал', guessed: false },
            { word: 'лоб', guessed: false },
            { word: 'бока', guessed: false },
            { word: 'або', guessed: false },
            { word: 'кал', guessed: false },
            { word: 'бола', guessed: false },
        ]
    },
    {
        completed: false,
        level: 4,
        templateNumber: 4,
        words: [
            { word: 'порт', guessed: false, stretch: false, },
            { word: 'тропа', guessed: false, stretch: false, },
            { word: 'ато', guessed: false, stretch: true, },
            { word: 'таро', guessed: false, stretch: false, },
            { word: 'рот', guessed: false, stretch: true, },
            { word: 'апорт', guessed: false, stretch: true, }
        ],
        letters: [
            { letter: 'Р', id: 1 },
            { letter: 'О', id: 2 },
            { letter: 'Т', id: 3 },
            { letter: 'А', id: 4 },
            { letter: 'П', id: 5 },
        ],
        miscWords: [
            { word: 'трап', guessed: false },
            { word: 'пар', guessed: false },
            { word: 'рота', guessed: false },
            { word: 'про', guessed: false },
            { word: 'пора', guessed: false },
            { word: 'пат', guessed: false },
            { word: 'тор', guessed: false },
            { word: 'троп', guessed: false },
        ]
    },
    {
        completed: false,
        level: 5,
        templateNumber: 5,
        words: [
            { word: 'корм', guessed: false, stretch: false, },
            { word: 'корма', guessed: false, stretch: false, },
            { word: 'омар', guessed: false, stretch: true, },
            { word: 'ром', guessed: false, stretch: false, },
            { word: 'рак', guessed: false, stretch: true, },
            { word: 'комар', guessed: false, stretch: true, },
            { word: 'мак', guessed: false, stretch: false, },
            { word: 'акр', guessed: false, stretch: true, },
            { word: 'орк', guessed: false, stretch: true, },
        ],
        letters: [
            { letter: 'О', id: 1 },
            { letter: 'Р', id: 2 },
            { letter: 'К', id: 3 },
            { letter: 'А', id: 4 },
            { letter: 'М', id: 5 },
        ],
        miscWords: [{ word: "кома", guessed: false },
        { word: "кора", guessed: false },
        { word: "окра", guessed: false },
        { word: "рок", guessed: false },
        { word: "мор", guessed: false },]
    }
]
export default data