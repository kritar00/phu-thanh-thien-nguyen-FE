import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function DashboardFooter() {
  return (
    <div className='flex items-center justify-end pt-6 border-t border-gray-200'>
      <Button className='bg-blue-600 hover:bg-blue-700'>
        Next
        <ArrowRight className='h-4 w-4 ml-2' />
      </Button>
    </div>
  )
}
