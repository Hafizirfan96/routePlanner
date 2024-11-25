import { storage } from '@/store';
import DeviceInfo from 'react-native-device-info';
import { StorageKeys } from './localstorage';

export const createUniqueId = async () => {
  let uniqueId = await DeviceInfo.getUniqueId();
  return uniqueId;
};

export const getUniqueId = async () => {
  const uniqueId = storage.getString(StorageKeys.DeviceId);
  if (!uniqueId) {
    const deviceId = await createUniqueId();
    storage.set(StorageKeys.DeviceId, deviceId);
    return deviceId;
  }
  return uniqueId;
};
