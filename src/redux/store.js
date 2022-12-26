import { configureStore} from "@reduxjs/toolkit";
import {contactsReducer} from "./contactsSlice/contactsSlice"
import { filtersReducer } from "./filterSlice/filterSlice";


export const store = configureStore({
  reducer:{
  contacts: contactsReducer,
  filter: filtersReducer,}
  });
