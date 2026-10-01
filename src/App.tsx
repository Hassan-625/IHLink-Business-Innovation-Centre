import {BusinessPortal} from '@/pages/business-centre/BusinessPortal';
import {Navigate,Route,Routes} from 'react-router-dom';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {BusinessUnitPage} from '@/pages/business-centre/BusinessOperations';
import {BusinessCentreHome} from '@/pages/business-centre/BusinessCentreHome';
import {SignInPage} from '@/pages/auth/SignInPage';
import {RegisterPage} from '@/pages/auth/RegisterPage';
import {ResetPasswordPage} from '@/pages/auth/ResetPasswordPage';
import {UpdatePasswordPage} from '@/pages/auth/UpdatePasswordPage';
import {VerifyEmailPage} from '@/pages/auth/VerifyEmailPage';
import {AuthHandoffPage} from '@/pages/auth/AuthHandoffPage';
import {BusinessSupport,BusinessAccessDenied} from '@/pages/business-centre/BusinessNavigation';

const unit='business_centre' as const;
const prefix='/business-centre';

export default function App(){return <Routes>
<Route path="/" element={<BusinessCentreHome/>}/>
<Route path={prefix} element={<Navigate to="/" replace/>}/>
<Route path="/services" element={<BusinessUnitPage unit={unit}/>}/>
<Route path={prefix+'/services'} element={<Navigate to="/services" replace/>}/>
<Route path="/request" element={<BusinessUnitPage unit={unit} view="request"/>}/>
<Route path={prefix+'/request'} element={<Navigate to="/request" replace/>}/>
<Route path="/dashboard" element={<ProtectedRoute product={unit} requireServiceAccess><BusinessPortal unit={unit}/></ProtectedRoute>}/>
<Route path="/dashboard/:page" element={<ProtectedRoute product={unit} requireServiceAccess><BusinessPortal unit={unit}/></ProtectedRoute>}/>
<Route path={prefix+'/dashboard'} element={<Navigate to="/dashboard" replace/>}/>
<Route path={prefix+'/workspace'} element={<Navigate to="/dashboard" replace/>}/>
<Route path="/get-in-touch" element={<BusinessSupport unit={unit}/>}/>
<Route path="/contact" element={<Navigate to="/get-in-touch" replace/>}/>
<Route path="/access-denied" element={<BusinessAccessDenied unit={unit}/>}/>
<Route path="/admin/access-denied" element={<BusinessAccessDenied unit={unit}/>}/>
<Route path="/signin" element={<SignInPage/>}/><Route path="/register" element={<RegisterPage/>}/><Route path="/reset-password" element={<ResetPasswordPage/>}/><Route path="/auth/update-password" element={<UpdatePasswordPage/>}/><Route path="/verify-email" element={<VerifyEmailPage/>}/><Route path="/auth/handoff" element={<AuthHandoffPage/>}/>
<Route path="*" element={<Navigate to="/" replace/>}/>
</Routes>}