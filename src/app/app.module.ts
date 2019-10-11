import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ReversestringPipe } from './reversestring.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmployeeComponent,
    HomeComponent,
    ContactusComponent,
    SidebarComponent,
    ReversestringPipe,


  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ConfirmDialogModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    SidebarModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],

})
export class AppModule { }
