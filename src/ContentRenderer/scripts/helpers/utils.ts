import { Operator } from './operator';
import { TranslationService } from '../services/translationService';
import { Operators } from '../enums/operators';
import { PropertyMeta } from '../models/propertyMeta';
import { FilterContext } from '../models/filterContext';
import { InputTypes } from '../enums/inputTypes';


export class Utils {

    public static setFilterOperators(translationService: TranslationService, visibleColumnsMeta: PropertyMeta[]): FilterContext[] {
       
        var rules: FilterContext[] = [];

        if (!translationService) {
            return rules;
        }

        var numberOperators: Operator[], stringOperator: Operator[], singleOperators: Operator[];

        numberOperators = [
            new Operator('>', Operators.Greater, 1),
            new Operator('>=', Operators.GreaterOrEqual, 2),
            new Operator('=', Operators.Equal, 3),
            new Operator('<=', Operators.LessOrEqual, 4),
            new Operator('<', Operators.Less, 5),
            new Operator(translationService.translate('between'), Operators.Between, 6)
        ];

        stringOperator = [
            new Operator(translationService.translate('is'), Operators.Is, 7),
            new Operator(translationService.translate('contains'), Operators.Contains, 8),
            new Operator(translationService.translate('none'), Operators.None, 9),
            new Operator(translationService.translate('any'), Operators.Any, 10),
            new Operator(translationService.translate('isNot'), Operators.IsNot, 11),
            new Operator(translationService.translate('startsWith'), Operators.StartsWith, 12),
        ];

        singleOperators = [
            new Operator(translationService.translate('is'), Operators.Is, 7),
            new Operator(translationService.translate('contains'), Operators.Contains, 8),
            new Operator(translationService.translate('none'), Operators.None, 9),
            new Operator(translationService.translate('any'), Operators.Any, 10),
            new Operator(translationService.translate('isNot'), Operators.IsNot, 11),
        ]; 

        for (let i = 0; i < visibleColumnsMeta.length; i += 1) {
            let rule: FilterContext = new FilterContext();
            rule.propertyMeta = visibleColumnsMeta[i];

            switch (rule.propertyMeta.type) {
                case InputTypes.Number:
                case InputTypes.Date:
                    rule.operators = numberOperators;
                    break;
                case InputTypes.Text:
                case InputTypes.Search:
                case InputTypes.Textbox:
                    rule.operators = stringOperator;
                    break;
                case InputTypes.Select:
                case InputTypes.Checkbox:
                    rule.operators = singleOperators
                    break;
            }

            rules.push(rule);
        }

        
        return rules;
    }
    
}