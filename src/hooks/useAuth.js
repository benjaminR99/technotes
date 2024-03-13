import {selectCurrentToken} from '../features/auth/authSlice';
import {jwtDecode} from 'jwt-decode';
import {useSelector} from 'react-redux' ;


const useAuth = () => {
    let isManager = false;
    let isAdmin = false ;
    let status = 'Employee' ;
    const token = useSelector(selectCurrentToken);

    if(token){
        const decoded = jwtDecode(token)
        const {username, roles} = decoded.userinfo ;
       
        if(roles.includes('Manager')) {
            status = 'Manager';
            isManager = true
        }
        if(roles.includes('Admin')) {
            status = 'Admin'
            isAdmin = true
        }

        return {  username, roles, isManager, isAdmin, status}
    }
    return {  username:'' , roles:[], isManager, isAdmin, status}
}

export default useAuth