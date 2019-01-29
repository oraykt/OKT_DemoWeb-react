const initState = {
    posts: [
        { id: 1, title: 'Baslik 1', body: 'Body 1' },
        { id: 2, title: 'Baslik 2', body: 'Body 2' },
        { id: 3, title: 'Baslik 3', body: 'Body 3' },
        { id: 4, title: 'Baslik 4', body: 'Body 4' },
        { id: 5, title: 'Baslik 5', body: 'Body 5' },
        { id: 6, title: 'Baslik 6', body: 'Body 6' }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
        console.log(newPosts)
    }
    return state;
}

export default rootReducer