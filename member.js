function skillsMember(state = {skills: [], isFetching: false, didInvalidate: false}, action) {
    switch (action.type) {
        case REQUEST_SKILLS:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        })
        case RECEIVE_SKILLS:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            skills: action.skills,
            lastUpdated: action.receivedAt
        })
        default:
        return state
    }
}
