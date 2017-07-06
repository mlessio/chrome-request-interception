# Chrome Remote Protocol Request Interception Test
This repo serves only as a standalone demonstration of how to capture a request. As of writing, this is currently not working on google-chrome stable and beta channels: (https://groups.google.com/d/msg/chrome-debugging-protocol/MaIbpNPWqgI/56G3ep-aAwAJ.

It is correctly working on the google-chrome-unstable branch, that is Google Chrome 61.
It is correctly working only with the --headless flag.

Created to share with the Chrome team to gain an understanding of if I'm either doing it wrong, or if theres a bug.

Tested on Ubuntu, Chrome UNSTABLE.

### Running this example
* **Install dependencies** `yarn install`
* **Run** `node index.js`

Then, uncomment the `--headless` flag line and try again.

![image](https://user-images.githubusercontent.com/39191/27889353-c0584f70-61a0-11e7-9c5a-65e558ee332e.png)
