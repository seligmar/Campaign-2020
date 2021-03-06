const BASEURL = 'http://localhost:3001/'
const NEW_USER_URL = BASEURL + 'new-supporter'
const SIGNIN_URL = BASEURL + 'signin'
const EVENTS_URL = BASEURL + 'events'
const VALIDATE_URL = BASEURL + 'validate'
const DONATE_URL = BASEURL + 'donate'
const NEW_EVENT_URL = BASEURL + 'new-event'
const RSVP_URL = BASEURL + 'rsvp'

// const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())


const rsvp = event => post(RSVP_URL, event)

const signIn = user => post(SIGNIN_URL, user)

const newUser = user => post(NEW_USER_URL, user)

const donate = donation => post(DONATE_URL, donation)

const validate = () => get(VALIDATE_URL)

const getEvents = () => get(EVENTS_URL)

const newEvent = (data) => post(NEW_EVENT_URL, data)


export default { signIn, validate, newUser, donate, getEvents, newEvent, rsvp, }


// // "https://api.propublica.org/congress/v1/members/W000817.json"
// const GOOGLE_API_KEY = 'AIzaSyBuNd5baj7zHX5OmBtTYoBkhW_a4WN81S8'

// const GOOGLE_API_ROOT =
//   'https://www.googleapis.com/civicinfo/v2/representatives?address='

// class API extends React.Component {
//   // fetch(
//   //   `https://www.googleapis.com/civicinfo/v2/representatives?address=90+W+14th+St+Holland+MI+49423&includeOffices=true&key=${GOOGLE_API_KEY}`
//   // ).then(resp => resp.json())
//   // fetch(
//   //   `https://www.googleapis.com/civicinfo/v2/representatives?address=1701+N+Calvert+St+Baltimore+MD+21202&includeOffices=true&key=${GOOGLE_API_KEY}`
//   // ).then(resp => resp.json())


//   // getMemberInfo = () => {
//   //   return fetch(PRO_PUBLICA_MEMBERINFO, {
//   //     method: 'GET',
//   //     headers: {
//   //       'X-API-Key': MY_PRO_PUBLICA_KEY
//   //     }
//   //   }).then(resp => resp.json())
//   // }

//   // getGoogleAPI = () => {}

//   // // const googleCivics = 'https://developers.google.com/identity/protocols/OAuth2'

//   render () {
//     return <div />
//   }
// }


// export default API
