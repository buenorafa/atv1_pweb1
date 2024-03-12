class DisciplinaControlador {
  constructor(controladorAluno) {
    // const alunoService = controladorAluno.servico;
    this.servico = new DisciplinaService();
  }
  inserir() {
    const codigoElemento = document.querySelector("#codigo");
    const nomeDisciplinaElemento = document.querySelector("#nome_disciplina");

    const disciplinaInserida = this.servico.inserir(
      codigoElemento.value,
      nomeDisciplinaElemento.value
    );
    const listaDisciplinasElemento =
      document.querySelector("#lista_disciplinas");
    if (disciplinaInserida) {
      this.inserirDisciplinaNoHtml(
        disciplinaInserida,
        listaDisciplinasElemento
      );
    }
  }

  inserirDisciplinaNoHtml(disciplina, elementoDestino) {
    const disciplinaElemento = document.createElement("li");
    disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
    elementoDestino.appendChild(disciplinaElemento);
  }
}
