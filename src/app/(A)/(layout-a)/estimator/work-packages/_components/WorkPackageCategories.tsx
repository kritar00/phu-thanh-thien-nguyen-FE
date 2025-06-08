import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React from 'react'

const categories = [
  { name: 'All Work Packages', active: true },
  { name: 'Architectural WPs', active: false },
  { name: 'Development WPs', active: false },
  { name: 'Operation WPs', active: false },
  { name: 'Basic', active: false },
  { name: 'Comprehensive', active: false },
  { name: 'Advanced', active: false }
]

const WorkPackageCategories = () => {
  return (
    <div className='flex-1 flex flex-col justify-between p-4'>
      <div>
        <h3 className='text-sm font-semibold text-gray-900 mb-4'>Categories</h3>
        <div className='space-y-1'>
          {categories.map((category, index) => (
            <CategoryItem key={index} name={category.name} active={category.active} />
          ))}
        </div>
      </div>
      <Button variant='link' className='text-blue-600 p-0'>
        <Menu className='h-4 w-4 mr-2' />
        How to add custom WPs
      </Button>
    </div>
  )
}

function CategoryItem({ name, active }: { name: string; active: boolean }) {
  return (
    <div
      className={`px-3 py-2 text-sm rounded-md cursor-pointer transition-colors ${
        active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {name}
    </div>
  )
}

export default WorkPackageCategories
