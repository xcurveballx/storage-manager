/**
 * Class Storage manages saving & retrieving data.
 * Can be further extended to suit your needs better.
 *
 * @author Curveball <x.curveball.x@gmail.com>
 * @license MIT
 */
class Storage {
  /**
   * Creates a new Storage.
   * @param {object} options object with options (key/value pairs).
   */
  constructor(options) {
    /**
     * @default
     * @property {string}  setting.type the default storage type.
     */
    let settings = {
      type: 'sessionStorage'
    };

    this.settings = Object.assign(settings, options);
    this.dataObject = {};
    this.storage = window[settings.type];
  }

  /**
   * Checks whether the storage available.
   * @returns {boolean}
   */
  isAvailable() {
    try {
      let x = '__storage_test__';
      this.storage.setItem(x, x);
      this.storage.removeItem(x);
      return true;
    } catch(e) {
      return false;
    }
  }

  /**
   * Saves the data.
   * @param {string} name storage item name.
   * @param {object} data data to be stored.
   * @returns {boolean|string} returns false or storage item name.
   */
  save(name, data) {
    let dataStr = JSON.stringify(data);

    if(!this.isAvailable()) {
      this.dataObject[name] = dataStr;
      return false;
    }

    try {
      this.storage.setItem(name, dataStr);
      return name;
    } catch(e) {
      this.dataObject[name] = dataStr;
      return false;
    }
  }

  /**
   * Returns the requested data.
   * @param {string} name storage item name.
   * @returns {object} returns requested data.
   */
  restore(name) {
    let restoredData = this.dataObject[name] ? this.dataObject[name] : this.storage.getItem(name);
    return JSON.parse(restoredData);
  }

  /**
   * Removes indicated storage item.
   * @param {string} name storage item name.
   * @returns {undefined}
   */
  remove(name) {
    this.storage.removeItem(name);
  }

  /**
   * Clears all the data.
   * @returns {undefined}
   */
  clear() {
    this.storage.clear();
  }
}
export default Storage;
