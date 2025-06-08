import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Home, Bell, Settings, ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <div className='bg-slate-700 text-white px-6 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
          <div className='text-green-400 font-bold text-sm'>COMPANY LOGO XXX</div>
          <Home className='h-5 w-5' />
          <div className='bg-white text-slate-700 px-3 py-1 rounded text-sm font-medium'>
            <div className='text-xs text-gray-500'>Module</div>
            <div>USER MANAGEMENT</div>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <Bell className='h-5 w-5' />
            <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'></div>
          </div>
          <Settings className='h-5 w-5' />
          <div className='flex items-center space-x-2'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='/placeholder.svg?height=32&width=32' />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <div className='text-sm'>
              <div>Mr. David Nguyen</div>
              <div className='text-xs text-gray-300'>Home Company</div>
            </div>
            <ChevronDown className='h-4 w-4' />
          </div>
        </div>
      </div>
    </div>
  )
}
