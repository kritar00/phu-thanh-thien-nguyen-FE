import React, { FC, PropsWithChildren } from 'react'
import LeftSidebar from './LeftSidebar'
import { SidebarProvider } from '../ui/sidebar'
import Header from './components/Header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <LeftSidebar />
      <main className='w-full h-screen relative flex flex-col overflow-hidden'>
        <Header />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default MainLayout
