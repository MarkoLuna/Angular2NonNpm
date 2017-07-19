import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ContactsList} from './contacts';
import {PostsList} from './posts';
import {UserDataService} from './service';

bootstrap(ContactsList, [HTTP_PROVIDERS, UserDataService]);
bootstrap(PostsList, [HTTP_PROVIDERS, UserDataService]);