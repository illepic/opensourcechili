module.exports = {
  "extends": "airbnb-base",
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "Drupal": true,
    "drupalSettings": true,
    "drupalTranslations": true,
    "domready": true,
    "jQuery": true,
    "_": true,
    "matchMedia": true,
    "Backbone": true,
    "Modernizr": true,
    "CKEDITOR": true
  },
  "rules": {
    "consistent-return": [0],
    "no-underscore-dangle": [0],
    "max-nested-callbacks": [1, 3],
    //"no-mutable-exports": [1],
    "no-plusplus": [1, {
      "allowForLoopAfterthoughts": true
    }],
    "no-param-reassign": [0],
    "no-prototype-builtins": [0],
    "valid-jsdoc": [1, {
      "prefer": {
        "returns": "return",
        "property": "prop"
      },
      "requireReturn": false
    }],
    "brace-style": ["error", "stroustrup"],
    "no-unused-vars": [1]
  }
};
