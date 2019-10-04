async function getData(url) {
    let data = await fetch (url);
    let json = await data.json();
    return json;
}
async function main(){
    let data = await getData("http://dummy.restapiexample.com/api/v1/employees");
    let tbody = "";
    data.forEach(value => {
        tbody += `<tr>
            <td>${value.id}</td>
            <td>${value.employee_name}</td>
            <td>${value.employee_salary}</td>
            <td>${value.employee_age}</td>
        </tr>`
    })
    document.getElementById("employee").tBodies[0].innerHTML = tbody;
}
main();
