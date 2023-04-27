//exportando a Class
export class lertable {
    constructor(tabela) {
      this._tabela = tabela;
    }
    tamanhoArray() {
      let array = [];
      let numrows = this._tabela.rows.length;
      let numcols = this._tabela.rows[0].cells.length;
  
      for (let i = 1; i < numrows; i++) {
        let row = this._tabela.rows[i];
        let RowData = {};
        //percorrer cada celula
        for (let j = 0; j < numcols; j++) {
          let cell = row.cells[j];
          let columnName = this._tabela.rows[0].cells[j].textContent.toLowerCase();
          RowData[columnName] = cell.innerText;
        }
        array.push(RowData);
      }
  
      return array;
    }
    //deve ser passado a tabela e o numero da coluna,a mesma devera conter somente dados do tipo number
    sumarray(col) {
      let sum = 0;
      let numrows = this._tabela.rows.length;
      for (let i = 1; i < numrows; i++) {
        sum += parseFloat(
          this._tabela.rows[i].cells[col].textContent.replace(",", ".")
        );
      }
      return sum;
    }
  }