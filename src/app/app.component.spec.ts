import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>,
        app: AppComponent,
        compiled: any;

    beforeEach((async () => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [],
            providers: []
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));
});
