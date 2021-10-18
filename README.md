# Trivial App - A trivia app for a random code challenge

# Todos and considerations

- Add UI tests for screens with enzyme and/or react-testing-library
- Add tests for hooks

Some other considerations:

1 - Overall this application can be improved by adding support for all the options the trivia game api offers. This would consume more time than I can afford at the moment and to be honest, it's not part of the requirements.

2 - The useQuizGame hook could be moved to a React context so the state is shared in one place. I started simple just by passing parameters between screens but to power all the features of this game I'd consider moving to a react context.



## Setup

It's recommended you have installed nvm.

To setup everything run: 

```bash
# optional. otherwise check .nvmrc file and install that node version

nvm use
``` 

`yarn install`

## Running

Running requires that you have your environment setup to run React Native (RN) applications. If you have not do so yet then please follow the official [this](https://reactnative.dev/docs/environment-setup) environment setup guide. Although this project is setup with Expo, which makes things simpler, you are likely to need a proper RN setup to debug your code.

**Running on iOS simulator:**

`yarn ios`

**Running on android simulator:**

`yarn android`


## Testing

Testing setup is quite simple and just demonstrative at this stage as I did not want to be fiddling with all those dev packages right now. This is something that can be done as an improvement certainly - wish I had the time...

To run tests do:

`yarn test`