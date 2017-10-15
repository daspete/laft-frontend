import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'




export const setToken = (token) => {
    if(process.SERVER_BUILD) return

    if(typeof window !== 'undefined'){
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
    }
    
    Cookie.set('jwt', token)
}
  
export const unsetToken = () => {
    if(process.SERVER_BUILD) return

    if(typeof window !== 'undefined'){
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('secret')
        window.localStorage.setItem('logout', Date.now())
    }

    Cookie.remove('jwt')

    if(typeof location !== 'undefined') location.reload()
}


export const getUserFromCookie = (req) => {
    if(!req.headers.cookie) return
   
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
    
    if(!jwtCookie) return
    
    const jwt = jwtCookie.split('=')[1]
    
    return jwtDecode(jwt)
}

export const getUserFromLocalStorage = () => {
    const json = window.localStorage.user

    return json ? JSON.parse(json) : undefined
}

export const extractInfoFromHash = () => {
    if(process.SERVER_BUILD) return
    
    const { id_token, state } = getQueryParams()
    
    return {
        token: id_token,
        secret: state
    }
}




export const setSecret = (secret) => window.localStorage.setItem('secret', secret)

export const checkSecret = (secret) => window.localStorage.secret === secret


const getQueryParams = () => {
    const params = {}

    window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
        params[$1] = $3
    })

    return params
}

