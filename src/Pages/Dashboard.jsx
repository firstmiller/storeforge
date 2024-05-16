import React, { useContext, useEffect, useState } from 'react'
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader'
import { AuthContext } from '../context';


const Dashboard = () => {

    const {setIsAuth} = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState();

    const logout = () => {
        setIsAuth(false);
        delete localStorage.isAuth;
        delete localStorage.auth;
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/login', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    logout();
                }
            });
        fetch('http://localhost:8080/api/auth/user', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => response.json())
            .then((user) => {
                setUserEmail(user[1]);
            })
        .catch((e) => {
            console.log(e);
        });
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <DashboardHeader userEmail={userEmail} logout={logout}/>
        </div>
    )
}

export default Dashboard
