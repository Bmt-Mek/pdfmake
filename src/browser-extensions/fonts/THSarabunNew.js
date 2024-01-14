var fs = require('fs');

var fontContainer = {
  vfs: {
    'THSarabunNew-Regular.ttf': {
      data: fs.readFileSync(__dirname + '/../../../fonts/THSarabunNew/THSarabunNew-Regular.ttf', 'base64'),
      encoding: 'base64',
    },
    'THSarabunNew-Bold.ttf': {
      data: fs.readFileSync(__dirname + '/../../../fonts/THSarabunNew/THSarabunNew-Bold.ttf', 'base64'),
      encoding: 'base64',
    },
    'THSarabunNew-Italic.ttf': {
      data: fs.readFileSync(__dirname + '/../../../fonts/THSarabunNew/THSarabunNew-Italic.ttf', 'base64'),
      encoding: 'base64',
    },
    'THSarabunNew-BoldItalic.ttf': {
      data: fs.readFileSync(__dirname + '/../../../fonts/THSarabunNew/THSarabunNew-BoldItalic.ttf', 'base64'),
      encoding: 'base64',
    },
  },
  fonts: {
    THSarabunNew: {
      normal: 'THSarabunNew-Regular.ttf',
      bold: 'THSarabunNew-Bold.ttf',
      italics: 'THSarabunNew-Italic.ttf',
      bolditalics: 'THSarabunNew-BoldItalic.ttf',
    },
  },
};

var _global =
  typeof window === 'object' ? window : typeof global === 'object' ? global : typeof self === 'object' ? self : this;
if (typeof _global.pdfMake !== 'undefined' && typeof _global.pdfMake.addFontContainer !== 'undefined') {
  _global.pdfMake.addFontContainer(fontContainer);
}

if (typeof module !== 'undefined') {
  module.exports = fontContainer;
}
