import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft, ShoppingCart } from 'lucide-react'

interface WorkPackageCardProps {
  id: number
  title: string
  description: string
}

export function WorkPackageCard({ title, description }: WorkPackageCardProps) {
  return (
    <Card className='hover:shadow-md transition-shadow'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
          <ChevronRight className='h-5 w-5 text-gray-400' />
        </div>

        <p className='text-sm text-gray-600 mb-6 line-clamp-3'>{description}</p>

        <div className='flex items-center justify-between'>
          <div className='flex space-x-2'>
            <Button variant='outline' size='sm' className='h-8 w-8 p-0'>
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button variant='outline' size='sm' className='h-8 w-8 p-0'>
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>

          <Button variant='link' className='text-blue-600 p-0 h-auto'>
            <span className='mr-2'>View Detail</span>
            <ShoppingCart className='h-4 w-4' />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
