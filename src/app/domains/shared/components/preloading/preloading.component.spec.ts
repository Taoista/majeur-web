import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadingComponent } from './preloading.component';

describe('PreloadingComponent', () => {
  let component: PreloadingComponent;
  let fixture: ComponentFixture<PreloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreloadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
