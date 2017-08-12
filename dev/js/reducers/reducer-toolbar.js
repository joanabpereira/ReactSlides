export default function (state = null, action) {
    switch (action.type) {
        case 'NEW_SLIDE':
            return action.payload;
            break;
    }
    return state;
}
