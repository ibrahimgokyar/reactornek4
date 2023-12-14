const initState = {
    posts : [
        {id:'1',title:'Blog Post1',body:'Blog Post 1 İçerik'},
        {id:'2',title:'Blog Post2',body:'Blog Post 2 İçerik'},
        {id:'3',title:'Blog Post3',body:'Blog Post 3 İçerik'},
        {id:'4',title:'Blog Post4',body:'Blog Post 4 İçerik'},
        {id:'5',title:'Blog Post5',body:'Blog Post 5 İçerik'}
    ]
}

const rootReducer = (state=initState,action) => {
    console.log(action);
    if(action.type ==='DELETE_POST') {
        console.log("delete işleminden önceki liste : " +state.posts);
        let yeniPostListesi =state.posts.filter(post => {
            return post.id !== action.id
        })
        console.log("kalan liste : " +yeniPostListesi);
        return {
            ...state, posts:yeniPostListesi
        }
    }
    return state;
}
export default rootReducer;