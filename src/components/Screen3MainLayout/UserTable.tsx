import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { users } from './helpers'

export function UserTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              User Name
              <br />
              User ID
            </TableHead>
            <TableHead>Contact Info</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className='flex items-center space-x-3'>
                  <Avatar className='h-10 w-10'>
                    <AvatarImage src={user.avatar || '/placeholder.svg'} />
                    <AvatarFallback>
                      {user.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-medium text-gray-900'>{user.name}</div>
                    <div className='text-sm text-gray-500'>{user.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className='text-sm'>
                  <div>{user.phone}</div>
                  <div className='text-gray-500'>{user.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <span className='text-sm text-gray-900'>{user.type}</span>
              </TableCell>
              <TableCell>
                <span className='text-sm text-gray-900'>{user.experience}</span>
              </TableCell>
              <TableCell>
                <Badge
                  variant='secondary'
                  className='bg-green-100 text-green-700 hover:bg-green-100'
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
