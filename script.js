// for sixteen gb
//  document.getElementById("sixteenGB").addEventListener("click", function(){
//     const memory_cost = document.getElementById("memory-cost");
//     memory_cost.innerText = 200;

//     const best_price = document.getElementById("best-price").innerText;
//     const memory_price = document.getElementById("memory-cost").innerText;
//     const storage_cost = document.getElementById("storage-cost").innerText;
//     const delivery_charge = document.getElementById("delivery-cost").innerText;
    
//     const total_price = parseFloat(best_price) + parseFloat(memory_price) + parseFloat(storage_cost) + parseFloat(delivery_charge);

//     const total = document.getElementById("total-price");
//     total.innerText = total_price;
//   updatePrice("memory-cost", 300);
//  })

 // 8 gb memory
// document.getElementById("eightGB").addEventListener("click", function(){
//     updatePrice("memory-cost", 100);
// })

 // 1tb
// document.getElementById("ssd3").addEventListener("click",function(){
    
//     updatePrice("storage-cost", 500)
// })

// // 512 gb
// document.getElementById("ssd2").addEventListener("click",function(){
    
//     updatePrice("storage-cost", 400)
// })

// // 256 gb
// document.getElementById("ssd1").addEventListener("click",function(){
    
//     updatePrice("storage-cost", 300)
// })

//  // aug 21 delivery charge
//  document.getElementById("paid-delivery").addEventListener("click", function(){
    
//     updatePrice("delivery-cost", 20)
// });

//  // aug 25 delivery free
//  document.getElementById("free-delivery").addEventListener("click", function(){
    
//     updatePrice("delivery-cost", 000)
// });

// call
function on_click(clickId, updateId, price){
    document.getElementById(clickId).addEventListener("click", function(){
    
        updatePrice(updateId, price)
    });
}
on_click("eightGB","memory-cost",00 );
on_click("sixteenGB","memory-cost",300 );
on_click("ssd3","storage-cost",500 );
on_click("ssd2","storage-cost",200 );
on_click("ssd1","storage-cost",00 );
on_click("paid-delivery","delivery-cost",20 );
on_click("free-delivery","delivery-cost",00 );

// function
function updatePrice(item_id, price){
   
        const memory_cost = document.getElementById(item_id);
        memory_cost.innerText = price;
    
        const best_price = document.getElementById("best-price").innerText;
        const memory_price = document.getElementById("memory-cost").innerText;
        const storage_cost = document.getElementById("storage-cost").innerText;
        const delivery_charge = document.getElementById("delivery-cost").innerText;
        
        const total_price = parseFloat(best_price) + parseFloat(memory_price) + parseFloat(storage_cost) + parseFloat(delivery_charge);
    
        const total = document.getElementById("total-price");
        total.innerText = total_price;  
}

// promo code
const fake_code = 'DIE';

document.getElementById("apply-btn").addEventListener("click",function(){
    
        const code = document.getElementById("promo-input").value;

        if( code === fake_code ){
            const total = document.getElementById("total-price");
           let total_price = parseFloat(total.innerText);

            const discount = (total_price*20)/100;
            total_price = total_price - discount;
            total.innerText = total_price;
        }
        else{
            alert("Wrong Password!!");
        }
})


