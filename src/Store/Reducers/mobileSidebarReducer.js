const mobileSidebarReducer = (state = false, action) => {
    switch (action.type) {
        case 'MOBILE_SIDEBAR':
            return action.status;
        default:
            return state
    }
};

export default mobileSidebarReducer;
