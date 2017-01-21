System.register(['./filterResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var filterResult_1;
    var FilterRule;
    return {
        setters:[
            function (filterResult_1_1) {
                filterResult_1 = filterResult_1_1;
            }],
        execute: function() {
            class FilterRule {
                constructor() {
                    this.model = new filterResult_1.FilterResult();
                }
            }
            exports_1("FilterRule", FilterRule);
        }
    }
});

//# sourceMappingURL=filterRule.js.map
