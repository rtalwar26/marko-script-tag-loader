const scriptTagRemover = require('./')
const fs = require('fs');

scriptTagRemover(fs.readFileSync(require.resolve('./test.marko'), 'utf8'), null);




