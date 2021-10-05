const selectedChatReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_CHAT':
            return action.chat;
        default:
            return state
    }
};

export default selectedChatReducer;
