import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisosAdminPage } from './avisos-admin.page';

describe('AvisosAdminPage', () => {
  let component: AvisosAdminPage;
  let fixture: ComponentFixture<AvisosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
