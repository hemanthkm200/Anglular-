import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { tap, map } from 'rxjs/operators';

//databasepath: "https://live-post-84cc0-default-rtdb.firebaseio.com/";

@Injectable({providedIn:"root"})
export class backEndService{
    //httpClient used to connect backend with backendservice
    constructor(
        private postService: PostService,
        private http: HttpClient,

        ){

    }
    //function - 1----- Save
    saveData(){
        //Get List of Post from Post Service
        const listOfPost: Post[] = this.postService.getPost();
        this.http.put('https://live-post-84cc0-default-rtdb.firebaseio.com/posts.json',
         listOfPost).subscribe((res)=>{
             console.log(res);
         });
        //send the list of post to backend

    }

    //function - 2-----Fetch
    fetchData(){
        this.http.get<Post[]>('https://live-post-84cc0-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            tap((listOfPosts:Post[])=>{

                //send the responce back to Post service
                this.postService.setPost(listOfPosts);
        })
        ).subscribe();
    }

}