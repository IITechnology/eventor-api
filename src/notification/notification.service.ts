import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();
import { AndroidConfig, ApnsConfig } from 'firebase-admin/lib/messaging/messaging-api';

const firebaseConfig= {
  projectId: process.env.Firebase_projectId,
  client_email: 'firebase-adminsdk-qjtt9@api-project-842404858396.iam.gserviceaccount.com',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCaRT2chWHWSK3X\nQVc9J9O6H3rqH4Lxy+BHlvJ1PI4KAfzibYp9tRGYXWBMzgb5HU5jGLZdm1Fcf2p7\nUb7Ew4daAGfHMFRn3Tv6kFpRmxLG8V9h5GiOcnbm/rThhyp1Ij+97vMScOl3NKUc\n+oQ0MYzlC0GCsrP+5Kf20bCOODh5Ht9NlANwxApR5ScAdH3TgjhIsyBaq77jlr+r\nGOSVgWJfivwR/3PXf+dFrovUpFTIKMfNVJKoyQcDkPEEVfX+oEumIfB1oEdikf29\n0T9YzTjEw7R3hQUygqaFqRKSVTdDzuYSIs0nS+YTAjKpp8aNC2T/PhO8qb6JYk37\nX78CHi8hAgMBAAECggEAAPeSfCLelaQiqYOd2I123NGqCMIGJUjku4jSipyaEVhT\ngwHdHo5I3B59u42Gaqpd3ZjVOn9Tl75ZZwjV/CVzpENLY0AbegPfhoxqxzHZ1h3D\nk3lbPxqwQctyoSqilVW6djuDZ5KwoVAsVs2qkCndWxQ30WoYXxkvhQhp0G0WzDTn\nAfzy5xNg/76w7H2eY9AVAEx48AbGwn25rOe15DtlyyM5dgMBjJIRlOhCa90Xf5Pu\naSRqU9drfefgSPwP0TB2HzOMoUyY9748NdQHr3qjGDgg2QgV5IU9N+0r315+bFUX\nrSvfN9LyszviRkvGgtM8bkTyoJPBCgZjCsxfXcarLwKBgQDTxXi7LkmYHIrsisjF\nL+Zig2JafN9S99Pr6xw1I+gXL7ab1jZpQrxf4wRIhlX6QBNbkzlQvNEm6J0Bwi/i\nd4/+5xPWTBwSky68xdS69Q3nzpxV+4nTwcTly730QcNNdPNpyzmFUS0j4L5eD+Cu\n73FFxePcux1fD50F2/xisczLOwKBgQC6fW/Im54FgAJDRx4jjCe9BiMIpSsqbhtq\nJy9jj/Ohd69yQsOaXv92KSAJR1b0piQtWXmTZBO1Un5AxETwyasOVR8IFQTsNi42\npcrDNzNhC2imxVf7XsvU+nr6QI5N0uXdhxAWR6ID0pAoZxDYTk+0+mOFtjlszYXj\nlJaqbFYxUwKBgQCRyadEzSfS9Qtarmxq+3/SH/rMqpyfpIcbKb9AghicJbfD7qOE\nsXG3XTSsrPZxkj0BVQgnIeWmsIquFD4c3QyfgfsxEzJcQ0Dwqgy6LEvHYoBT3RfU\nVNg1Dp8VkVRfdXzBPyu5MNovkd/cJ3gZVjOXwhUM9y/QKpKB3yEP3LFM0wKBgQCZ\n8IVfoSV2AM7dXk1Apqb+35v3vO++3JkArUvu8Zr4hGVs+jOgsB5MGXJ6dksPND3U\nuXEj+45RNMFHETyfTrlG4Xj2IPOpUKghMAYJ0v00dEh0sZ4Iv52eNw1gmf1dvGNG\n1ACxg3v3j86zqzA6fZpKGA4jB+KrL5P/4l3kW/1iRQKBgFH85/kf1penKd3T8zEe\nmTDdSc7x+4xVN6s9I3IP+e983MMWEH7J3SCanLfQY9tvmo9LV8HUZJdQVDKkLMdg\nRMUJ+FoIWmsy2PCfCJox2Nz5lLAlQM9e0YdjoU+wfWcfWheat84TO0JqEI5ffT+A\n9N83jgpHt1qwprgGzbqLJHlA\n-----END PRIVATE KEY-----\n'.replace(/\\n/gm, "\n"),
  apiKey: process.env.Firebase_apiKey,
  authDomain: process.env.Firebase_authDomain,
  databaseURL: process.env.Firebase_databaseURL,
  storageBucket: process.env.Firebase_storageBucket,
  appId: process.env.Firebase_appId
};

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
});

@Injectable()
export class NotificationService {

  private android:AndroidConfig = {
    priority: 'high'
  }

  private apns:ApnsConfig = {
    payload: {
      aps: {
        contentAvailable: true,
      },
    },
    headers: {
      'apns-priority': '5', // Must be `5` when `contentAvailable` is set to true.
    },
  };

  async sendPushNotification(token: string, title: string, body: string) {
      return await firebase.messaging().send({
          notification: { title, body },
          token: token,
          android: this.android,
          apns: this.apns
      });
  }

  // async sendOTP(phoneNumber) {  
  //   return await firebase.auth().createCustomToken(phoneNumber);
  // }

  // async verifyOTP(idToken) {  
  //   return await firebase.auth().verifyIdToken(idToken);
  // }

}