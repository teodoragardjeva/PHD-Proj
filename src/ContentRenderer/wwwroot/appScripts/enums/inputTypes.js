System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InputTypes;
    return {
        setters:[],
        execute: function() {
            (function (InputTypes) {
                InputTypes[InputTypes["Text"] = 1] = "Text";
                InputTypes[InputTypes["Number"] = 2] = "Number";
                InputTypes[InputTypes["Textbox"] = 3] = "Textbox";
                InputTypes[InputTypes["Search"] = 4] = "Search";
                InputTypes[InputTypes["Checkbox"] = 5] = "Checkbox";
                InputTypes[InputTypes["Select"] = 6] = "Select";
                InputTypes[InputTypes["Date"] = 7] = "Date";
            })(InputTypes || (InputTypes = {}));
            exports_1("InputTypes", InputTypes);
        }
    }
});

//# sourceMappingURL=inputTypes.js.map
