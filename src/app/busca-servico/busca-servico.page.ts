import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-busca-servico',
  templateUrl: './busca-servico.page.html',
  styleUrls: ['./busca-servico.page.scss'],
})
export class BuscaServicoPage implements OnInit {

  servicos = AppComponent.servicos;

  constructor() { }

  ngOnInit() {
  }

}
