// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { SharedModule } from '../shared/index';
import { NOTES_APP_PROVIDERS } from './services/index';
import { MultilingualModule } from '../i18n/multilingual.module';

@NgModule({
  imports: [
    SharedModule,
    MultilingualModule,
  ],
  providers: [
    ...NOTES_APP_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SharedModule
  ]
})

export class NotesAppModule {
	constructor(@Optional() @SkipSelf() parentModule: NotesAppModule) {
    if (parentModule) {
      throw new Error('NotesAppModule already loaded; Import in root module only.');
    }
  }
}