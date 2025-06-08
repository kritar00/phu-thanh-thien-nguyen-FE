import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function PaginationControls() {
  return (
    <div className='flex items-center justify-between mt-6'>
      <Button variant='outline'>Export Data</Button>
      <div className='flex items-center space-x-2'>
        <Button variant='outline' size='sm'>
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <Button variant='default' size='sm'>
          1
        </Button>
        <Button variant='outline' size='sm'>
          2
        </Button>
        <Button variant='outline' size='sm'>
          3
        </Button>
        <span className='text-gray-500'>...</span>
        <Button variant='outline' size='sm'>
          10
        </Button>
        <Button variant='outline' size='sm'>
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
      <Select defaultValue='05'>
        <SelectTrigger className='w-24'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='05'>05 Items</SelectItem>
          <SelectItem value='10'>10 Items</SelectItem>
          <SelectItem value='25'>25 Items</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
