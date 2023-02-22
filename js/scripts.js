
// premierement on cree un nouvel objet xmlhttp request
let http=new XMLHttpRequest();

// la variable http abbrite toute les methodes et proprietes de l'objet
    
// preparaons la requete avec la methode open()
http.open('get','data/products.json',true);

// the first arguments set the http method
// in the second argument we pass the file where datas lives.
//and last the keywords true,set the request to be async

//envoi de la requete
http.send();

//mtn on essai de recupere la reponse
http.onload = function(){
    // inside the function we needs to check the readystate and statuts properties.
    if(this.readyState == 4 && this.status == 200){
        //if we have a successful response, i have to parse the json data
        //and convert to a javascript array
        let products=JSON.parse(this.responseText);

        //next i need empty variable to add the incoming data
        let output="";

        //now i have to loop trough the products,and in every iteration
        //i add on html template to the output variable.
        for(let item of products){
            output += `<div class="product">
                <img src="${item.image}" alt="${item.image}">
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
                <p class="price">
                <span>${item.price}</span>
                
                </p>
                <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
                </div> 
            `;
        }
        // enfin j'ajoute les produits au niveau du container pour visualisez
        document.querySelector(".products").innerHTML = output;
    }
}