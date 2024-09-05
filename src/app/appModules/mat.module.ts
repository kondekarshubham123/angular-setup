import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

const material : any = [
    MatToolbarModule,
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        material
    ],
    exports: [
        material
    ]
})
export class MatModule { }