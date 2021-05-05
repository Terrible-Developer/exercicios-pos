function dragStart(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("id", e.target.getAttribute("id"));
  e.dataTransfer.setDragImage(e.tar);
  changeCounter();
  return true;
}
function dragEnter(e) {
  e.preventDefault();
  return true;
}
function dragOver(e) {
  return false;
}
function dragDrop(e) {
  e.preventDefault();
  var src = e.dataTransfer.getData("id");
  e.target.appendChild(document.getElementById(src));
  changeCounter();
  return false;
}
function changeCounter(){
  var quantity = 0;
  var total = 0;
  var cart = document.getElementById('cart');
  var prods = cart.getElementsByTagName('article');
  for(var i = 0; i < prods.length; i++){
    let prodInfo = prods[i].getElementsByTagName('input');
    let prodQuantity = parseInt(prodInfo[0].value);
    let prodPrice = parseFloat(prodInfo[1].value);
    let subTotal = prodQuantity * prodPrice;
    quantity = quantity + parseInt(prodQuantity);
    total = total + parseFloat(subTotal);
  }
  document.getElementById('itemsQuantity').innerHTML = quantity;
  document.getElementById('fullPrice').innerHTML = total;
}
