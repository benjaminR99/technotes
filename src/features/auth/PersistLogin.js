import { Outlet, Link } from "react-router-dom"
import { useEffect } from 'react'
import { useRefreshMutation } from "./authApiSlice"
import { useSelector } from 'react-redux'
import { selectCurrentToken } from "./authSlice"

const PersistLogin = () => {
    
    const token = useSelector(selectCurrentToken);
    
    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()


    useEffect(() => {
            const verifyRefreshToken = async () => {
                console.log('verifying refresh token')
                try {
                    //const response = 
                    await refresh()
                }
                catch (err) {
                    console.error(err)
                }
            }
            if (!token ) verifyRefreshToken()
        
    }, [])


    let content
    if (isLoading) { 
        console.log('loading')
        content = <p>Loading...</p>
    } else if (isError) { 
        console.log('error')
        content = (
            <p className='errmsg'>
                {error.data?.message}
                <Link to="/login">Please login again</Link>.
            </p>
        )
    } else if (isSuccess ) { 
        console.log('success')
        content = <Outlet />
    } else if (token && isUninitialized) { 
        console.log('token and uninit')
        console.log(isUninitialized)
        content = <Outlet />
    }

    return content
}
export default PersistLogin