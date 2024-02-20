function reSelect(seat, price, total){
   const tbody = document.getElementById('tbody');
   const trow = seat + 'trow'
   if(document.getElementById(trow)){
    document.getElementById(trow).remove();
   }
   if(document.getElementById('trow')){
    document.getElementById('trow').remove();
   }
   console.log(trow);
   const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    const discount = document.getElementById('discountPrice');
    discount.innerText = 0;
    const inputText = document.getElementById('inputed');
    inputText.value="";
    showBtn('apply-btn');
    showBtn('inputed');
    hiddenBtn('discount');
    
}


function test(array, index){
    // console.log(array, index)
    array.splice(index, 1);
    
}




function tst(seat){
    console.log(seat);
}