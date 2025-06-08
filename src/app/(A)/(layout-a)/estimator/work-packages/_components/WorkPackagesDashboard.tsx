import { WorkPackageTabs } from './WorkPackageTabs'
import { DashboardFooter } from './DashboardFooter'

export default function WorkPackagesDashboard() {
  return (
    <div className='px-6 overflow-auto'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Work Packages (WP)</h1>
      <WorkPackageTabs />
      <DashboardFooter />
    </div>
  )
}
