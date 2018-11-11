import {ContactActions, ContactActionTypes} from './contact.actions';
import {ContactState,ContactInitialState, adapter} from './contact.state'

export function reducer(state = ContactInitialState,action:ContactActions):ContactState
{
    switch(action.type){
        case ContactActionTypes.Add_Contact : {
       return adapter.addOne(action.payload.contact,state);
//         Object.assign({},state,{
//             contacts:[...state.contacts,action.payload]
// //...state,contacts:[...state.contacts,action.payload]
//         });
        }
        case ContactActionTypes.Update_Contact :{
        return adapter.updateOne(action.payload.contact,state);
        }

        case ContactActionTypes.Delete_Contact :{
        return adapter.removeOne(action.payload.Id,state);
        }
        case ContactActionTypes.Fetch_Contact_Success :{
        return adapter.addAll(action.payload.contacts ,state);
        }
        

}
}