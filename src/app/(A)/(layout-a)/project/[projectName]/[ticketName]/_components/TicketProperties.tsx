'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '../../../../../../components/ui/badge'

export default function TicketPropertiesSheet() {
  return (
    <Sheet defaultOpen modal={false}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='fixed right-4 top-1/2 z-50 h-8 w-8 -translate-y-1/2 rounded-full border bg-white shadow-sm'
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
      </SheetTrigger>
      <SheetContent
        className='w-80 p-6 sticky'
        container={document.getElementById('properties-container')}
      >
        <SheetHeader className='mb-6'>
          <SheetTitle className='text-lg font-semibold'>Properties</SheetTitle>
        </SheetHeader>
        <div className='space-y-4'>
          <PropertyItem
            label='Status:'
            value={
              <Badge variant='secondary' className='bg-blue-100 text-blue-700 hover:bg-blue-100'>
                In-Progress
              </Badge>
            }
          />
          <PropertyItem
            label='Priority:'
            value={
              <Badge variant='destructive' className='bg-red-100 text-red-700 hover:bg-red-100'>
                Critical
              </Badge>
            }
          />
          <PropertyItem label='Assignee:' value='Trengrit' />
          <PropertyItem label='Type:' value='Bug' />
          <PropertyItem label='Start date:' value='2025-04-04' />
          <PropertyItem label='Target date:' value='2025-04-04' />
        </div>
      </SheetContent>
    </Sheet>
  )
}
function PropertyItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className='flex justify-between items-center'>
      <span className='text-sm text-gray-600'>{label}</span>
      {typeof value === 'string' ? <span className='text-sm text-gray-900'>{value}</span> : value}
    </div>
  )
}
