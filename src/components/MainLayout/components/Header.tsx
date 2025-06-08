'use client'

import React from 'react'
import { DynamicBreadcrumb } from '../Breadcrumb'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'

const Header = () => {
  const { open } = useSidebar()
  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-background-secondary backdrop-blur-lg'>
        <div className='flex items-center w-full px-6 gap-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger className='-ml-1'></SidebarTrigger>
            </TooltipTrigger>
            <TooltipContent side='bottom' align='center'>
              {open ? 'Collapse sidebar' : 'Expand sidebar'}
            </TooltipContent>
          </Tooltip>
          <Separator orientation='vertical' className='mr-2 h-4' />
          <DynamicBreadcrumb />
        </div>
      </header>
      <Separator />
    </>
  )
}

export default Header
