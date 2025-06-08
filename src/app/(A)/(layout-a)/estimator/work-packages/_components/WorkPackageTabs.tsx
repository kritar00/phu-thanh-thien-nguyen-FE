import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { WorkPackageGrid } from './WorkPackageGrid'
import WorkPackageCategories from './WorkPackageCategories'

export function WorkPackageTabs() {
  return (
    <Tabs defaultValue='rfx-wps' className='w-full mb-6'>
      <div className='flex gap-x-6'>
        <div className='flex flex-col mb-4'>
          <TabsList className='grid w-fit grid-cols-2'>
            <TabsTrigger value='rfx-wps' className='px-6'>
              RFX WPs
            </TabsTrigger>
            <TabsTrigger value='custom-wps' className='px-6'>
              Custom WPs
            </TabsTrigger>
          </TabsList>
          <WorkPackageCategories />
        </div>

        <TabsContent value='rfx-wps' className='mt-0'>
          <div className='relative w-full mb-4'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
            <Input placeholder='Search work packages...' className='pl-10' />
          </div>
          <WorkPackageGrid />
        </TabsContent>
      </div>

      <TabsContent value='custom-wps'>
        <div className='text-center py-12'>
          <p className='text-gray-500'>Custom work packages will be displayed here.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
