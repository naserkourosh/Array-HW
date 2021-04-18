let users = [
    {id: 1, name:"John"},
    {id: 2, name:"Pete"},
    {id: 3, name:"Mary"}
]

////remove Pete from array
let newUsers = users.filter(item => item.name !== "Pete")
console.log(newUsers);

//
let findIndxUser = users.findIndex(item => item.name == "Mary")
console.log(findIndxUser);

///////////////////Remove same values from array
let names = ['a','b','c','d','a','b','c','d']

function removeIterate(arr){
    return [...new Set(arr)]
}

removeIterate(names)
///////////////////////////////// Create Object from Map
 const obj = new Map()

 obj.set('id',1).set('role','admin').set('name','naser').set('name','naser')

 const newObj = Array.from(obj)
 newObj.push({'career': 'developer'})

 console.log(newObj);