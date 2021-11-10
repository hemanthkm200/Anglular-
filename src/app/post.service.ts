import { EventEmitter , Injectable } from "@angular/core";
import { Post } from "./post.model"

@Injectable({providedIn:'root'})
export class PostService{

    listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
    listOfPosts: Post[] = [
        // new Post('Mandalpatti',
        //  'Situated on an altitude of 4050 feet Mandalpatti is Madikeri’s famous hilltop. Being a lush green, serene place, Mandalpatti has recently received enormous appraisals from tourists visiting Madikeri. As the area offers tranquility and seclusion, residents of nearby villages often plan their weekends here. A nature lover will surely fall in love with the magnificent beauty of this place! Mandalpatti forms a part of the natural reserves of Pushpagiri forest. Locally, people call this piece of land as Mugilu-Pete or Mugilu-Peth. The literal meaning of both the local names means Market of Cloud or Mist. Abbi falls junction is the best way to have a view of the Mandalpatti. Be careful, as the Mandalpatti forest department may prohibit you from driving the last 3 km. To avoid inconveniences, you may opt for trekking from the checkpoint of Mandalpatti forest until you reach its topmost point. Although a bit strenuous, you will surely have an exciting trekking adventure. As soon as you reach the topmost point, the greenery all around will inevitably force you to fall in love with it. Mandalpatti’s panoramic view is simply astounding. As this region is untouched by commercialization and civilization, this place remains an unrivaled match for the tourist who seeks a soothing environment for relaxation. Lastly, do not forget to experience overnight camping here. It’s worthy of all your efforts to make it to the top of Mandalpatti by trekking. ',
        //  'https://coorgtourism.co.in/images/tourist-places/mandalpatti-trek/mandalpatti-trek-coorg-tourism-opening-time-closing.jpg',
        //  'HEMANTH', new Date(),5),
    
        //   new Post('Kodachadri',
        //   'Kodachadri seems to have attracted the attention of humankind since early prehistory.Several monolithic structures or menhirs were built here in prehistoric times. Rocks with dimensions greater than 12 feet were used in their construction. These large structure can be found just 20 Kilometers outside of Nagara-Nilsakal. A temple dedicated to the Ancient Mother Goddess Mookambika is located near the top of the peak. The temple is a popular destination for Hindu pilgrims and it is said to stand where thousands of years ago Mookambika fought and killed the demon Mookasura. In Historic times, people used to trek from Nagara state, a nearby place and Europeans trekked to the peak during the 19th century. Lewin Bentham Bowring, who served as Commissioner of Mysore between 1862 and 1870, records that Kodachadri is "clothed with splendid forests, and the ascent is very steep indeed in one place near foot....The view from the top of the hill, which has a bluff appearance from the distance, though it is as sharp as a knife in reality, is very fine, commanding a long stretch of great Ghat range, a considerable portion of Canara (Kanara), and a wide view over Malnad".He further records that, Kodachadri is visible from Merti Peak near Sringeri.',
        //   'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/ni9s2tjuknhlkra6zhrvrf7px7hj_kudremukh-950x509.jpg',
        //   'HEMANTH', new Date(),6),
    
        //  new Post('Munnar',
    
        //  'Munnar rises as three mountain streams merge - Mudrapuzha, Nallathanni and Kundala. 1,600 m above sea level, this hill station was once the summer resort of the erstwhile British Government in South India. One of the most sought after honeymoon destinations in Kerala, Munnar is replete with resorts and logding facilities that fit a wide rage of budgets. Sprawling tea plantations, picturesque towns, winding lanes and holiday facilities make this a popular resort town. Among the exotic flora found in the forests and grasslands here is the Neelakurinji. This flower which bathes the hills in blue once in every twelve years, will bloom next in 2030. Munnar also has the highest peak in South India, Anamudi, which towers over 2,695 m.',
    
        //  'https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/tea-gardens-munnar-cover.jpg',
    
        //  'HEMANTH', new Date(),7)
    
      ];

      //Facility 1
      getPost(){
          return this.listOfPosts;
      }

      //Facility2
      deletePost(index: number){
          this.listOfPosts.splice(index,1);
      }

      //Facility 3
      addPost(post: Post){
            this.listOfPosts.push(post);
      }

     editPost(index: number){
        return this.listOfPosts[index];
     }

      updatePost(index: number, post:Post){
          this.listOfPosts[index]=post;
      }

      likeCount(index:number){
          this.listOfPosts[index].likes +=1;

      }

     

      
      setPost(listOfPosts : Post[]){
        this.listOfPosts   = listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
      }

}