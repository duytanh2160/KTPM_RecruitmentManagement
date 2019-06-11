import { async, TestBed } from '@angular/core/testing';
import { CandidateListSearchComponent } from './candidate-list-search.component';
describe('CandidateListSearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CandidateListSearchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CandidateListSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=candidate-list-search.component.spec.js.map