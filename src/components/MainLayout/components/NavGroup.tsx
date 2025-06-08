import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'
import { BarChart3, Calculator, FolderOpen, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavGroup = () => {
  const { open, isMobile } = useSidebar()
  const data = [
    {
      title: 'Overview',
      icon: BarChart3,
      isActive: true,
      url: '/project/ecommerce/ticket-1'
    },
    {
      title: 'Inquiries',
      url: '#',
      icon: HelpCircle
    },
    {
      title: 'Estimator',
      url: '/estimator/work-packages',
      icon: Calculator
    },
    {
      title: 'Project',
      url: '#',
      icon: FolderOpen
    }
  ] 

  const pathname = usePathname()

  const getIsActive = (url: string) => pathname === url
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Section</SidebarGroupLabel>
      <SidebarMenu>
        {data.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default NavGroup
