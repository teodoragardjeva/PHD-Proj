System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Operators;
    return {
        setters:[],
        execute: function() {
            (function (Operators) {
                Operators[Operators["Greater"] = 1] = "Greater";
                Operators[Operators["GreaterOrEqual"] = 2] = "GreaterOrEqual";
                Operators[Operators["Equal"] = 3] = "Equal";
                Operators[Operators["LessOrEqual"] = 4] = "LessOrEqual";
                Operators[Operators["Less"] = 5] = "Less";
                Operators[Operators["Between"] = 6] = "Between";
                Operators[Operators["Is"] = 7] = "Is";
                Operators[Operators["Contains"] = 8] = "Contains";
                Operators[Operators["None"] = 9] = "None";
                Operators[Operators["Any"] = 10] = "Any";
                Operators[Operators["IsNot"] = 11] = "IsNot";
                Operators[Operators["StartsWith"] = 12] = "StartsWith";
            })(Operators || (Operators = {}));
            exports_1("Operators", Operators);
        }
    }
});

//# sourceMappingURL=operators.js.map
