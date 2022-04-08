/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { InformationCircleIcon, XIcon } from '@heroicons/react/outline'
import Index from './Pages/index'
import ProgressBar from './Components/progressBar/progressBar'
import MonthlyPage from './Pages/MonthlyPage'
import WeeklyPage from './Pages/WeeklyPage'
import DailyPage from './Pages/DailyPage'
import { checkUpdate } from './redux/tasks/tasks.actions'
import Modal from './Components/modal/Modal'

function App({ checkUpdate, storage, closeBanner }) {
  useEffect(() => checkUpdate())
  return (
    <Router>
      {storage.infoBanner && (
        <div className="bg-sky-600">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-sky-800 p-2">
                  <InformationCircleIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white">
                  <span className="block w-full">
                    Toute les données sont stockées uniquement dans le
                    navigateur pour le moment, si vous suprimmez les donnez du
                    navigateur, ou lors d'une potentielle mise à jour de
                    l'application vous perdrez vos personalisations.
                  </span>
                  <p className="block" />
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => closeBanner()}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={'min-h-screen w-screen'}>
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/day" element={<DailyPage />} />
          <Route path="/week" element={<WeeklyPage />} />
          <Route path="/month" element={<MonthlyPage />} />
        </Routes>
      </div>
      <div
        className={'flex justify-center bg-gray-900 py-0.5 text-xs text-white'}
      >
        <span className={'opacity-20'}>V.1.0.1 - by Khoéos</span>
      </div>
      <Modal />
    </Router>
  )
}

const mapStateToProps = ({ storage }) => ({
  storage,
})

const mapDispatchToProps = dispatch => ({
  checkUpdate: type => dispatch(checkUpdate(type)),
  closeBanner: () => dispatch({ type: '@@Data/ToggleInfoBanner' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
