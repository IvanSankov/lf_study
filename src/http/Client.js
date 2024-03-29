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

  getTarkovOffer() {
    return this.client
      .get('/TestData/rec6WVudlthBeyrKY')
      .then(response => response.data);
  }

  getApexOffer() {
    return this.client
      .get('/TestData/recUtgEro7oOsRAPw')
      .then(response => response.data);
  }

  getUserById(id) {
    return this.client
      .get(`/User/${id}`)
      .then(response => response.data);
  }

  createNewUser(data) {
    return this.client
      .post('/User', {
        records: [
          {
            fields: data
          }
        ]
      })
      .then(response => response.data)
  }
}