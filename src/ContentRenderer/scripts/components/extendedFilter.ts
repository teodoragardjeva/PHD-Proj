import { Component, Input, Injectable } from '@angular/core';
import { PropertyMeta } from '../models/propertyMeta';
import { TranslationService } from '../services/translationService';
import { Operator } from '../helpers/operator';
import { Utils } from '../helpers/utils';
import { GridConfiguration } from '../models/gridConfiguration';
import { FilterContext } from '../models/filterContext';
import { FilterResult } from '../models/filterResult';
import { FilterRule } from '../models/filterRule';

@Component({
    selector: 'extended-filter',
    templateUrl: '../../views/extendedFilterView.html'
})

@Injectable()
export class ExtendedFilter {
    @Input()
    config: GridConfiguration;
    public visible = false;
    private visibleAnimate = false;
    public visibleColumnsMeta: PropertyMeta[];
    public filterContexts: FilterContext[];
    public filterRules: FilterRule[];
    private _translationService: TranslationService;

    constructor(_translationService: TranslationService) {
        this._translationService = _translationService;
    }

    private initialize(): void {
        
        let visibleColumnsMeta: PropertyMeta[] = [];

        this.filterRules = [];

        for (let i = 0; i < this.config.meta.length; i += 1) {
            if (!this.config.meta[i] || this.config.configuration.visibleColumns.indexOf(this.config.meta[i].name) < 0) {
                continue;
            }

            visibleColumnsMeta.push(this.config.meta[i]);
        }

        this.filterContexts = Utils.setFilterOperators(this._translationService, visibleColumnsMeta);

    }

    public addFilter() {
        if (!this.filterRules) {
            this.filterRules = [];
        }

        this.filterRules.push(new FilterRule());


    }

    public columnSelected(val, filter) {
        if (!filter || !filter.model) {
            return;
        }

        filter.selectedContext = val;
        filter.model.field = !val ? void (0) : val.name;
    }

    public show(): void {
        this.initialize();
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);
    }


    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    
}
