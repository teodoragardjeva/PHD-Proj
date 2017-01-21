import { FilterContext } from './filterContext';
import { Operator } from '../helpers/operator';
import { FilterResult } from './filterResult';

export class FilterRule {
    selectedContext: FilterContext;
    selectedOperator: Operator;
    model: FilterResult; 

    constructor() {
        this.model = new FilterResult();
    }
}