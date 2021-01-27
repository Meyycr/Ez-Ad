import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';

const JWT_Module_Options: JwtModuleOptions = {
	config: {
		tokenGetter: () => localStorage.getItem('ez_adToken'),
	}
};

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	RegisterComponent,
  ],
	entryComponents: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatFormFieldModule,
		MatInputModule,
		FlexLayoutModule,
		HttpClientModule,
		FormsModule,
		MatDialogModule,
		MatRadioModule,
		MDBBootstrapModule.forRoot(),
		MatSnackBarModule,
		JwtModule.forRoot(JWT_Module_Options)
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
