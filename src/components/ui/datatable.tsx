import { useState, useEffect } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'

interface DataTableProps<T> {
  columns: ColumnDef<T>[]
  data: T[]
  storageKey: string
}

const DataTable = <T,>({ columns, data, storageKey }: DataTableProps<T>) => {
  const [tableState, setTableState] = useState(() => {
    const savedState = localStorage.getItem(storageKey)
    return savedState
      ? JSON.parse(savedState)
      : {
          sorting: [],
          columnFilters: [],
          pagination: { pageIndex: 0, pageSize: 10 }
        }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tableState))
  }, [tableState, storageKey])

  const table = useReactTable({
    data,
    columns,
    state: tableState,
    onStateChange: setTableState,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div className='p-4 space-y-4'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div className='flex flex-col space-y-1'>
                      <div
                        className='cursor-pointer flex items-center space-x-1'
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <span>{header.column.id}</span>
                        {header.column.getIsSorted()
                          ? header.column.getIsSorted() === 'asc'
                            ? ' 🔼'
                            : ' 🔽'
                          : null}
                      </div>
                      <Input
                        type={(header.column.columnDef.meta as any)?.type === 'number' ? 'number' : 'text'}
                        value={(header.column.getFilterValue() as string) ?? ''}
                        onChange={(e) => header.column.setFilterValue(e.target.value)}
                        placeholder={`Filter ${header.column.id}`}
                        className='w-32'
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{cell.getValue() as string}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
          >
            Next
          </button>
        </div>
        <div>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
      </div>
    </div>
  )
}

export default DataTable
