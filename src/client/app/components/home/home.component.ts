// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, StorageService, StorageKey } from '../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  
  public passphrase: string;

  constructor(
    private routerext: RouterExtensions,
    private storage: StorageService
    ){}

  ngOnInit() {
    this.passphrase = '';
  }

  setPassphrase(): boolean {
    this.passphrase = this.passphrase.trim();
    if(this.passphrase !== '') {
      this.storage.setItem(StorageKey['PASSPHRASE'], this.passphrase);
      //this.routerext.navigate([''])
    }
    return false;
  }
}
