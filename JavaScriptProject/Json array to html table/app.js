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
  {
    name: 'Kaushik',
    age: 25,
    work: 'Backend',
  },
  {
    name: 'sudip',
    age: 26,
    work: 'full stack developer',
  },
  {
    name: 'hey its you',
    age: 00,
    work: 'Backend developer',
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
