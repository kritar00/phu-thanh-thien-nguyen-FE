import { MainLayout } from './MainLayout'
import { PaginationControls } from './PaginationControls'
import { RefreshCw } from 'lucide-react'
import { UserTable } from './UserTable'

export default function UserManagementDashboard() {
  return (
    <MainLayout>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-xl font-bold text-gray-900'>43 USERS</h1>
          <RefreshCw className='h-4 w-4 text-gray-500' />
        </div>
      </div>

      <UserTable />
      <PaginationControls />
    </MainLayout>
  )
}
