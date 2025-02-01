# MobileApplication

## Prerequisites

- Homebrew
- Node.js LTS (currently v22)
- pnpm

Everything as described in the [React Native Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) document:

- Xcode
- iOS simulators
- Cocoapods (you might prefer to install this via Homebrew instead)
- JDK
- Android Studio
- Android Development Tools
- Android system images and emulators

All macOS system dependencies installed via Homebrew can be installed using the included [Brewfile](./Brewfile):

```bash
brew bundle --file=<PATH_TO_THIS_REPO>/Brewfile
```

## Setup

### Private Registry Access

The app uses a private registry for some packages, you can see the registry in the `.npmrc` file.

In order to authenticate and access the packages, you'll need to follow the steps outlined [here](https://learn.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=Linuxmac,classic). Use the following substitutions:

| Variable            | Value         |
| ------------------- | ------------- |
| `ORGANIZATION_NAME` | `flagstoneim` |
| `FEED_NAME`         | `Common `     |

## Running mobile app

```bash
# Install dependencies
pnpm i
# Install a package for the mobile app. For example: pnpm nx run mobile:install react-native-unistyles
pnpm nx run mobile:install "<MODULE>"
# Install a list of packages for the mobile app.
pnpm nx run mobile:install --packages "<MODULE>","<MODULE>"
# Create .env file from .env.example and fill in values from 1Password shared vault
cp apps/mobile/.env.example apps/mobile/.env
# Run the prebuild command to (re)generate the native projects
pnpm nx run mobile:prebuild --clean
# Run the project in an iOS simulator
pnpm nx run mobile:run-ios
# Pick an iOS device/simulator to run the project on
pnpm nx run mobile:run-ios -d
# Run the project in an Android simulator
pnpm nx run mobile:run-android
# Pick an Android device/simulator to run the project on
pnpm nx run mobile:run-android -d
```

## DevTools

While Expo CLI is running, press `Shift+m` to bring up the devtools menu.

### React

Select `Open React devtools` from the CLI menu.

### Redux

Select `Open redux-devtools-expo-dev-plugin` from the CLI menu.

## Storybook

```bash
pnpm nx run mobile:storybook
```

## Detox

Available configurations:

- `ios.sim.debug`
- `ios.sim.release`
- `android.emu.debug`
- `android.emu.release`

```bash
# Make sure you've already built the project once before doing a Detox build
pnpm nx run mobile:prebuild --clean
pnpm nx run mobile:run-ios
# Now build the app with Detox enabled
pnpm nx run mobile-e2e:build --configuration=ios.sim.debug
# Finally run the tests
pnpm nx run mobile-e2e:test --configuration=ios.sim.debug
# To run a specific test file. For example, pnpm nx run mobile-e2e:test --configuration=ios.sim.debug --testPathPattern=app.spec.ts
pnpm nx run mobile-e2e:test --configuration=ios.sim.debug --testPathPattern="RELATIVE-PATH-TO-TEST-FILE"
```

## FAQs

### How do I open the software keyboard on an emulator?

- **iOS:** To enable on the emulator:
  - On the emulator, you can use the shortcut `cmd + shift + k` to toggle between the hardware and software keyboard.
  - In the Simulator toolbar, under I/O -> Keyboard, you can toggle connecting the hardware keyboard.
- **Android:** To enable on the emulator:
  1. Go to the Virtual Device Manager.
  2. Find the device you are running the app on, click `Edit`.
  3. Click on `Show Advanced Settings`.
  4. Right at the bottom, make sure that `Enable keyboard input` is disabled.
