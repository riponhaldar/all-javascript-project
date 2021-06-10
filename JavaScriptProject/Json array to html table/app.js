var tdata = [
  {
    name: 'Mack parker',
    age: 23,
    work: 'frontend developer',
  },
  {
    name: 'ripon',
    age: 22,
    work: 'full stack developer',
  },
  {
    name: 'akki',
    age: 23,
    work: 'frontend developer',
  },
]
var table = document.getElementById('table')
tableData = (data) => {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
    var trow = ` <tr>
       <td>${data[i].name}</td>
        <td>${data[i].age}</td>
         <td>${data[i].work}</td>
    </tr>`
    table.innerHTML += trow
  }
}

tableData(tdata)
