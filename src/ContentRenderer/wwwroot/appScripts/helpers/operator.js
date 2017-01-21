System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Operator;
    return {
        setters:[],
        execute: function() {
            class Operator {
                constructor(label, id, index) {
                    this.label = label;
                    this.id = id;
                    this.index = index;
                }
            }
            exports_1("Operator", Operator);
        }
    }
});

//# sourceMappingURL=operator.js.map
