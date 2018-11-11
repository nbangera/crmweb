
import { Action } from '@ngrx/store'
import { Contact } from '../models'
import { Update } from '@ngrx/Entity';



    export enum ContactActionTypes {
        Add_Contact = '[Contact] Add',
        Delete_Contact = '[Contact] Delete',
        Fetch_Contact = '[Contact] Fetch',
        Update_Contact = '[Contact] Update',
        Add_Contact_Success = '[Contact] Add Success',
        Delete_Contact_Success = '[Contact] Delete Success',
        Update_Contact_Success = '[Contact] Update Success',
        Fetch_Contact_Success = '[Contact] Fetch Success',
    }

    export class AddContact implements Action {
        readonly type = ContactActionTypes.Add_Contact;
        constructor(public payload: { contact: Contact }) { }
    }

    export class AddContactSuccess implements Action {
        readonly type = ContactActionTypes.Add_Contact_Success;        
    }

    export class DeleteContact implements Action {
        readonly type = ContactActionTypes.Delete_Contact;
        constructor(public payload: { Id: string}) { }
    }

    export class DeleteContactSuccess implements Action {
        readonly type = ContactActionTypes.Delete_Contact_Success;        
    }

    export class UpdateContact implements Action {
        readonly type = ContactActionTypes.Update_Contact;
        constructor(public payload: { contact: Update<Contact> }) { }
    }

    export class UpdateContactSuccess implements Action {
        readonly type = ContactActionTypes.Update_Contact_Success;        
    }

    export class FetchContact implements Action {
        readonly type = ContactActionTypes.Fetch_Contact;        
    }

    export class FetchContactSuccess implements Action {
        readonly type = ContactActionTypes.Fetch_Contact_Success;
        constructor(public payload: { contacts: Contact[] }) { }
    }

    export type ContactActions = AddContact | AddContactSuccess | DeleteContact | DeleteContactSuccess | UpdateContact | UpdateContactSuccess | FetchContactSuccess | FetchContact;