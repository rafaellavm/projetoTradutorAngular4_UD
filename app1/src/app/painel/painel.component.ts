import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

  //cria um atributo público, associa a esse atributo uma instância do eventmitter, 
  //e ao término de tudo isso, 'decore' esse atributo de tal forma que ele possa ser exposto a componentes pais (painel => app)
  //no painel: <app-painel (encerrarJogo)="encerrarJogo($event)"></app-painel> => (encerrarJogo) = método do app // encerrarJogo($event) => atributo do painel
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter(); 

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //trocar pergunta da rodada
      this.rodada++;

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //console.log('progresso = ', this.progresso);

      if (this.rodada === 4) {
        //alert('Concluído');
        this.encerrarJogo.emit('vitoria'); //passa um parâmetro pro método 'encerrarjogo' no app.component. Passa do filho pro pai
      }

      //atualiza o objeto rodadaFrase 
      this.atualizaRodada()

    } else {
      //diminuir a variável tentativas
      this.tentativas--;

      if (this.tentativas === -1) {
        //alert('Você perdeu todas as tentativas');
        this.encerrarJogo.emit('derrota'); //passa um parâmetro pro método 'encerrarjogo' no app.component. Passa do filho pro pai
      }
    }
  }

  public atualizaRodada(): void {

    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar a resposta
    this.resposta = '';
  }

}
