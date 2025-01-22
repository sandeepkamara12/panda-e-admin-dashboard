import React from 'react'
import DashboardCard from '../components/Dashboard/DashboardCard';

const Dashboard = () => {
  return (
    <div className='grid grid-rows-1 grid-cols-4 space-x-4 sm:space-x-6 mb-7'>       
       <DashboardCard title="Total Sales" color="#22c55e" value="136,578" status="up" />
       <DashboardCard title="Total Income" color="#FF5200" value="$37,802" status="down" />
       <DashboardCard title="Orders Paid" color="#CBD5E1" value="34,945" status="up" />
       <DashboardCard title="Total Visitor" color="#2377FC" value="34,945" status="up" />
    </div>
  )
}

export default Dashboard
