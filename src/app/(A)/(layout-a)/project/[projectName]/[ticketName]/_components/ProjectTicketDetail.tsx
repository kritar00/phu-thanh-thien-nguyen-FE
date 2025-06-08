'use client'

import { TicketActivity } from './TicketActivity'
import { TicketDescription } from './TicketDescription'
import dynamic from 'next/dynamic'

const TicketPropertiesSheet = dynamic(
  () => import('./TicketProperties'),
  {
    ssr: false
  }
)

export default function ProjectTicketDetail() {
  return (
    <div className='flex-1 flex'>
      <div className='flex-1 p-6 overflow-auto'>
        <TicketDescription />
        <TicketActivity />
      </div>
      <div id='properties-container'>
        <TicketPropertiesSheet />
      </div>
    </div>
  )
}
