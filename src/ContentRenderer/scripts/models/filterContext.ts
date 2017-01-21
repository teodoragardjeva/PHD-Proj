import { Operator } from '../helpers/operator';
import { PropertyMeta } from './propertyMeta';
export class FilterContext {
    propertyMeta: PropertyMeta;
    operators: Operator[]
}