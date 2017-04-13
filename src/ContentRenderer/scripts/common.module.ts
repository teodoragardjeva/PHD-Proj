import { NgModule } from '@angular/core';
import { TranslatePipe } from './pipes/translationPipe';
import { FilterByFieldPipe } from './pipes/fieldFilterPipe';
import { TranslationService } from './services/translationService';

@NgModule({
    declarations: [TranslatePipe, FilterByFieldPipe],
    providers: [TranslationService],
    exports: [TranslatePipe, FilterByFieldPipe]

})

export class CommonModule { }