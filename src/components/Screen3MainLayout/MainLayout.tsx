import { Header } from './Header'
import { FilterSidebar } from './FilterSidebar'
import { InfoSidebar } from './InfoSidebar'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='flex h-[calc(100vh-60px)]'>
        <FilterSidebar />
        <main className='flex-1 p-6'>{children}</main>
        <InfoSidebar />
      </div>
    </div>
  )
}
