// Elementos HTML
const cartaCerrada = document.getElementById('cartaCerrada');
const cartaAbierta = document.getElementById('cartaAbierta');
const textoCarta = document.getElementById('textoCarta');
const musica = document.getElementById('musica');

// Texto dividido por partes (párrafos)
const mensajes = [
  `Mi amor 😘💌

    Aunque nos separan kilómetros 🌍 y el tiempo a veces parece jugar en nuestra contra ⏳, quiero que sepas que no hay distancia suficiente para disminuir lo que siento por ti ❤️. Al contrario, cada día que pasa lejos de ti, mi corazón se fortalece 💪💕 y mi amor crece más profundo, más verdadero 🥰, porque amarte a la distancia me ha enseñado el valor real de lo que significa estar unidos de alma 💫, aunque el cuerpo no pueda estar siempre cerca.

    Sé que han pasado ya tres días desde nuestro aniversario 🎉📅... y sí, lo sé, llego tarde 🕒. Pero no quería dejar pasar más tiempo sin decirte desde lo más profundo de mi alma: **Feliz aniversario, mi amor** 🎊💖. Sé que el mensaje no llegó a tiempo 🐌, pero mis sentimientos no tienen fecha de caducidad 💘. Hoy, igual que el primer día 🌹, y quizás incluso más, sigo celebrando tu existencia 🥳 y la suerte inmensa que tengo de tenerte en mi vida 💑✨.

    Las noches son más largas sin poder abrazarte 🌙🤗, y los días se sienten incompletos sin tu sonrisa al alcance ☀️😊, pero en cada amanecer 🌅 recuerdo que te tengo en mi mente y en mi corazón 💭❤️, y eso me da fuerzas para seguir adelante 🚀. Eres la razón por la que sonrío sin razón 😄, la esperanza que me impulsa a soñar 💤 con el momento en que al fin podamos estar juntos sin barreras ni fronteras 🛫🌈.

    A veces cierro los ojos 😌 y te imagino a mi lado 🤍, siento tu voz susurrando palabras de cariño que me llenan de paz 🕊️, y es ahí cuando entiendo que el amor verdadero 💗 no entiende de distancias ni de horarios 🕰️, ni siquiera de fechas 📆. Te amo con una intensidad que rompe los límites del espacio y del tiempo 🌌, y sé que cada sacrificio vale la pena porque tú eres mi destino, mi refugio y mi mayor alegría 🏡💖✨.

    Gracias por tu amor 💞, por tu paciencia 🧘‍♀️, por seguir ahí incluso cuando yo fallo en los pequeños detalles 💔➡️💪. Prometo seguir mejorando 🙏, aprendiendo de ti, de nosotros 🫶. Porque tú me enseñas cada día lo que es el amor verdadero: constante, firme y lleno de ternura 🐻🌹.

    **Feliz aniversario atrasado, mi vida** 🎂🎈. No importa si han pasado horas o días, lo importante es que **mi amor por ti sigue aquí, intacto, firme y eterno** 💝💫.

    Con todo mi corazón,  
    **Sami** 💌💕`
];

// Función para animar letra por letra cada parte
function mostrarPaginasTexto(paginas, elemento, velocidad, callbackFinal) {
  let paginaActual = 0;

  function mostrarPagina() {
    elemento.textContent = '';
    elemento.style.opacity = 1;
    let i = 0;
    const texto = paginas[paginaActual];
    const intervalo = setInterval(() => {
      elemento.textContent += texto[i];
      i++;
      if (i >= texto.length) {
        clearInterval(intervalo);
        setTimeout(() => {
          elemento.style.opacity = 0;
          setTimeout(() => {
            paginaActual++;
            if (paginaActual < paginas.length) {
              mostrarPagina();
            } else {
              if (callbackFinal) callbackFinal();
            }
          }, 700); // transición entre páginas
        }, 5000); // tiempo de lectura por página
      }
    }, velocidad);
  }

  mostrarPagina();
}

// Función para iniciar el slideshow de fotos
function mostrarSlideshow() {
  const slideshow = document.getElementById('slideshow');
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  // Ocultar carta
  cartaAbierta.style.opacity = 0;
  setTimeout(() => {
    cartaAbierta.classList.add('oculto');
    slideshow.classList.remove('oculto');
  }, 1000);

  // Mostrar las fotos en bucle
  setInterval(() => {
    slides[current].classList.add('oculto');
    current = (current + 1) % slides.length;
    slides[current].classList.remove('oculto');
  }, 7000); // cambia cada 7 segundos
}

// Al hacer clic en la carta cerrada
cartaCerrada.addEventListener('click', () => {
  cartaCerrada.classList.add('oculto');
  cartaAbierta.classList.remove('oculto');
  textoCarta.style.opacity = 1;
  musica.play();
  mostrarPaginasTexto(mensajes, textoCarta, 65, mostrarSlideshow);
});
