import React from "react";
import { Route, Routes, Navigate } from "react-router";
import {Login} from '../features/authentication/Login/Login';
import {RegistrationComponent} from '../features/authentication/RegistrationComponent';
import {Profile} from '../features/Profile/Profile';
import {ErrorPage} from '../features/ErrorPage/ErrorPage';
import {PasswordRecoveryComponent} from '../features/authentication/PasswordRecoveryComponent';
import {InterNewPasswordComponent} from '../features/authentication/InterNewPasswordComponent';
import {DemoComponent} from '../features/DemoComponent/DemoComponent';

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  PROFILE: '/profile',
  ERROR404: '/error404',
  RECOVERY: 'recovery',
  NEW_PASSWORD: 'new-password',
  DEMO: 'demo'
};

function MainRoutes() {
  return (
    <div>
        <Routes>
          <Route path={'/'} element={<Navigate to={PATH.DEMO} />} />
          <Route path={PATH.LOGIN} element={<Login/>}/>
          <Route path={PATH.REGISTRATION} element={<RegistrationComponent/>}/>
          <Route path={PATH.PROFILE} element={<Profile/>}/>
          <Route path={PATH.RECOVERY} element={<PasswordRecoveryComponent/>}/>
          <Route path={PATH.NEW_PASSWORD} element={<InterNewPasswordComponent/>}/>
          <Route path={PATH.DEMO} element={<DemoComponent/>}/>
          <Route element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default MainRoutes;
