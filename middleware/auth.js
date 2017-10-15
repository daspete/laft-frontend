import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function({isServer, store, req}){
    if(isServer && !req) return;

    const user = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()

    console.log(user);

    store.commit('SET_USER', user)
}

// export default function({ store, error }){
//     if(!store.state.authUser){
//         return error({
//             message: 'You are not logged in',
//             statusCode: 401
//         })
//     }

//     console.log('logged in');
// }