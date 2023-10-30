import axios from "axios";
const globalconst={ language_OPTIONS:[
    {
      item: 'Assamese',
      key: 'assamese',
    },
    {
      item: 'Bangla',
      key:'bangla',
    },
    {
      item: 'English',
      key: 'english',
    },
    {
      item: 'Gujrati',
      key: 'gujrati',
    },
    {
      item: 'Hindi',
      key: 'hindi',
    },
    {
      item: 'Kannada',
      key: 'kannada',
    }, 
    {
      item: 'Malayalam',
      key: 'malayalam',
    },  
    {

      item: 'Manipuri',
      key: 'manipuri',
    },
    {
      item: 'Marathi',
      key: 'marathi',
    },
    {
      item: 'Oriya',
      key: 'oriya',
    },
    {
      item: 'Punjabi',
      key: 'punjabi',
    },
    {
      item: 'Tamil',
      key: 'tamil',
    },
    {
      item: 'Telegu',
      key: 'telegu',
    }
   ],
   apiBaseUrl:'https://bhaasha.iiit.ac.in/crowd',
   
  }

  export default globalconst;
  axios.defaults.baseURL = 'https://bhaasha.iiit.ac.in/crowd',
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  axios.defaults.headers.get['Content-Type'] ='application/json';