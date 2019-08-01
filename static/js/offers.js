if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

function toggleCollapsedState(event) {
  event.preventDefault();
  event.target.closest(".sponsor-offer").classList.toggle("collapsed");
}

document.querySelectorAll(".sponsor-offer").forEach(function(offer) {
  offer.classList.add("collapsed");
});

document.querySelectorAll(".offer-summary").forEach(function(node) {
  node.addEventListener("click", toggleCollapsedState);
});
document.querySelectorAll(".collapsible-action").forEach(function(node) {
  node.addEventListener("click", toggleCollapsedState);
});
