import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../notes';
import { MatDialog } from '@angular/material/dialog';
import { EditnotesComponent } from '../editnotes/editnotes.component';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  note_title!: Note["title"];
  note_desc!: Note["content"];
  note_id: Note["id"] = 0;
  notes: any[] = [];
  bgcolor: string = "#F5F5F5";

  selectedFiles!: File;

  constructor(private noteService: NotesService, public dialog: MatDialog) 
  {  }
  allnotes: any = this.noteService.getNotes();
  element_id: any;
  ngOnInit(): void {
  }

  changeColor(color: string)
  {
    this.bgcolor = color;
  }
onSubmit()
{
  this.noteService.addNote(this.noteService.getNotes().length + 1,this.note_title, this.note_desc, this.bgcolor, this.imageurl);
  console.log(this.allnotes);
  this.imageurl = [];
  //console.log(this.allnotes);
  //console.log(this.bgcolor);
}


openDialog(notenumber: any, title: any, content: any, color: string, urls: any)
{
  let dialogRef = this.dialog.open(EditnotesComponent, {data: {id: notenumber,title: title, desc: content, color: color, urls: urls}});
  dialogRef.afterClosed().subscribe(result => { 
    const myArray = result.split(','); 
    this.note_title = "";
    this.note_desc = "";
    //this.note_id = myArray[2];
    //console.log(this.note_title, this.note_desc, this.note_id);
    //document.getElementById(this.note_id.toString())!.remove();
    //this.allnotes[notenumber].note_title = myArray[0];
    //this.allnotes[notenumber].note_desc = myArray[1];
    this.noteService.addNote(myArray[2], myArray[0], myArray[1], myArray[3], myArray[4]);
   //console.log(this.allnotes);
  } );  
}

imageurl: any[] = [];

onChange(event: any)
{
  var reader = new FileReader;
  reader.readAsDataURL(event.target.files[0]);
  reader.onload=(event: any)=>{
    this.imageurl.push(event.target.result)
  }
  //this.selectedFiles = <File>event.target.files[0];
  //console.log(event, this.selectedFiles);
  console.log(this.imageurl);
}

}
