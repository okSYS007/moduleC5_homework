const myXML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(myXML, "text/xml");
const xmlStudent = xmlDOM.querySelectorAll('student');
let myList = []

for (var i = 0 ; i < xmlStudent.length; i++) {
  
  const xmlName = xmlStudent[i].querySelector('name');
  const xmlLang = xmlName.getAttribute('lang')
  const xmlFirstName = xmlName.querySelector('first').textContent
  const xmlSecondName = xmlName.querySelector('second').textContent

  const xmlAge = xmlStudent[i].querySelector('age').textContent

  const xmlProf = xmlStudent[i].querySelector('prof').textContent

  myList.push(
    {
      name: xmlFirstName + ' ' + xmlSecondName,
      age: Number(xmlAge),
      prof: xmlProf,
      lang: xmlLang
  }
  )

}

  let res = {
    list: myList
  }
  console.log(res)