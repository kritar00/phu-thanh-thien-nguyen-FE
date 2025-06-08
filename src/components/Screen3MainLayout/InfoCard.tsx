import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  content?: React.ReactNode
  hasExternalLink?: boolean
}

export function InfoCard({ icon, title, content, hasExternalLink = false }: InfoCardProps) {
  return (
    <Card className='mb-6'>
      <CardHeader className='pb-3'>
        <CardTitle className='text-sm font-medium text-gray-600 flex items-center justify-between'>
          <div className='flex items-center'>
            {icon}
            {title}
          </div>
          {hasExternalLink ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <span><ExternalLink className='h-4 w-4' /></span>
              </TooltipTrigger>
              <TooltipContent side='left' className='bg-gray-800 text-white text-xs px-3 py-2 rounded'>
                You don't have permission to open this link
              </TooltipContent>
            </Tooltip>
          ) : null}
        </CardTitle>
      </CardHeader>
      {content && <CardContent className='space-y-3'>{content}</CardContent>}
    </Card>
  )
}
