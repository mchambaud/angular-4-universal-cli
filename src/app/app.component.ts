import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'app works!';

    constructor(@Inject(PLATFORM_ID) private platformId: Object,) {
        if (isPlatformServer(this.platformId)) {
            console.log(`talking to server and using environment: ${environment.name}`);
        }

        if (isPlatformBrowser(this.platformId)) {
            console.log(`talking to browser and using environment: ${environment.name}`);
        }
    }
}
