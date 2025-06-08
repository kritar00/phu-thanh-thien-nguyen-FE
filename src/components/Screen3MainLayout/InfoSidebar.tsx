import { InfoCard } from './InfoCard'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, FileText, BarChart3, Users, CheckSquare } from 'lucide-react'
import { Checkbox } from '@radix-ui/react-checkbox'
import { loanDocuments } from './helpers'

export function InfoSidebar() {
  return (
    <div className='w-80 bg-white border-l border-gray-200 p-6 overflow-auto'>
      {/* General Information */}
      <InfoCard
        icon={<FileText className='h-4 w-4 mr-2' />}
        title='GENERAL INFORMATION'
        content={
          <>
            <InfoRow label='First Name' value='David' />
            <InfoRow label='Last Name' value='Nguyen' />
            <InfoRow label='Experience' value='5 years' />
            <InfoRow label='Personal Website' value='david.com' isLink />
          </>
        }
      />

      {/* Commission Structures */}
      <InfoCard
        icon={<BarChart3 className='h-4 w-4 mr-2' />}
        title='COMMISSION STRUCTURES'
        content={null}
        hasExternalLink
      />

      {/* Recruitment Documents */}
      <InfoCard
        icon={<FileText className='h-4 w-4 mr-2' />}
        title='RECRUITMENT DOCUMENTS'
        hasExternalLink
      />

      {/* Related Clients & Loan Documents */}
      <InfoCard
        icon={<Users className='h-4 w-4 mr-2' />}
        title='RELATED CLIENTS & LOAN DOCUMENTS'
        content={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-xs'>Index</TableHead>
                <TableHead className='text-xs'>
                  Borrower Name
                  <br />
                  Loan ID
                </TableHead>
                <TableHead className='text-xs'>
                  Lender
                  <br />
                  Interest Rate
                </TableHead>
                <TableHead className='text-xs'>Process</TableHead>
                <TableHead className='text-xs'>Status</TableHead>
                <TableHead className='text-xs'>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loanDocuments.map((doc) => (
                <TableRow key={doc.index}>
                  <TableCell className='text-xs'>{doc.index}</TableCell>
                  <TableCell className='text-xs'>
                    <div>{doc.borrowerName}</div>
                    <div className='text-gray-500'>{doc.loanId}</div>
                  </TableCell>
                  <TableCell className='text-xs'>
                    <div>{doc.lender}</div>
                    <div className='text-gray-500'>{doc.interestRate}</div>
                  </TableCell>
                  <TableCell className='text-xs'>
                    <div className='flex items-center space-x-2'>
                      <Progress value={doc.process} className='w-8 h-1' />
                      <span>{doc.process}%</span>
                    </div>
                  </TableCell>
                  <TableCell className='text-xs'>
                    <Badge variant='secondary' className='bg-blue-100 text-blue-700 text-xs'>
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='text-xs'>
                    <Button variant='ghost' size='sm' className='h-6 w-6 p-0'>
                      <ExternalLink className='h-3 w-3' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        }
      />

      {/* Performance */}
      <InfoCard icon={<BarChart3 className='h-4 w-4 mr-2' />} title='PERFORMANCE' />

      {/* To-Do */}
      <InfoCard
        icon={<CheckSquare className='h-4 w-4 mr-2' />}
        title='TO-DO'
        content={
          <>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-900'>Review Loan Applications</span>
              <ExternalLink className='h-4 w-4 text-gray-400' />
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-900'>Contact to Borrower</span>
              <ExternalLink className='h-4 w-4 text-gray-400' />
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='todo' />
              <label htmlFor='todo' className='text-sm text-gray-400'>
                Click to add new todo
              </label>
            </div>
          </>
        }
      />
    </div>
  )
}

function InfoRow({
  label,
  value,
  isLink = false
}: {
  label: string
  value: string
  isLink?: boolean
}) {
  return (
    <div className='flex justify-between'>
      <span className='text-sm text-gray-600'>{label}</span>
      {isLink ? (
        <span className='text-sm text-blue-600'>{value}</span>
      ) : (
        <span className='text-sm text-gray-900'>{value}</span>
      )}
    </div>
  )
}
