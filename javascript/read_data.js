let players = [
        {
            club:'Real Madrid', 
            nom:"Kylian", 
            prenom:"Mbappe", 
            age:25, 
            position:"ST",
        },
        {
            club:'Barcelona',
            nom:"Lewandowski",
            prenom:"Robert",
            age:35,
            position:"ST",
        },
        {
            club:'Arsenal',
            nom:"Saka",
            prenom:"Bukayo",
            age:20,
            position:"M",
        },
        {
            club:'Paris Saint-Germain',
            nom:"Neymar",
            prenom:"Jr",
            age:30,
            position:"F",
        },
        {
            club:'Liverpool',
            nom:"Salah",
            prenom:"Mohamed",
            age:29,
            position:"F",
        },
        {
            club:'Manchester City',
            nom:"De Bruyne",
            prenom:"Kevin",
            age:30,
            position:"M",
        },
        {
            club:'Juventus',
            nom:"Ronaldo",
            prenom:"Cristiano",
            age:36,
            position:"F",
        },
        {
            club:'Bayern Munich',
            nom:"Kimmich",
            prenom:"Joshua",
            age:26,
            position:"M",
        }
    ];
    
    // peupler le tableau avec les données de l'objet players
    let tbody = document.querySelector('#myTable tbody');
    players.forEach(player => {
        let row = document.createElement('tr');
        ['club', 'nom', 'prenom', 'age', 'position'].forEach(key => {
            let cell = document.createElement('td');
            cell.textContent = player[key];
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    
    // ajouter un bouton pour télécharger les données du tableau en format Excel
    document.querySelector('button').addEventListener('click', function() {
        let excelSheet = XLSX.utils.table_to_book(document.querySelector('#myTable'));
        XLSX.writeFile(excelSheet, 'Players.xlsx');
    });