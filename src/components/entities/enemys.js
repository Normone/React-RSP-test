export const Enemys = {
    master: {
        name: 'Мастер',
        hp: 100,
        lines: {
            win: ['Ученик превзошёл учителя!', 'Удивительно!'],
            defeat: ['Попробуй снова!', 'Ты не готов!'],
            standoff: ['Ещё немного!', 'Было близко!']
        }
    },
    boss: {
        name: 'Boss of this gym',
        hp: 999,
        lines: {
            win: ['Fuck, nooo!', 'My ass!'],
            defeat: ['Fuck you!', 'Fisting is 300 bucks!'],
            standoff: ['Too close!', "I'm almost done!"]
        }
    }
}