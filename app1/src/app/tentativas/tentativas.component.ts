import { Component, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), //como no construtor os outros parãmetros são default não precisa passar
    new Coracao(true),
    new Coracao(false)
  ];

  constructor() { 
    console.log(this.coracoes);
    
  }

  ngOnInit() { // método do ciclo de vida do componente
    console.log('tentativas recebidas do painel = ', this.tentativas);
  }

}
