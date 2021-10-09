<p text-align="center">
	<img src='https://links.papareact.com/t4i' alt='facebook' />    
</p>


# Facebook 2.0

Facebook clone using Next JS and Firebase

Tutorial from [Sonny Sangha](https://youtu.be/dBotWYKYYWc) 

### Setup 👷‍♂️

- [Setup Facebook App](https://youtu.be/dBotWYKYYWc?t=4059)

  - Copy the Facebook App Id & Secret

  - Create a file named `.env.local` in root dir

    ```bash
    $ touch .env.local
    ```

  - Enter content like this

    ```
    FACEBOOK_ID=YOUR_FACEBOOK_APP_ID
    FACEBOOK_SECRET=YOUR_FACEBOOK_APP_SECRET
    NEXTAUTH_URL=http://localhost:3000
    ```

    

- [Setup Firebase](https://youtu.be/dBotWYKYYWc?t=8939)

  - head over to [Firebase Console](https://console.firebase.google.com) and create project by enabling Firestore & Storage

  - Create a web app and copy the firebase config

  - Create a new file named `firebaseConfig.js` in the root dir

    ```bash
    $ touch firebaseConfig.js
    ```

  - Enter firebase config in that file like this

    ```javascript
    const firebaseConfig = {
      apiKey: 'apiKey',
      authDomain: 'authDomain',
      projectId: 'projectId',
      storageBucket: 'storageBucket',
      messagingSenderId: 'messagingSenderId',
      appId: 'appId',
    };
    
    export default firebaseConfig;
    ```

- Install dependencies

  ```bash
  $ npm install
  # Or using yarn
  $ yarn install
  ```

- Run development server

  ```bash
  $ npm run dev
  # Or using yarn
  $ yarn dev
  ```

Happy Coding 😉
