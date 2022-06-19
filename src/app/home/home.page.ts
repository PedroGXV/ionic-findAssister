import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  openServico() {
    this.router.navigate(['/presta-servico'])
  }

  openBusca() {
    this.router.navigate(['/busca-servico'])
  }

}
