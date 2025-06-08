import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { BarChart3, ChevronRight, Send } from 'lucide-react'
import { ActivityItem } from './ActivityItem'

export function TicketActivity() {
  return (
    <Card>
      <CardContent className='p-6'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center space-x-2'>
            <BarChart3 className='h-5 w-5 text-gray-400' />
            <h2 className='text-lg font-semibold text-gray-900'>Activity</h2>
          </div>
          <ChevronRight className='h-5 w-5 text-gray-400' />
        </div>

        <div className='space-y-4'>
          <ActivityItem
            color='green'
            user='RFX David Nguyen'
            action='Submitted to underwriting'
            date='2025-04-04 13:00:38'
          />
          <ActivityItem
            color='blue'
            user='ABC Lisa Rose'
            action='approval'
            date='2025-04-04 11:10:38'
          />
          {/* Add more ActivityItems as needed */}
        </div>

        <div className='mt-8 pt-6 border-t border-gray-100'>
          <div className='relative'>
            <Textarea
              placeholder='Leave a comment ...'
              className='min-h-[100px] pr-12 resize-none'
            />
            <Button size='sm' className='absolute bottom-3 right-3 h-8 w-8 p-0'>
              <Send className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
