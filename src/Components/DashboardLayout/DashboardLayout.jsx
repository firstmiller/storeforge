import React from 'react'
import classes from './dashboardLayout.module.css';
import { DashboardHeader } from '@components/DashboardHeader'
import { DashboardNavbar } from '@components/DashboardNavbar'

const DashboardLayout = ({ children, userEmail, logout, page }) => {
    return (
        <>
            <DashboardHeader userEmail={userEmail} logout={logout} />
            <div className={classes.dashboard}>
                <DashboardNavbar page={page}/>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout
