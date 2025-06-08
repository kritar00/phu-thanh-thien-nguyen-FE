'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'
import React from 'react'

const transformToNaturalLanguage = (title: string) => {
  const words = title.split('-')
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return capitalizedWords.join(' ')
}

export function DynamicBreadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`
          const isLast = index === pathSegments.length - 1

          return (
            <React.Fragment key={`${href}-link`}>
              <BreadcrumbItem className={index === 0 ? 'hidden md:block' : ''}>
                {isLast ? (
                  <BreadcrumbPage className='py-1 px-1.5'>
                    {transformToNaturalLanguage(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className='text-primary rounded-md hover:text-primary hover:bg-primary-active hover:underline py-1 px-1.5'
                    href={href}
                  >
                    {transformToNaturalLanguage(segment)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
