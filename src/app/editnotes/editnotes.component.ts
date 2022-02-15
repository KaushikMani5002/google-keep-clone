import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editnotes',
  templateUrl: './editnotes.component.html',
  styleUrls: ['./editnotes.component.css']
})
export class EditnotesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackbar: MatSnackBar) { }
  newcolor: string= this.data.bgcolor;
  ngOnInit(): void {
  }
  changeColor(color: string, name: string)
  {
    this.newcolor = color;
    this.snackbar.open('Note Color will be changed to '+name, 'Close',{duration: 5000});
  }
}
