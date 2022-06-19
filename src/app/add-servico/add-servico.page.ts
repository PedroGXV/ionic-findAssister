import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.page.html',
  styleUrls: ['./add-servico.page.scss'],
})
export class AddServicoPage implements OnInit {

  nome: string;
  valor: string;
  prestador: string;
  servicos = AppComponent.servicos;

  constructor() { }

  ngOnInit() {
  }

  adicionarFilme() {
    var biggerId = 0;
    this.servicos.forEach(element => {
      if (element.id > biggerId) biggerId = element.id;
    });

    this.servicos.push({
      id: biggerId + 1,
      servico: this.nome,
      valor: this.valor,
      prestador: this.prestador,
    });

    this.nome = '';
    this.valor = '';
    this.prestador = '';
  }

  removerFilme(id) {
    this.servicos.splice(this._servicos_index(id), 1)
  }

  _servicos_index(id) {
    return this.servicos.map(x => {
      return x.id;
    }).indexOf(id);
  }
}
