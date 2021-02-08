import axios from "axios";

const TOKEN = 'key9qHgAnpNZcjAed';

export default class Client {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.airtable.com/v0/appffVukZOpxg6Bfh',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      }
    });
  }

  getPeriodInfo(period) {
    return  this.client
      .get(`/TestData/${period}`)
      .then(result => result.data)
      .then(data => {
        return [
          {
            value: 1,
            type: 'orders',
            text: 'This is order',
          },
          {
            value: 3,
            type: 'money',
            text: 'This is money',
          },
          {
            value: 100,
            type: 'hours',
            text: 'This is hours',
          }
        ];
      })
  }
}