# ionic1-googlelogin

#Set up to Communicate with Google+ For Android

https://developers.google.com/mobile/add?&cntapi%20=%20signin

Create a Google API Console.
For this, Sign in to https://console.developers.google.com  with your Gmail account.
From the project drop-down, select an existing project, or create a new one by selecting Create a new project.
In the sidebar under "API Manager", select Credentials, then select the OAuth consent screen tab.
Choose an Email Address, specify a Product Name, and press Save.
In the Credentials tab, select the Create credentials drop-down list, and choose OAuth client ID.
Under Application type, select Web application.
In the Authorized JavaScript origins field, enter the origin for your app. Example : http://localhost:8080.
The Authorized redirect URI field does not require a value. Press the Create button.
From the resulting OAuth client dialog box, copy the Client ID. The Client ID lets your app access enabled Google APIs.
Go to Library sidebar menu, Go to Google+ API -> Click Enable.

Now Generate SHA1 key 

For MAC/Linux :
$ keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore -list –v
Enter keystore password: Type "android" if using debug.keystore
For Windows , run this command : 
$ keytool -exportcert -list -v \ -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore

To configure Android, generate a configuration file here. Once Google Sign-In is enabled Google will automatically create necessary credentials in Developer Console.
Generate a configuration file: Select your app project name you created in Google API console and your android package name will be your app widget ID (which is in your config.xml file). Enable the Google plus service and get your config file.


#Install Required Cordova Plugin to Interact With Google+ Native SDK
After you have done all the above configurations, it’s time to install the plugin into your app. Follow these steps to get this DONE:

Using your terminal window, go to your Ionic app folder.

Run the following command to install the plugin changing the variable with your own value of client id:

$ cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid

you can get client id from google-services.json file
