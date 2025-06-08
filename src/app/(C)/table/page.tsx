'use client'

import Papa from 'papaparse'
import {
  customersColumns,
  leadsColumns,
  organizationsColumns,
  peopleColumns,
  productsColumns
} from '@/constants/table-columns'
import DataTable from '@/components/ui/datatable'
import { useEffect, useState } from 'react'

interface Data {
  [key: string]: string | number
}

const DataTablesPage = () => {
  const [leadsData, setLeadsData] = useState<Data[]>([])
  const [customersData, setCustomersData] = useState<Data[]>([])
  const [peopleData, setPeopleData] = useState<Data[]>([])
  const [organizationsData, setOrganizationsData] = useState<Data[]>([])
  const [productsData, setProductsData] = useState<Data[]>([])

  useEffect(() => {
    const fetchCsv = async (url: string) => {
      const response = await fetch(url)
      const text = await response.text()
      return Papa.parse<Data>(text, { header: true, skipEmptyLines: true }).data
    }

    // Replace with actual paths or API endpoints
    Promise.all([
      fetchCsv('/leads-100.csv').then(setLeadsData),
      fetchCsv('/customers-100.csv').then(setCustomersData),
      fetchCsv('/people-100.csv').then(setPeopleData),
      fetchCsv('/organizations-100.csv').then(setOrganizationsData),
      fetchCsv('/products-100.csv').then(setProductsData)
    ]).catch(console.error)
  }, [])

  return (
    <div className='p-4 space-y-8'>
      <h1 className='text-2xl font-bold'>Leads</h1>
      <DataTable columns={leadsColumns} data={leadsData} storageKey='leadsTableState' />
      <h1 className='text-2xl font-bold'>Customers</h1>
      <DataTable columns={customersColumns} data={customersData} storageKey='customersTableState' />
      <h1 className='text-2xl font-bold'>People</h1>
      <DataTable columns={peopleColumns} data={peopleData} storageKey='peopleTableState' />
      <h1 className='text-2xl font-bold'>Organizations</h1>
      <DataTable
        columns={organizationsColumns}
        data={organizationsData}
        storageKey='organizationsTableState'
      />
      <h1 className='text-2xl font-bold'>Products</h1>
      <DataTable columns={productsColumns} data={productsData} storageKey='productsTableState' />
    </div>
  )
}

export default DataTablesPage
