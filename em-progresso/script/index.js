document.addEventListener("DOMContentLoaded", () => {
  // const logo = document.getElementById('logo');
  // const main = document.getElementById('containerLogo');

  // // Coordenadas do centro da logo
  // const MedidasLogo = logo.getBoundingClientRect();
  // const centroX = MedidasLogo.left + MedidasLogo.width / 2;
  // const centroY = MedidasLogo.top + MedidasLogo.height / 2;

  // main.addEventListener('mousemove', (e) => {
  //     logo.classList.add('active-mouse');

  //     // Distância do cursor ao centro
  //     const distanciaX = e.clientX - centroX;
  //     const distanciaY = e.clientY - centroY;

  //     // Calcula a direção oposta
  //     const distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  //     const maxDistancia = 300;

  //     if (distancia < maxDistancia) {
  //         const moveFactor = (maxDistancia - distancia) / maxDistancia;
  //         const intensidade = 0.15;
  //         const moveX = -distanciaX * moveFactor * intensidade;
  //         const moveY = -distanciaY * moveFactor * intensidade;

  //         logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
  //     } else {
  //         logo.style.transform = 'translate(0, 0)';
  //     }
  // });

  // main.addEventListener('mouseleave', () => {
  //     logo.style.transform = 'translate(0, 0)';
  // });
  
  const setaBaixo = document.getElementById("setaBaixo");
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setaBaixo.classList.remove("animacaoSetaParaBaixo");
    } else if (window.scrollY === 0) {
      setaBaixo.classList.add("animacaoSetaParaBaixo");
    }
  });
  setaBaixo.addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });

  const logoFiredroid = document.getElementById("logoFiredroid");
  logoFiredroid.classList.remove("zoomInLogo");
  logoFiredroid.addEventListener("click", (e) => {
    logoFiredroid.classList.add("zoomInLogo");
    setTimeout(() => {
        window.location.href = "./pages/home.html";
      }, 600);
    // const larguraTotal = logoFiredroid.offsetWidth;
    // const alturaTotal = logoFiredroid.offsetHeight;

    // const xClique = e.offsetX;
    // const yClique = e.offsetY;

    // const porcentagemX = (xClique / larguraTotal) * 100;
    // const porcentagemY = (yClique / alturaTotal) * 100;

    // if (
    //   porcentagemX >= 59 &&
    //   porcentagemX <= 69 &&
    //   porcentagemY >= 56 &&
    //   porcentagemY <= 66
    // ) {
      
      
    // }
  });
});
