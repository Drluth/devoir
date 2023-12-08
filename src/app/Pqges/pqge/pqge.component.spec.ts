import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqgeComponent } from './pqge.component';

describe('PqgeComponent', () => {
  let component: PqgeComponent;
  let fixture: ComponentFixture<PqgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqgeComponent]
    });
    fixture = TestBed.createComponent(PqgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' LUXURIANT BUILD',()=>{
    expect(component).toBeTruthy();
    });

    it(`LA FORCE DE L'EXPERIENCE`,()=>{
      expect(component).toBeTruthy();
      });

      it(`NOSAVANTAGES`,()=>{
        expect(component).toBeTruthy();
        });
        
    it(`A PROPOSNOUS`,()=>{
        expect(component).toBeTruthy();
        });

        it(`NOSREALISATIONS`,()=>{
          expect(component).toBeTruthy();
          })
        it(`NOSCONTACTS`,()=>{
          expect(component).toBeTruthy();
          })

});
