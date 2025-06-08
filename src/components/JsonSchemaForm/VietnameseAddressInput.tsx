'use client'
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import provincesData from '@/utils/vietnamProvinces.json'

type Ward = { code: string; name: string }
type Province = { code: string; name: string; wards: Ward[] }

interface AddressInputProps {
  value?: { province?: string; ward?: string; street?: string }
  onChange: (val: { province: string; ward: string; street: string }) => void
}

const VietnamAddressInput: React.FC<AddressInputProps> = ({ value = {}, onChange }) => {
  const [province, setProvince] = useState(value.province || '')
  const [ward, setWard] = useState(value.ward || '')
  const [street, setStreet] = useState(value.street || '')

  const wardsMap = provincesData.reduce<Record<string, Ward[]>>((acc, p) => {
    acc[p.code] = p.wards
    return acc
  }, {})

  // Prop → state sync
  useEffect(() => {
    setProvince(value.province || '')
    setWard(value.ward || '')
    setStreet(value.street || '')
  }, [value])

  // Bubble up changes
  useEffect(() => {
    onChange({ province, ward, street })
  }, [province, ward, street, onChange])

  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='space-y-1'>
        <Label htmlFor='province'>Tỉnh/TP</Label>
        <Select value={province} onValueChange={setProvince}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Chọn Tỉnh/TP' />
          </SelectTrigger>
          <SelectContent>
            {provincesData.map((p) => (
              <SelectItem key={p.code} value={p.code}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-1'>
        <Label htmlFor='ward'>Phường/Xã</Label>
        <Select value={ward} onValueChange={setWard} disabled={!province}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Chọn Phường/Xã' />
          </SelectTrigger>
          <SelectContent>
            {province &&
              wardsMap[province]?.map((w) => (
                <SelectItem key={w.code} value={w.code}>
                  {w.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-1'>
        <Label htmlFor='street'>Đường</Label>
        <Input
          id='street'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder='Nhập tên đường'
        />
      </div>
    </div>
  )
}

export default VietnamAddressInput
