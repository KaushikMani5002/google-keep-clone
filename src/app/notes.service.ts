import { Injectable } from '@angular/core';
import { Note } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notelist: any[] = [];
  id:number = 0;

  addNote(id: number,title: any, content: any, color: string, urls: any)
  {
    //this.id+=1;
    if (id-1 in this.notelist)
    {
      this.notelist[id-1].title = title;
      this.notelist[id-1].content = content;
      this.notelist[id-1].color=color;
    }
    else
    {
      this.notelist.push({id , title, content, color, urls});
    }
    console.log(this.notelist);
  }

  getNotes()
  {
    return this.notelist;
  }
 
  constructor() { }
}
