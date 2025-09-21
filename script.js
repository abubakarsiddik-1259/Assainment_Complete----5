








function getElement (id) {
    const element = document.getElementById(id)
    return element;
}

const hurthBtn = document.getElementsByClassName("heartIcon")
console.log( hurthBtn );


for ( let hurtButton of hurthBtn ) {
   hurtButton.addEventListener("click", function (){

  


    const quntity = getElement("hear-number").innerText;

    console.log(quntity);

    const currenQuantity = Number (quntity) + 1;

    getElement("hear-number").innerText = currenQuantity

    })}














const copyBtn = document.getElementsByClassName("copyBtn")
console.log(copyBtn );


for ( let copyButton of copyBtn ) {
   copyButton.addEventListener("click", function (){

   
    const quntity = getElement("copyNumber").innerText;

    console.log(quntity);

    const currenQuantity = Number (quntity) + 1;

    getElement("copyNumber").innerText = currenQuantity


        let text = copyButton.parentNode.parentNode.childNodes[5].innerText
        console.log(text);
        
      navigator.clipboard.writeText(text);
      alert("নম্বর কপি হয়েছে: " + text);

    })}









const callBtn = document.getElementsByClassName("call-btns")
console.log(callBtn);

for ( let callButton of callBtn) {
    callButton.addEventListener("click", function (){


        const Cnumbet = getElement("coint-number").innerText
        const b = 0;


        if ( Cnumbet >= 20 ) {

            

        const title = callButton.parentNode.parentNode.children[0].innerText
        console.log(title);
        
        const number = callButton.parentNode.parentNode.children[2].innerText
        console.log(number);

            alert (`📞 Calling ${title} ${number}...`)

        const time = new Date().toLocaleTimeString()


        const cartContainer = getElement("cart-box")
        console.log(cartContainer);

        const newCart = document.createElement("div");
        newCart.innerHTML = `
      
        <div class="bg-gray-100 p-3 rounded-lg mb-3 flex justify-between items-center">
         <div class =" flex-1"> 
         <h2  class="font-semibold text-[15px] " >${title}</h2> 
        <h3 class="text-gray-700 text-[15px] ">${number}</h3>
</div>
        <div> <span class ="text-xs flex-1">${time}</span>
        </div>
        </div>

        

      
        `
        cartContainer.append(newCart);




const quntity = getElement("coint-number").innerText;

console.log(quntity);

const currenQuantity = Number (quntity) - 20;

getElement("coint-number").innerText = currenQuantity







document.getElementById("btn-clear").addEventListener("click", function(){
        const cartContainer = getElement("cart-box");
        const cointNumber = getElement ("coint-number");

        cartContainer.innerText = "";
        cointNumber.innerText = "100";

    })

        }



        else {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে")
        }


    });
};














