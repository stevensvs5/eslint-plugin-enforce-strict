/**
 * @fileoverview Disallow undeclared variables, but allow global function calls
 * @author Steven
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow undeclared variables, but allow global function calls",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            // give me methods
            "Program:exit"(/* node */) {
                const globalScope = context.getScope();
                globalScope.through.forEach(function(ref) {
                    if (
                        ref.identifier.parent.type !== 'CallExpression'  &&
                        !(ref.identifier.parent.type === 'UnaryExpression' && ref.identifier.parent.operator === 'typeof')
                    ) {
                        context.report({
                            node: ref.identifier,
                            message: "'{{name}}' is not defined.",
                            data: ref.identifier
                        });
                    }
                });
            }
        };
    }
};
