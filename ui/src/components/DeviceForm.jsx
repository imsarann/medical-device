import { useState } from 'react'
import { MotionDiv } from './MotionPrimitives.jsx'
import SearchableSelect from './SearchableSelect.jsx'

const ids = ['MD-1001', 'MD-1002', 'MD-1050', 'MD-1100']
const deviceNames = ['Cardiac Monitor', 'Infusion Pump', 'Surgical Laser', 'Ventilator']
const countries = ['United States', 'United Kingdom', 'Germany', 'India', 'Japan']
const manufacturers = ['Acme MedTech', 'HealthCore', 'BioPulse', 'AeroLife', 'MediGen']
const codes = ['A12', 'B34', 'C56', 'D78']

export default function DeviceForm() {
  const [form, setForm] = useState({
    id: '',
    name: '',
    country: '',
    manufacturer: '',
    code: '',
    implanted: 'no',
  })

  const update = (key) => (val) => setForm(prev => ({ ...prev, [key]: val }))

  return (
    <MotionDiv initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Device Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SearchableSelect label="ID" options={ids} value={form.id} onChange={update('id')} />
        <SearchableSelect label="Device name" options={deviceNames} value={form.name} onChange={update('name')} />
        <SearchableSelect label="Country" options={countries} value={form.country} onChange={update('country')} />
        <SearchableSelect label="Manufacturer" options={manufacturers} value={form.manufacturer} onChange={update('manufacturer')} />
        <SearchableSelect label="Code" options={codes} value={form.code} onChange={update('code')} />
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Implanted</label>
          <div className="flex gap-3">
            {['yes', 'no'].map(val => (
              <label key={val} className="inline-flex items-center gap-2 text-sm text-slate-700">
                <input type="radio" name="implanted" value={val} checked={form.implanted === val} onChange={e => update('implanted')(e.target.value)} />
                {val === 'yes' ? 'Yes' : 'No'}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <button type="button" className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Submit</button>
        <span className="text-xs text-slate-500">All dropdowns are searchable.</span>
      </div>
    </MotionDiv>
  )
}


