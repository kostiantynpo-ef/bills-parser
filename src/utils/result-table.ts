const resulteTable: HTMLElement = document.getElementById('content-table');

export const createResultTabe = (data: string[][]) => {
  for (const position of data) {
    const tr = document.createElement('tr');

    for (const item of position) {
      const td = document.createElement('td');

      tr.appendChild(td);
      td.innerText = item;
    }

    resulteTable.appendChild(tr);
  }
}