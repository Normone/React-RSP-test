export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return state === 'light' ? 'dark' : 'light';
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default:
            return state;
    }
    // - Это пример как нужно возвращать состояние через reducer
    // switch (action.type) {
    //     case 'toggle':
    //         return { ...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    //     case 'light':
    //         return { ...state, theme: 'light' };
    //     case 'dark':
    //         return { ...state, theme: 'dark' };
    //     default:
    //         return state;
    // }
};