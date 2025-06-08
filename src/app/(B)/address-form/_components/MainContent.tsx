'use client'

const JsonSchemaForm = dynamic(() => import('@/components/JsonSchemaForm/JsonSchemaForm'), {
  ssr: false
})

import dynamic from 'next/dynamic'
import React from 'react'

const MainContent = () => {
  return <JsonSchemaForm />
}

export default MainContent
