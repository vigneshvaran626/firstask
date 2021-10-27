let employees=[
    {
        id:1,
        first_name:"Elamaran",
        last_name:"sugumaran",
        email:"elamaran@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.36"
    },
     {
        id:2,
        first_name:"Elangumaran",
        last_name:"raguvaran",
        email:"elangumaran@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.38"
    },
     {
        id:3,
        first_name:"Drowser",
        last_name:"sugumaran",
        email:"Drowser@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.39"
    }, {
        id:4,
        first_name:"Asvintha",
        last_name:"sugumaran",
        email:"Asvintha@gmail.com"
        gender:"Female";
        ip_adress:"150.242.242.36"
    }, {
        id:5,
        first_name:"Raju",
        last_name:"sugumaran",
        email:"Raju@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.40"
    }, {
        id:6,
        first_name:"Bajji",
        last_name:"sugumaran",
        email:"Bajji@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.42"
    }, {
        id:7,
        first_name:"Surya",
        last_name:"sugumaran",
        email:"surya@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.43"
    }, {
        id:8,
        first_name:"Santhiya",
        last_name:"sugumaran",
        email:"Santhiya@gmail.com"
        gender:"Female";
        ip_adress:"150.242.242.44"
    }, {
        id:9,
        first_name:"Iniya",
        last_name:"sugumaran",
        email:"Iniya@gmail.com"
        gender:"Male";
        ip_adress:"150.242.242.46"
    }   
];
let allEmpButton=document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click",function(){
    displayEmployees(employees);
});
let displayEmployees=(employees)=>{
    let tableBody=document.querySelector("#table-body")
    let tableRow= "";
    for(let employee of employees){
        tableRow +=<tr>
            <td>${emloyee.id}</td>
            <td>${emloyee.first_name}</td>
            <td>${emloyee.last_name}</td>      
            <td>${emloyee.email}</td>
            <td>${emloyee.gender}</td>
            <td>${emloyee.ip_adress}</td>
        </tr>\n;
        tablebody.innerHTML=tableRow;

    }
};