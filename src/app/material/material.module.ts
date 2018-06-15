import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule

    ],
    exports: [
        CommonModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: []
})
export class MaterialModule { }
