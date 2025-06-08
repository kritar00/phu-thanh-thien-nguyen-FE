import MainLayout from '@/components/MainLayout/MainLayout'
import React, { FC, PropsWithChildren } from 'react'

const layout: FC<PropsWithChildren> = ({ children }) => {
return <MainLayout>{children}</MainLayout>
}

export default layout
