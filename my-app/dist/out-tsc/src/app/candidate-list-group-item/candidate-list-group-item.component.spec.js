import { async, TestBed } from '@angular/core/testing';
import { CandidateListGroupItemComponent } from './candidate-list-group-item.component';
describe('CandidateListGroupItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CandidateListGroupItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CandidateListGroupItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=candidate-list-group-item.component.spec.js.map