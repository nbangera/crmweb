
import {createSelector,createFeatureSelector } from '@ngrx/store'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/Entity'
import { Contact } from "../models";


    export interface ContactState extends EntityState<Contact> 
    {
        Selectedcontact :string;
    }

    export const adapter : EntityAdapter<Contact> = createEntityAdapter<Contact>();

    export const ContactInitialState:ContactState = 
    adapter.getInitialState({ Selectedcontact : null});
   

    // export const selectContact= (state:ContactState)=>state.contacts[state.Selectedcontact];
    // export  const selectContacts = (state:ContactState) => state.contacts;
    export const {
        selectAll,
        selectEntities,
        selectIds,
        selectTotal
      
      } = adapter.getSelectors();