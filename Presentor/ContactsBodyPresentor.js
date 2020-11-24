import React, {Component} from 'react';
import ContactsMenu from "../Components/contacts/ContactsMenuComponent";
import "../styles/bootstrap-grid.min.css";
import "../styles/contacts-body.module.css";
import PageHeaderBack from "../Components/contacts/PageHeaderBack";
import FormAntD from "../Components/contacts/CreateCustomerComponent";
import {observable} from "mobx";
import {observer} from "mobx-react";
import ContactsS from "../Model/ContactsS";
import ShowContacts from "../Components/contacts/ShowContactsComponent";
import ShowCustomer from "../Components/contacts/ShowCustomerComponent";
import ShowCompany from "../Components/contacts/ShowCompanyComponent";
import FavoriteCC from "../Components/contacts/favoriteCCComponent";
import DeletedCC from "../Components/contacts/deletedCCComponent";

// @refresh reset
const Store = new ContactsS();
@observer class ContactsBody extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tak-contacts-body'>
                <div className="container">
                    <div className="row">
                        <div className="d-none d-md-block col-0 col-md-4 col-lg-3">
                            <div className="tak-contacts-menu-div">
                                <ContactsMenu/>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <PageHeaderBack/>
                            {
                                ContactsS.ContactsBodyChanger == "ShowContacts" && <ShowContacts/>
                            }
                            {
                                ContactsS.ContactsBodyChanger == "ShowCustomer" && <ShowCustomer/>
                            }
                            {
                                ContactsS.ContactsBodyChanger == "ShowCompany" && <ShowCompany/>
                            }
                            {
                                ContactsS.ContactsBodyChanger == "favoriteCompanyCustomers" && <FavoriteCC/>
                            }
                            {
                                ContactsS.ContactsBodyChanger == "deletedCompanyCustomers" && <DeletedCC/>
                            }
                            {
                                ContactsS.ContactsBodyChanger == "FormAntD" && <FormAntD/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactsBody;