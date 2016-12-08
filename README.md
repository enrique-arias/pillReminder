Getting Started
---------------
Follow the guide from [React-Native Guide](1) and after that it's better if you go to the Android Studio and check in Preferences > Appearance & Behavior > System Settings > Android SDK > Launch Standalone SDK Manager that the following items are installed:
* Tools > Android SDK Tools 25.2.3
* Tools > Android SDK Platform-tools 25.0.1
* Tools > Android SDK Build-tools 23.0.1
* Android 6.0 (API 23) > SDK Platform 23 3
* Android 6.0 (API 23) > Intel x86 Atom_64 System Image 23 9
* Android 6.0 (API 23) > Intel x86 Atom System Image 23 9
* Android 6.0 (API 23) > Google APIs Intel x86 Atom_64 System Image 23 19
* Android 6.0 (API 23) > Google APIs 23 1
* Android 6.0 (API 23) > Sources for Android SDK
* Extras > Broken Intel x86 Atom google_apis 3
* Extras > Android Support Repository 40
* Extras > Google Repository 40
* Extras > Intel x86 Emulator Accelerator (HAXM installer) 6.0.5

Development Notes
-----------------
To run the application you first need to have an Android Virtual Device running
```bash
android avd
```
and then you can execute the application on emulated device using
```bash
react-native run-android
```

Useful Links
----------
* [http://stackoverflow.com/questions/36683726/failed-to-find-build-tools-revision-23-0-1](2)

Solved Issues
-------------

if you see the message:
>* What went wrong:
A problem occurred configuring project ':app'.
 failed to find Build Tools revision 23.0.1

you might need to install the Build Tools, so:
```bash
cd $ANDROID_HOME/tools
android list sdk -a | grep 23.0.1
```

Pick the number of the match from the list, for instance:
>11- Android SDK Build-tools, revision 23.0.1

then pick "11" and then run this command

```bash
android update sdk -a -u -t 11
```

[1]: https://facebook.github.io/react-native/releases/next/docs/getting-started.html
[2]: http://stackoverflow.com/questions/36683726/failed-to-find-build-tools-revision-23-0-1
