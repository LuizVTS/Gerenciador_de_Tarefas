import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // Mantém o componente independente
  imports: [CommonModule, FormsModule], // Importa os módulos necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo: string = 'Gerenciador de Tarefas';
  novaTarefa: string = '';
  tarefas: { nome: string; concluida: boolean }[] = [];
  exibirLista: boolean = true;
  title: any;

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  alternarConclusao(tarefa: { nome: string; concluida: boolean }) {
    tarefa.concluida = !tarefa.concluida;
  }

  toggleLista() {
    this.exibirLista = !this.exibirLista;
  }
}







/*port { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Gerenciador de Tarefas';
  novaTarefa: string = '';
  tarefas: { nome: string; concluida: boolean }[] = [];
  exibirLista: boolean = true;
  title: any;

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  alternarConclusao(tarefa: { nome: string; concluida: boolean }) {
    tarefa.concluida = !tarefa.concluida;
  }

  toggleLista() {
    this.exibirLista = !this.exibirLista;
  }
}

*/











/*port { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Gerenciador de Tarefas';
  novaTarefa: string = '';
  tarefas: { nome: string; concluida: boolean }[] = [];
  exibirLista: boolean = true;
  title: any;

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }

  alternarConclusao(tarefa: { nome: string; concluida: boolean }) {
    tarefa.concluida = !tarefa.concluida;
  }

  toggleLista() {
    this.exibirLista = !this.exibirLista;
  }
}
*/


