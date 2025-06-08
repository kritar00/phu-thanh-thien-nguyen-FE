import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Filter } from 'lucide-react'

export function FilterSidebar() {
  return (
    <div className='w-64 bg-white border-r border-gray-200 p-4'>
      <div className='flex items-center space-x-2 mb-6'>
        <Filter className='h-4 w-4 text-gray-500' />
        <h3 className='font-medium text-gray-700'>FILTER</h3>
      </div>

      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>User name</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Select' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Users</SelectItem>
              <SelectItem value='david'>David Nguyen</SelectItem>
              <SelectItem value='jennie'>Jennie Pink</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>User ID</label>
          <Input placeholder='Input' />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>User type</label>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Phone number</label>
          <Input placeholder='Input' />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Email address</label>
          <Input placeholder='Input' />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Status</label>
          <div className='space-y-2'>
            <div className='flex items-center space-x-2'>
              <Checkbox id='all' defaultChecked />
              <label htmlFor='all' className='text-sm text-gray-600'>
                All
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='active' />
              <label htmlFor='active' className='text-sm text-gray-600'>
                Active
              </label>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='inactive' />
              <label htmlFor='inactive' className='text-sm text-gray-600'>
                Inactive
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
