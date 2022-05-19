$(document).ready(function () {
	(function () {
		var tek = document.getElementById('recipe__place').getElementsByClassName('recipe').length;
		$.post("php/loadMore.php", ({ kol: 8, tek: 0 }), successLoad);;
	}());


	$("#button__more").click(load);

	function load() {
		var tek = document.getElementById('recipe__place').getElementsByClassName('recipe').length;
		$.post("php/loadMore.php", ({ kol: 4, tek: tek }), successLoad);
	}
});


function successLoad(data) {
	data = JSON.parse(data);
	for (var i in data) {
		let recipe =
			`<div class="recipe">
		<div class="recipe__items">
		<div class="recipe__img">
		<a href="learnMore.php?id=${data[i].id_recipe}">
		<img src="${data[i].recipe_img}">
		</a>
		</div>

		<div class="recipe__name">
		<a href="learnMore.php?id=${data[i].id_recipe}">
		${data[i].name_recipe}
		</a>
		</div>

		<div class="recipe__price">
		${data[i].recipe_price}
		</div>
		</div>
		</div>`;
		document.getElementById("recipe__place").insertAdjacentHTML('beforeend', recipe);
	}
}

