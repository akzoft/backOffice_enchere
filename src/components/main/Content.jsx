import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../../libs'
import { Breadcrumb, Spinner } from '../commons'

const Content = () => {
    return (
        <div className='container'>
            <Breadcrumb />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    {
                        routes?.map((route, index) => {
                            return (
                                route.element && <Route key={index} path={route.path} exact={route.exact} element={<route.element />} />
                            )
                        })
                    }
                    {/* <Route path="/" element={<Navigate to={"dashboard"} replace />} /> */}
                </Routes>
            </Suspense>
        </div>
    )
}

export default Content
