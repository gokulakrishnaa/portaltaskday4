const getFlags = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET"," https://restcountries.com/v3/all");
    xhr.responseType = "json";
    xhr.onload = () => {
        console.log(xhr.response);
        const flag = xhr.response;
        //JavaScript Task Day 4 (Q.3)
        for(var country of flag) {
            console.log(country.name.common);
            console.log(country.region);
            console.log(country.subregion);
            console.log("*********************************");
            const image = document.createElement('img');
            image.src = country.flags;
            document.body.append(image);
        }
         //JavaScript Task Day 4 (Q.2)
        for(var flagimg of flag) {
            const image = document.createElement('img');
            image.src = flagimg.flags;
            document.body.append(image);
        }
    };
    xhr.send();
}
getFlags();

//JavaScript Task Day 4 (Q.1)

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));

