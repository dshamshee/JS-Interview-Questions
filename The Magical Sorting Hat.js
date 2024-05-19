const studentsName = ["Aman", "Martin", "Rebecca", "Jonathan", "Elizabeth", "Charlotte", "Alexandra", "Christina", "Christopher", "Maximillian",
    "Constantine", "Alessandra", "Benedictine", "Christophorus", "Maximiliano", "Alexandrina"]

let House = []
for (const Names of studentsName) {
    if (Names.length < 6) House.push("Gryffindor")

    else if (Names.length < 8) House.push("Hufflepuff")

    else if (Names.length < 12) House.push("Ravenclaw")

    else House.push("Slytherin")
}
// console.log(House)

for(let i = 0; i<studentsName.length; i++){
    console.log(`${studentsName[i]}: ${House[i]}`)
}

