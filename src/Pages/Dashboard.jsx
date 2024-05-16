import React, { useContext, useEffect, useState } from 'react'
import DashboardHeader from '../Components/DashboardHeader/DashboardHeader'
import { AuthContext } from '../context';


const Dashboard = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/api/login', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth')
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    setIsAuth(false);
                    delete localStorage.auth;
                }
                else if (response.status === 200) {
                    setIsAuth(true);
                    console.log('Запрос успешен')
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
    }, []);
    return (
        <div>
            <DashboardHeader userEmail={userEmail}/>
        </div>
    )
}

export default Dashboard
