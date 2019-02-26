function makeTable(){
    let data=[  ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996'],
                ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996'],
                ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996'],
                ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996'],
                ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996'],
                ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996'],
                ['6157','Charu','Chaudhary','9877456895','96charuchaudhary@gmail.com','Software Developer Trainee','01-11-1996']
            ];

    let header=["Employee ID","First Name","Last Name","Phone No.","Email Address","Designation","DOB"];

    let table=document.createElement("table");
    table.border=25;
    let rowHeader=document.createElement("tr")
    for(let i=0;i<header.length;i++){
        
        let head1=document.createElement("th");
        head1.innerHTML=header[i];
        rowHeader.appendChild(head1);
     }

    table.appendChild(rowHeader);
    document.body.appendChild(table);

     
    for (let i = 0; i < 7; i++) {
        
        let rowData = document.createElement("tr");
    
        for (let j = 0; j < 7; j++) {
            
            let cell = document.createElement("td");
            let cellText = document.createTextNode(data[i][j]);

            cell.appendChild(cellText);
            rowData.appendChild(cell);
        }
    
        
        table.appendChild(rowData);
      }
}   