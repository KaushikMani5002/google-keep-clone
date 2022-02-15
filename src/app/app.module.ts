import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RemindersComponent } from './reminders/reminders.component';
import { EditLabelsComponent } from './edit-labels/edit-labels.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NotesComponent } from './notes/notes.component';
import { EditnotesComponent } from './editnotes/editnotes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RemindersComponent,
    EditLabelsComponent,
    ArchiveComponent,
    TrashComponent,
    WrapperComponent,
    NotesComponent,
    EditnotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule,

    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: WrapperComponent },
      { path: 'archive', component: ArchiveComponent},
      { path: 'edit-labels', component: EditLabelsComponent },
      { path: 'reminders', component: RemindersComponent },
      { path: 'trash', component: TrashComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
