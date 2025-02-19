import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
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







