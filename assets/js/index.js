

const container = document.getElementById("id_container");


function menuDraw(){

    const container_menu = document.createElement("div");
    container_menu.setAttribute("class","container_menu");
    container.appendChild(container_menu);

        const draw = document.createElement("div");
        draw.setAttribute("class","draw");

        container_menu.appendChild(draw);

}

menuDraw();