# Nama : Muhammad Firdaus Sati

# NIM : 119140150

# Kelas : RB

# Package used

1. @react-native-firebase/{app,auth,firestore}
1. @react-navigation/{native,native-stack,stack}
1. expo-location
1. formik
1. lodash
1. yup
1. moment
1. react{,-native{,-dotenv,-safe-area-context,-screens}}

# Dev Dep

1. @babel/{core,runtime}
1. @react-native-community/eslint-config
1. @types/{lodash,react{-native}}
1. @typescript-eslint{eslint-plugin,parser}
1. eslint
1. metro-react-native-babel-preset
1. typescript

# How to setup

1. Clone this repo
1. Create firebase project in firebase console
1. Put the downloaded google-services.json to ./android/app
1. Duplicate .env.example to .env
1. Fill .env with credentials in firebase console
1. Enable Email/Pass auth in firebase
1. Enable Firestore and change the permission as needed in firebase
1. Run `npm i` to install all dep
1. Run `npm run bulid:android` to build the app

# How to install

1. Open the app that has been build in ./android/app/build/outputs/apk/release
1. Transfer the apk file to your phone
1. Install the apk file like any normal apk file

# How to install (Alternative)

1. Transfer the apk file in ./build/android to your phone
1. Install the apk file like any normal apk file

# Note

Make sure to grant the location access permission, sometimes it won't ask the permission automatically, if that happens you need to enable it manually from your device settings
