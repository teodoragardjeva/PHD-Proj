import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByField',
})

export class FilterByFieldPipe implements PipeTransform {
    transform(items: any[], field: string, compareValue: any) {
        if (!items) return [];
        return items.filter(function (item) {
            return item && item[field] && item[field] == compareValue;
        });
    }
}