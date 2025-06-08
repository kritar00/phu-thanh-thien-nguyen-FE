import { clsx, type ClassValue } from 'clsx'
import Papa from 'papaparse'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const parseCsv = (csvString: string): any[] => {
  const result = Papa.parse(csvString, { header: true, skipEmptyLines: true })
  return result.data
}