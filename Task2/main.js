const myJSON = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const parser = JSON.parse(myJSON);
studentsList = parser.list;
let myList = []
for (var i = 0 ; i < studentsList.length; i++) {
  
const jsonStudent = studentsList[i];

  myList.push(
    {
      name: jsonStudent.name,
      age: Number(jsonStudent.age),
      prof: jsonStudent.prof,
    }
  )
}

  let res = {
    list: myList
  }
  console.log(res)