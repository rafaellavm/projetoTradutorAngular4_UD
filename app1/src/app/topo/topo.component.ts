import { Component } from '@angular/core';


@Component({
    selector: 'app-topo', //seletor baseado em classe
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    //template: `<p>
                //Esse é o componente topo
                  //</p>`

})

export class TopoComponent {

  public titulo: string = 'Aprender inglês';
}