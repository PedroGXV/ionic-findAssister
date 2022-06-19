import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-presta-servico',
  templateUrl: './presta-servico.page.html',
  styleUrls: ['./presta-servico.page.scss'],
})
export class PrestaServicoPage implements OnInit {

  servicos = AppComponent.servicos;

  constructor() { }

  ngOnInit() {
  }

  removerServico(id) {
    this.servicos.splice(this._servicos_index(id), 1)
  }

  _servicos_index(id) {
    return this.servicos.map(x => {
      return x.id;
    }).indexOf(id);
  }
}
