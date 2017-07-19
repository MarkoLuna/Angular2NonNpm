import {Component} from 'angular2/core';
import {UserDataService} from './service';

@Component({
    selector: 'contacts-list',
    //directives: [...ROUTER_DIRECTIVES],
    templateUrl : '/templates/contacts-list.html'
})

export class ContactsList {

    public onlineContacts: any;
    public userContacts: any;

    constructor (public userDataService: UserDataService) {
        this.userDataService.onlineContacts.subscribe(
            (onlineContacts) => {
                this.onlineContacts = onlineContacts;
            });

        this.userContacts = this.userDataService.userContacts;
    }

    getContact(con){
        console.log(con);
    }
}
/*
python 2
python -m SimpleHTTPServer 3000

python 3
python -m http.server 8000
*/