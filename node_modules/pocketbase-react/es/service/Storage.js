import AsyncStorage from '@react-native-async-storage/async-storage';
export class StorageService {
  static async get(key) {
    return typeof document !== 'undefined' ? localStorage.getItem(key) : await AsyncStorage.getItem(key);
  }
  static async set(key, value) {
    if (typeof document !== 'undefined') {
      return localStorage.setItem(key, value);
    } else {
      return await AsyncStorage.setItem(key, value);
    }
  }
  static async remove(key) {
    if (typeof document !== 'undefined') {
      return localStorage.removeItem(key);
    } else {
      return await AsyncStorage.removeItem(key);
    }
  }
}
StorageService.Constants = {
  SUBSCRIBED: 'subscribed',
  COOKIE: 'cookie'
};