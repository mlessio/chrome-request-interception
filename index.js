const CRI = require('chrome-remote-interface')
const ChromeLauncher = require('chrome-launcher')

const go = async() => {
  const Chrome = await ChromeLauncher.launch({
    chromeFlags: ['--headless'],
    port: 9222,
    chromePath: '/usr/bin/google-chrome-unstable'
  })

  const devtools = await CRI()
  const {
    Page,
    Network
  } = devtools

  await Promise.all([
    Page.enable(),
    Network.enable()
  ])

  await Network.enableRequestInterception({
    enabled: true
  })

  await Page.navigate({
    url: 'http://www.repubblica.it'
  })

  devtools.on('event', event => {
    if (event.method === 'Network.requestIntercepted') {
      Network.continueInterceptedRequest({
        "interceptionId": event.params.interceptionId
      });
      console.log('intercepted!');

    }
  })

  Page.loadEventFired(() => Chrome.kill())
}

go()
