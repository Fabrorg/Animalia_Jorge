import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAvisosDomesticosPage } from './lista-avisos-domesticos.page';

describe('ListaAvisosDomesticosPage', () => {
  let component: ListaAvisosDomesticosPage;
  let fixture: ComponentFixture<ListaAvisosDomesticosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAvisosDomesticosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
