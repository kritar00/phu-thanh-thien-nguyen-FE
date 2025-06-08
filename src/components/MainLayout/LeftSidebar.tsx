'use client'
import { Separator } from '@/components/ui/separator'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'
import NavGroup from './components/NavGroup'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const LeftSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <div className='p-4 border-b border-gray-100'>
          <div className='flex items-center space-x-3'>
            <Avatar className='h-10 w-10'>
              <AvatarImage src='/placeholder.svg?height=40&width=40' />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div>
              <div className='font-semibold text-gray-900'>ABC Company</div>
              <div className='text-sm text-gray-500'>Lisa Rose</div>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className='p-4 border-t border-gray-100'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-teal-600 rounded flex items-center justify-center'>
              <div className='text-white text-xs font-bold'>RF</div>
            </div>
            <div className='text-sm font-medium text-gray-700'>RIVER FLOW</div>
            <div className='text-xs text-gray-500'>SOLUTIONS</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default LeftSidebar
