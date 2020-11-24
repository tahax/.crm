import {action, observable} from "mobx";
import ShowContacts from "../Components/contacts/ShowContactsComponent";

class ContactsS {
    @observable static ContactsBodyChanger = "ShowContacts";
    @observable static visible = false;

    @action changeView = (newValue)=>{
        ContactsS.ContactsBodyChanger = newValue;
    }
}

export default ContactsS;