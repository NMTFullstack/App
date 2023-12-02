import authLoginSlice from "@/app/[lang]/[appId]/(auth)/login/reducers/auth.slice";
import loginSlice from "@/app/[lang]/[appId]/(auth)/login/reducers/login.slice";
import registerSlice from "@/app/[lang]/[appId]/(auth)/register/slice";
import addressSlice from "@/app/[lang]/[appId]/(web)/(userTab)/address/address-common/slice";

import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  authLogin: authLoginSlice,
  login: loginSlice,
  register: registerSlice,
  address: addressSlice,

});

export { rootReducer };
