import React from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { getTasksNbr } from '../../redux/tasks/tasks.selector'

import classNames from '../../utility/classNames'

function ProgressBar({ tasksNbr }) {
  console.log(tasksNbr)
  return (
    <div>
      <h2
        className={
          'bg-gray-900 py-8 text-center text-xl font-bold text-gray-200'
        }
      >
        Taches à accomplir
      </h2>
      <div className={'flex w-full'}>
        <ProgressPart
          cat="day"
          value={tasksNbr.daily[0]}
          max={tasksNbr.daily[1]}
          active
          position={0}
          label="Aujourd'hui"
          link={'/day'}
        />
        <ProgressPart
          cat="week"
          value={tasksNbr.weekly[0]}
          max={tasksNbr.weekly[1]}
          active={false}
          position={1}
          label="Cette semaine"
          link={'/week'}
        />
        <ProgressPart
          cat="month"
          value={tasksNbr.monthly[0]}
          max={tasksNbr.monthly[1]}
          active={false}
          position={2}
          label="Ce mois-ci"
          link={'/month'}
        />
      </div>
    </div>
  )
}

function ProgressPart({ cat, position, value, max, label, link }) {
  const percent = (100 * value) / max
  return (
    <div
      className={classNames(
        useLocation().pathname === link && cat === 'day'
          ? 'border-b-4 border-sky-200'
          : null,
        useLocation().pathname === link && cat === 'week'
          ? 'border-b-4 border-violet-200'
          : null,
        useLocation().pathname === link && cat === 'month'
          ? 'border-b-4 border-emerald-200'
          : null,
        cat === 'day' ? 'bg-sky-900' : null,
        cat === 'week' ? 'bg-violet-900' : null,
        cat === 'month' ? 'bg-emerald-900' : null,
        position === 0 ? 'pl-8' : null,
        position === 2 ? 'pr-8' : null,
        'py-4'
      )}
      style={{ width: '33.33%' }}
    >
      <div
        className={classNames(
          cat === 'day' ? 'bg-sky-200' : null,
          cat === 'week' ? 'bg-violet-200' : null,
          cat === 'month' ? 'bg-emerald-200' : null,
          position === 0 ? 'rounded-l-full' : null,
          position === 2 ? 'rounded-r-full' : null,
          'relative w-full'
        )}
      >
        <div
          className={classNames(
            cat === 'day' ? 'bg-sky-400' : null,
            cat === 'week' ? 'bg-violet-400' : null,
            cat === 'month' ? 'bg-emerald-400' : null,
            position === 0 ? 'rounded-l-full' : null,
            position === 0 && percent < 100 ? 'rounded-full' : null,
            position === 1 && percent < 100 ? 'rounded-r-full' : null,
            position === 2 ? 'rounded-r-full' : null,
            'relative flex justify-center px-2'
          )}
          style={{ width: `${percent}%`, minWidth: '45px' }}
        >
          <div>
            {value}/{max}
          </div>
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Link
          to={link}
          className={classNames(
            cat === 'day'
              ? 'bg-sky-600 hover:bg-sky-700 focus:ring-sky-500'
              : null,
            cat === 'week'
              ? 'bg-violet-600 hover:bg-violet-700 focus:ring-violet-500'
              : null,
            cat === 'month'
              ? 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500'
              : null,
            'mt-4 inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-center text-sm font-medium text-white  shadow-sm focus:outline-none  focus:ring-2 focus:ring-offset-2'
          )}
        >
          {label}
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tasksNbr: getTasksNbr(state),
})

export default connect(mapStateToProps)(ProgressBar)
