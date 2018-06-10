import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="content-cointainer">
            <div class="content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent { }
