# eslint-plugin-enforce-strict

Enforce the rules of javascript&#39;s strict mode

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-enforce-strict`:

```
$ npm install eslint-plugin-enforce-strict --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-enforce-strict` globally.

## Usage

Add `enforce-strict` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "enforce-strict"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "enforce-strict/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





