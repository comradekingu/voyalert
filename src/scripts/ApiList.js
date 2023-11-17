import apiURLProvider from './ApiURLProvider';
import messaging from '@react-native-firebase/messaging';

export default async function apiList() {
  const baseUrl = apiURLProvider();
  const token = await messaging().getToken();
  try {
    const res = await fetch(baseUrl + '/list?token=' + token);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return {ok: false, error: e.toString()};
  }
}
