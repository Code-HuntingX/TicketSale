function reSelect(seat, price, total, totalSeat) {
    const tbody = document.getElementById('tbody');
    const trow = seat + 'trow'
    if (document.getElementById(trow)) {
        document.getElementById(trow).remove();
    }
    if (document.getElementById('trow')) {
        document.getElementById('trow').remove();
    }



    console.log(trow);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    const discount = document.getElementById('discountPrice');
    discount.innerText = 0;
    const inputText = document.getElementById('inputed');
    inputText.value = "";
    showBtn('inputed');
    hiddenBtn('discount');
    showBtn('apply-btn')

    if( totalSeat >= 2){
        enableBtn('apply-btn')

    }else{ disableBtn('apply-btn')}

}





function test(array, index) {
    // console.log(array, index)
    array.splice(index, 1);

}




function tst(seat) {
    console.log(seat);
}

function hello(seat) {
    const enableBtn = document.getElementById('apply-btn');
    if (seat >= 2) {
        enableBtn.classList.remove('hidden');
    }
}