// angular
import { Injectable } from '@angular/core';

// app
import { IStorage, StorageKey } from '../../../app/modules/core/interface/istorage';

// nativescript
import * as appSettings from 'application-settings';

@Injectable()
export class StorageNative extends IStorage {
  setItem(key: StorageKey, value: any): void {
    appSettings.setString('' + key, value === null ? null : JSON.stringify(value));
  }

  getItem(key: StorageKey): any {
    const value = appSettings.getString('' + key);
    return value === null ? null : JSON.parse(value);
  }

  removeItem(key: StorageKey): void {
    appSettings.remove('' + key);
  }
}
