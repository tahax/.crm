import React, {Component} from 'react';
import HeaderPanelComponent from "../Components/Panel/HeaderPanelComponent";
import ContactsMenu from "../Components/contacts/ContactsMenuComponent";
import "../styles/bootstrap-grid.min.css";
import ContactsBody from "../Presentor/ContactsBodyPresentor";


class Contacts extends Component {
    render() {
        return (
            <>
              <HeaderPanelComponent/>
              <ContactsBody/>
            </>
        );
    }
}

export default Contacts;