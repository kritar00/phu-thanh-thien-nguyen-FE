'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useAppDispatch, useAppSelector } from '@/hooks/form'
import { resetForm, setSchema, updateFormData } from '@/lib/formSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z, ZodTypeAny } from 'zod'
import AddressInput from './VietnameseAddressInput'

const JsonSchemaForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const schemaJson = useAppSelector((s: any) => s.form.schema)
  const savedData = useAppSelector((s: any) => s.form.data)

  const [rawSchema, setRawSchema] = useState<string>(JSON.stringify(schemaJson, null, 2))
  const [zodSchema, setZodSchema] = useState<z.ZodTypeAny>(z.object({}))

  // Build Zod schema from JSON schema
  React.useEffect(() => {
    try {
      const parsed = Object.keys(schemaJson).length
        ? schemaJson
        : { type: 'object', properties: {} }
      if (!Object.keys(schemaJson).length) dispatch(setSchema(parsed))
      const shape: Record<string, ZodTypeAny> = {}
      for (const [key, prop] of Object.entries((parsed as any).properties || {})) {
        if ((prop as any).type === 'string') {
          let s = z.string()
          if ((parsed as any).required?.includes(key)) s = s.min(1, `${key} is required`)
          shape[key] = s
        } else if ((prop as any).type === 'number') {
          let s = z.number({ invalid_type_error: `${key} must be a number` })
          if ((parsed as any).required?.includes(key)) s = s
          shape[key] = s
        }
      }
      // Address fields validation (province, ward, street)
      if ((parsed as any).required?.includes('province')) {
        shape['address'] = z.object({
          province: z.string().min(1, 'province is required'),
          ward: z.string().min(1, 'ward is required'),
          street: z.string().min(1, 'street is required')
        })
      }
      setZodSchema(z.object(shape))
    } catch {
      // ignore
    }
  }, [schemaJson, dispatch])

  // RHF setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: savedData,
    resolver: zodResolver(zodSchema)
  })

  const onSubmit = (data: any) => {
    dispatch(updateFormData(data))
    console.log('Submitted', data)
  }
  console.log(errors)
  const onReset = () => {
    reset()
    dispatch(resetForm())
  }

  const sampleSchema = `{
  "title": "User Profile",
  "type": "object",
  "required": [
    "name",
    "age",
    "province",
    "ward",
    "street"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Full Name",
      "description": "Enter your full name"
    },
    "age": {
      "type": "number",
      "title": "Age"
    },
    "gender": {
      "type": "string",
      "title": "Gender",
      "enum": [
        "Male",
        "Female",
        "Other"
      ]
    },
    "province": {
      "title": "Tỉnh/TP"
    }
  }
}`

  return (
    <div className='space-y-6 p-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex-1 space-y-1'>
          <Label>JSON Schema</Label>
          <Textarea
            className='font-mono h-40'
            value={rawSchema}
            onChange={(e) => {
              setRawSchema(e.target.value)
              try {
                const parsed = JSON.parse(e.target.value)
                dispatch(setSchema(parsed))
              } catch {
                // invalid JSON
              }
            }}
          />
        </div>
        <div className='flex-1 space-y-1'>
          <Label>Sample JSON Schema</Label>
          <div className='relative'>
            <pre className='bg-gray-100 font-mono text-xs rounded p-2 h-40 overflow-auto whitespace-pre-wrap'>
              {sampleSchema}
            </pre>
            <button
              type='button'
              className='absolute top-2 right-2 bg-white border border-gray-300 rounded px-2 py-1 text-xs shadow hover:bg-gray-50 active:bg-gray-200 transition'
              onClick={() => navigator.clipboard.writeText(sampleSchema)}
              aria-label='Copy sample JSON schema'
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {Object.entries((schemaJson as any).properties || {}).map(([key, prop]: any) => {
          // Render AddressInput for 'province' field, otherwise render normal input/select
          if (key === 'province') {
            return (
              <div key={key} className='space-y-1'>
                <Controller
                  control={control}
                  name='address'
                  render={({ field }) => (
                    <AddressInput value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors[key] && <p className='text-red-600'>{(errors as any)[key]?.message}</p>}
              </div>
            )
          }
          return (
            <div key={key} className='space-y-1'>
              <Label htmlFor={key}>{prop.title || key}</Label>
              {prop.enum ? (
                <Controller
                  control={control}
                  name={key}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value || ''}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder={`Select ${key}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {prop.enum.map((opt: string) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              ) : (
                <Input
                  id={key}
                  {...register(key, {
                    valueAsNumber: prop.type === 'number'
                  })}
                  type={prop.type === 'number' ? 'number' : 'text'}
                />
              )}
              {errors[key] && <p className='text-red-600'>{(errors as any)[key]?.message}</p>}
            </div>
          )
        })}

        <div className='flex space-x-2'>
          <Button type='submit'>Submit</Button>
          <Button variant='outline' type='button' onClick={onReset}>
            Reset
          </Button>
        </div>
      </form>

      <div className='pt-4'>
        <Label>Current Form Data:</Label>
        <pre className='bg-gray-100 p-2 rounded'>{JSON.stringify(savedData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default JsonSchemaForm
