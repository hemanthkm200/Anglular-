import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  constructor(
    private postService: PostService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title ='';
    let desciption ='';
    let imagepath = '';

    this.router.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index'];
        const post = this.postService.editPost(this.index);
        title=post.title;
        desciption = post.description;
        imagepath = post.imagelink;
        this.editMode= true;
        }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(desciption, [Validators.required]),
      imageurl: new FormControl(imagepath, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('Onsubmit Called');
    console.log('Title :' + this.form.value.title);
    console.log('Description :' + this.form.value.description);
    console.log('Image_Url :' + this.form.value.imageurl);

    const title = this.form.value.title;
    const description = this.form.value.description;
    const imgpath = this.form.value.imageurl;

    //object
    const post: Post = new Post(
      title,
      description,
      imgpath,
      'HEMANTH',
      new Date(),
      0
    );

    if(this.editMode){
      this.postService.updatePost(this.index,post);
    }
    else{
      this.postService.addPost(post);
    }
   
    this.route.navigate(['/post-list']);
  }
}
