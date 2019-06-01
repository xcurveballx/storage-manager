/**
 * StorageManager manages saving & retrieving data.
 * Can be further extended to suit your needs better.
 *
 * MIT License
 * Copyright (c) 2019 curveball (https://github.com/xcurveballx)
 */

export default class StorageManager {
  let settings = {
    type: 'sessionStorage'
  },
      dataObject = storage = null;

  constructor(options) {
    settings = Object.assign(settings, options);
    dataObject = {};
    storage = window[settings.type];
  }

  // checks whether the storage available
  isAvailable() {
    try {
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch(e) {
      return false;
    }
  }

  // saves the data item
  save(name, data) {
    let dataStr = JSON.stringify(data);

    if(!this.isAvailable()) {
      dataObject[name] = dataStr;
      return false;
    }

    try {
      storage.setItem(name, dataStr);
      return name;
    } catch(e) {
      dataObject[name] = dataStr;
      return false;
    }
  }

  // returns the requested data item
  restore(name) {
    let restoredData = dataObject[name] ? dataObject[name] : storage.getItem(name);
    return JSON.parse(restoredData);
  }

  // removes indicated data item
  remove(name) {
    storage.removeItem(name);
  }

  // clears all the data
  clear() {
    storage.clear();
  }
}
