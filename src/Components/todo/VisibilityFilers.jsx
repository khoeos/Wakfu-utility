import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { setFilter } from '../../Redux/todo/todo.actions'
import { VISIBILITY_FILTERS } from '../../Redux/todo/todo.constants'

function VisibilityFilters({ activeFilter, setFilter }) {
  return (
    <div className="flex gap-2">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeFilter && 'filter--active'
            )}
            onClick={() => {
              setFilter(currentFilter)
            }}
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({ activeFilter: state.visibilityFilter })
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters)
