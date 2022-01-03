import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes'
import logo from '../logo.svg'
import { Suspense } from 'react';


export const Navigation = () => {
    return (<Suspense fallback={<span>loading</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {routes.map(({name, to}) => (
                            <li key={name}>
                                <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                            </li>

                        ))}

                    </ul>
                </nav>


                <Routes>
                    {routes.map(({path, Component})=>(
                            <Route key={path} path={path} element={<Component/>} />
                        ))}
                        

                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>

            </div>
        </BrowserRouter>
        </Suspense>
    )
}
