import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { FileText } from 'lucide-react'

export function TicketDescription() {
  return (
    <Card className='mb-6'>
      <CardContent className='p-6'>
        <div className='flex items-center space-x-2 mb-4'>
          <FileText className='h-5 w-5 text-gray-400' />
          <h2 className='text-lg font-semibold text-gray-900'>Description</h2>
        </div>

        <div className='space-y-4 text-sm text-gray-600 leading-relaxed'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <Button variant='link' className='p-0 h-auto text-blue-600 mt-4'>
          <Plus className='h-4 w-4 mr-1' />
          Add sub-tickets
        </Button>
      </CardContent>
    </Card>
  )
}
