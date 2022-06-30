let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; 

function sortArray(array) {
    array.sort(function(a, b){return a-b});
    return array;
}

function arrayOrganizer(array) {
    array = sortArray(array);
    let narray = []; 
    for(let i = 0; i < array.length; i++) 
    {
        if(array[i] === array[i+1]) continue;
        else 
        {
            let c = array.filter(n => n === array[i]);
            if(c.length > 1) 
            {
                narray = narray.concat([c]);
            }
            else if (c.length == 1)
            {
                narray = narray.concat(array[i]);
            }                             
        }
    }
    return narray;    
}

  
array = arrayOrganizer(array);
