export function ActivityItem({
  color,
  user,
  action,
  date
}: {
  color: 'green' | 'blue'
  user: string
  action: string
  date: string
}) {
  const bgColor = color === 'green' ? 'bg-green-500' : 'bg-blue-500'

  return (
    <div className='flex items-start space-x-3'>
      <div className={`w-2 h-2 ${bgColor} rounded-full mt-2`}></div>
      <div className='flex-1'>
        <div className='text-sm'>
          <span className='font-medium'>{user}</span> {action}
          <span className='text-gray-500 ml-2'>{date}</span>
        </div>
      </div>
    </div>
  )
}
