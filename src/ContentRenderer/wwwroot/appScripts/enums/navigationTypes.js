System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavigationType;
    return {
        setters:[],
        execute: function() {
            (function (NavigationType) {
                NavigationType[NavigationType["Recent"] = 1] = "Recent";
                NavigationType[NavigationType["Favourite"] = 2] = "Favourite";
                NavigationType[NavigationType["All"] = 3] = "All";
            })(NavigationType || (NavigationType = {}));
            exports_1("NavigationType", NavigationType);
        }
    }
});

//# sourceMappingURL=navigationTypes.js.map
