import {Component} from 'angular2/core';
import {UserDataService} from './service';
import {Post} from '../classes/post';

@Component({
    selector: 'posts-list',
    //directives: [...ROUTER_DIRECTIVES],
    templateUrl : '/templates/posts-list.html'
})
export class PostsList {
    public posts : any;
    public errorMessage : any;

    public post = {id:'',userId:'',title:'',body:''};
    //public post : Post;
    
    constructor(private service: UserDataService){}

    ngOnInit() {
        this.service.getAllPost().subscribe(
            (posts) => {
                this.posts = posts;
            });

        //this.service.getPosts();
        //this.service.posts.subscribe(
        //    (posts) => {
        //        this.posts = posts;
        //    });
    }
    addPost(){
        this.posts.push(this.post); 
        this.post = {id:'',userId:'',title:'',body:''};
    }
    deletePost(id){
        for(let i = 0;i<this.posts.length;i++){
            if(this.posts[i].id === id){
                // console.log(this.posts[i]);
                this.posts.splice(i, 1);
                break;
            }
        }
    }
}