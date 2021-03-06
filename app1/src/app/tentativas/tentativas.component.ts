import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), //como no construtor os outros parãmetros são default não precisa passar
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {}

  //é solicitado quando há input dos dados do pai pro filho. Quando os valores recebidos são alterados o método também é executado
  ngOnChanges() {

    if (this.tentativas != this.coracoes.length) {

      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false; //coloca o coração falso na tentativa em questão
    }

    console.log('tentativas recebidas do painel = ', this.tentativas);
  }

  // método do ciclo de vida do componente// É solicitado uma única vez quando o componente é iniciado
  ngOnInit() {}

}
