/**
 * @fileoverview Disallow undeclared variables, but allow global function calls
 * @author Steven
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-undef-allow-func"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6
    }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-undef-allow-func", rule, {

    valid: [
        // give me some code that won't trigger a warning
        { code: "var foo = 3;" },
        { code: "reports_alert();" },
        { code: "typeof test;" }
    ],

    invalid: [
        {
            code: "foo = 3;",
            errors: [{
                message: "'foo' is not defined.",
                type: "Identifier"
            }]
        },
        {
            code: "var foo = 2; \nbar = 3;",
            errors: [{
                message: "'bar' is not defined.",
                type: "Identifier"
            }]
        },
        {
            code: "var foo = 2; bar = 3;",
            errors: [{
                message: "'bar' is not defined.",
                type: "Identifier"
            }]
        },
        {
            code: "test;",
            errors: [{
                message: "'test' is not defined.",
                type: "Identifier"
            }]
        }
    ] // ref.identifier.parent.type CallExpression
});
