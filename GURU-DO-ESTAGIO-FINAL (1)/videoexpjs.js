onload = () => {
var countId = 0;
if (localStorage.getItem("countId") != null) {
countId = localStorage.getItem("countId");
}
for (let index = 0; index < countId; index++) {
echoComentario(index);
}
};
function echoComentario(last_coment) {
var coment = JSON.parse(localStorage.getItem("comentario" + last_coment));
$("#listaasaaasasasa").append(
`<span class='sub'><br><br><button style='background-color: #ff8700; border: none;' class='btn btn-primary btn-sm'>Relato de ${coment.usuario}</button>
${coment.comentario}</span>`
);
}
var salvaComentario = function (comentario) {
comentario.preventDefault();
var countId = 0;
if (localStorage.getItem("countId") != null) {
countId = localStorage.getItem("countId");
} else {
countId = 0;
}
var p_coment = document.getElementById("inpt_comentario").value;
var p_usuario = document.getElementById("inpt_nome").value;
var p_data = document.getElementById("id_01").value;
var coment = { comentario: p_coment, usuario: p_usuario, data: p_data };
var JSONcoment = JSON.stringify(coment);
localStorage.setItem("comentario" + countId, JSONcoment);
echoComentario(countId);
countId++;
localStorage.setItem("countId", countId);
Swal.fire({
title: "Comentário enviado!",
icon: "success",
showConfirmButton: false,
timer: 1500,
});
console.log('Comentário enviado');
};
document.getElementById("enviar").addEventListener("click", salvaComentario);


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();