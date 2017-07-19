import {Injectable} from 'angular2/core';
import {Http,Headers,Response} from 'angular2/http';
import {Observable,BehaviorSubject,Subject} from 'rxjs/Rx';

@Injectable()
export class UserDataService {

    public onlineContacts: Subject<UserContact> = new BehaviorSubject<UserContact>(null);
    public userContacts: Subject<UserContact> = new BehaviorSubject<UserContact>(null);
    public posts: Subject<UserContact> = new BehaviorSubject<UserContact>(null);
    public post: any;

    constructor(public http:Http) {
        this.pollContacts();
    }

    private pollContacts() : any {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        //console.log('init');
        return Observable.interval(3000)
            .startWith('')
            .switchMap(() => this.http.get('./app/restservice/contacts', {headers: headers}))
            //.startWith() - Would this allow me to kick off the service when the Component is loaded / called?
            .subscribe((data: any) => {
              //console.log('test');
                data = data.json();
                this.onlineContacts.next(data.onlineContacts);
                this.userContacts.next(data.allContacts);
            });

    }
    public getPost(id = 0) : Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/${id}').map((res:Response) => res.json());
    }
    getAllPost(): Observable<any[]>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts/').map((res:Response) => res.json());
    }
    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}