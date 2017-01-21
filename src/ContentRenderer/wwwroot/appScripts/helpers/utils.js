System.register(['./operator', '../enums/operators', '../models/filterContext', '../enums/inputTypes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var operator_1, operators_1, filterContext_1, inputTypes_1;
    var Utils;
    return {
        setters:[
            function (operator_1_1) {
                operator_1 = operator_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            },
            function (filterContext_1_1) {
                filterContext_1 = filterContext_1_1;
            },
            function (inputTypes_1_1) {
                inputTypes_1 = inputTypes_1_1;
            }],
        execute: function() {
            class Utils {
                static setFilterOperators(translationService, visibleColumnsMeta) {
                    var rules = [];
                    if (!translationService) {
                        return rules;
                    }
                    var numberOperators, stringOperator, singleOperators;
                    numberOperators = [
                        new operator_1.Operator('>', operators_1.Operators.Greater, 1),
                        new operator_1.Operator('>=', operators_1.Operators.GreaterOrEqual, 2),
                        new operator_1.Operator('=', operators_1.Operators.Equal, 3),
                        new operator_1.Operator('<=', operators_1.Operators.LessOrEqual, 4),
                        new operator_1.Operator('<', operators_1.Operators.Less, 5),
                        new operator_1.Operator(translationService.translate('between'), operators_1.Operators.Between, 6)
                    ];
                    stringOperator = [
                        new operator_1.Operator(translationService.translate('is'), operators_1.Operators.Is, 7),
                        new operator_1.Operator(translationService.translate('contains'), operators_1.Operators.Contains, 8),
                        new operator_1.Operator(translationService.translate('none'), operators_1.Operators.None, 9),
                        new operator_1.Operator(translationService.translate('any'), operators_1.Operators.Any, 10),
                        new operator_1.Operator(translationService.translate('isNot'), operators_1.Operators.IsNot, 11),
                        new operator_1.Operator(translationService.translate('startsWith'), operators_1.Operators.StartsWith, 12),
                    ];
                    singleOperators = [
                        new operator_1.Operator(translationService.translate('is'), operators_1.Operators.Is, 7),
                        new operator_1.Operator(translationService.translate('contains'), operators_1.Operators.Contains, 8),
                        new operator_1.Operator(translationService.translate('none'), operators_1.Operators.None, 9),
                        new operator_1.Operator(translationService.translate('any'), operators_1.Operators.Any, 10),
                        new operator_1.Operator(translationService.translate('isNot'), operators_1.Operators.IsNot, 11),
                    ];
                    for (let i = 0; i < visibleColumnsMeta.length; i += 1) {
                        let rule = new filterContext_1.FilterContext();
                        rule.propertyMeta = visibleColumnsMeta[i];
                        switch (rule.propertyMeta.type) {
                            case inputTypes_1.InputTypes.Number:
                            case inputTypes_1.InputTypes.Date:
                                rule.operators = numberOperators;
                                break;
                            case inputTypes_1.InputTypes.Text:
                            case inputTypes_1.InputTypes.Search:
                            case inputTypes_1.InputTypes.Textbox:
                                rule.operators = stringOperator;
                                break;
                            case inputTypes_1.InputTypes.Select:
                            case inputTypes_1.InputTypes.Checkbox:
                                rule.operators = singleOperators;
                                break;
                        }
                        rules.push(rule);
                    }
                    return rules;
                }
            }
            exports_1("Utils", Utils);
        }
    }
});

//# sourceMappingURL=utils.js.map
