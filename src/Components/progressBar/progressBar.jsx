import React from 'react'
import classNames from '../../utility/classNames'

export default function ProgressBar() {
  return (
    <div>
      <h2
        className={
          'bg-gray-50 py-8 text-center text-xl font-bold text-gray-800'
        }
      >
        Taches à accomplir
      </h2>
      <div className={'flex w-full'}>
        <ProgressPart
          color="cyan"
          value={1}
          max={2}
          active
          position={0}
          label="Aujourd'hui"
        />
        <ProgressPart
          color="amber"
          value={1}
          max={2}
          active={false}
          position={1}
          label="Cette semaine"
        />
        <ProgressPart
          color="emerald"
          value={1}
          max={2}
          active={false}
          position={2}
          label="Ce mois-ci"
        />
      </div>
    </div>
  )
}

function ProgressPart({ color, active, position, value, max, label }) {
  const percent = (100 * value) / max
  return (
    <div
      className={classNames(
        active ? 'border-b-4 border-cyan-600' : null,
        color === 'cyan' ? 'bg-cyan-100' : null,
        color === 'amber' ? 'bg-orange-100' : null,
        color === 'emerald' ? 'bg-emerald-100' : null,
        position === 0 ? 'pl-8' : null,
        position === 2 ? 'pr-8' : null,
        'py-4'
      )}
      style={{ width: '33.33%' }}
    >
      <div
        className={classNames(
          color === 'cyan' ? 'bg-cyan-200' : null,
          color === 'amber' ? 'bg-orange-200' : null,
          color === 'emerald' ? 'bg-emerald-200' : null,
          position === 0 ? 'rounded-l-full' : null,
          position === 2 ? 'rounded-r-full' : null,
          'relative w-full'
        )}
      >
        <div
          className={classNames(
            color === 'cyan' ? 'bg-cyan-300' : null,
            color === 'amber' ? 'bg-orange-300' : null,
            color === 'emerald' ? 'bg-emerald-300' : null,
            position === 0 ? 'rounded-l-full' : null,
            position === 0 && percent < 100 ? 'rounded-full' : null,
            position === 1 && percent < 100 ? 'rounded-r-full' : null,
            position === 2 ? 'rounded-r-full' : null,
            'relative flex justify-center px-2'
          )}
          style={{ width: `${percent}%` }}
        >
          <div>
            {value}/{max}
          </div>
        </div>
      </div>
      <div className={'flex justify-center'}>
        <button
          className={classNames(
            color === 'cyan'
              ? 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500'
              : null,
            color === 'amber'
              ? 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500'
              : null,
            color === 'emerald'
              ? 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500'
              : null,
            'mt-4 inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2'
          )}
        >
          {label}
        </button>
      </div>
    </div>
  )
}
