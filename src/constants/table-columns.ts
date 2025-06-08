import { ColumnDef } from '@tanstack/react-table'

export const leadsColumns: ColumnDef<any>[] = [
  { header: 'Index', accessorKey: 'Index', meta: { type: 'Number' } },
  { header: 'Account Id', accessorKey: 'Account Id' },
  { header: 'Lead Owner', accessorKey: 'Lead Owner' },
  { header: 'First Name', accessorKey: 'First Name' },
  { header: 'Last Name', accessorKey: 'Last Name' },
  { header: 'Company', accessorKey: 'Company' },
  { header: 'Phone 1', accessorKey: 'Phone 1' },
  { header: 'Phone 2', accessorKey: 'Phone 2' },
  { header: 'Email 1', accessorKey: 'Email 1' },
  { header: 'Email 2', accessorKey: 'Email 2' },
  { header: 'Website', accessorKey: 'Website' },
  { header: 'Source', accessorKey: 'Source' },
  { header: 'Deal Stage', accessorKey: 'Deal Stage' },
  { header: 'Notes', accessorKey: 'Notes' }
]

export const customersColumns: ColumnDef<any>[] = [
  { header: 'Index', accessorKey: 'Index', meta: { type: 'Number' } },
  { header: 'Customer Id', accessorKey: 'Customer Id' },
  { header: 'First Name', accessorKey: 'First Name' },
  { header: 'Last Name', accessorKey: 'Last Name' },
  { header: 'Company', accessorKey: 'Company' },
  { header: 'City', accessorKey: 'City' },
  { header: 'Country', accessorKey: 'Country' },
  { header: 'Phone 1', accessorKey: 'Phone 1' },
  { header: 'Phone 2', accessorKey: 'Phone 2' },
  { header: 'Email', accessorKey: 'Email' },
  { header: 'Subscription Date', accessorKey: 'Subscription Date' },
  { header: 'Website', accessorKey: 'Website' }
]
export const peopleColumns: ColumnDef<any>[] = [
  { header: 'Index', accessorKey: 'Index', meta: { type: 'Number' } },
  { header: 'User Id', accessorKey: 'User Id' },
  { header: 'First Name', accessorKey: 'First Name' },
  { header: 'Last Name', accessorKey: 'Last Name' },
  { header: 'Sex', accessorKey: 'Sex' },
  { header: 'Email', accessorKey: 'Email' },
  { header: 'Phone', accessorKey: 'Phone' },
  { header: 'Date of birth', accessorKey: 'Date of birth' },
  { header: 'Job Title', accessorKey: 'Job Title' }
]

export const organizationsColumns: ColumnDef<any>[] = [
  { header: 'Index', accessorKey: 'Index', meta: { type: 'Number' } },
  { header: 'Organization Id', accessorKey: 'Organization Id' },
  { header: 'Name', accessorKey: 'Name' },
  { header: 'Website', accessorKey: 'Website' },
  { header: 'Country', accessorKey: 'Country' },
  { header: 'Description', accessorKey: 'Description' },
  { header: 'Founded', accessorKey: 'Founded', meta: { type: 'Number' } },
  { header: 'Industry', accessorKey: 'Industry' },
  { header: 'Number of employees', accessorKey: 'Number of employees', meta: { type: 'Number' } }
]

export const productsColumns: ColumnDef<any>[] = [
  { header: 'Index', accessorKey: 'Index', meta: { type: 'Number' } },
  { header: 'Name', accessorKey: 'Name' },
  { header: 'Description', accessorKey: 'Description' },
  { header: 'Brand', accessorKey: 'Brand' },
  { header: 'Category', accessorKey: 'Category' },
  { header: 'Price', accessorKey: 'Price', meta: { type: 'Number' } },
  { header: 'Currency', accessorKey: 'Currency' },
  { header: 'Stock', accessorKey: 'Stock', meta: { type: 'Number' } },
  { header: 'EAN', accessorKey: 'EAN' },
  { header: 'Color', accessorKey: 'Color' },
  { header: 'Size', accessorKey: 'Size' },
  { header: 'Availability', accessorKey: 'Availability' },
  { header: 'Internal ID', accessorKey: 'Internal ID' }
]