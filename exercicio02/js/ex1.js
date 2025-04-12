fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const titulos = xmlDoc.getElementsByTagName('titulo');
    const divTitulos = document.getElementById('titulos');

    for (let i = 0; i < titulos.length; i++) {
      const p = document.createElement('p');
      p.textContent = titulos[i].textContent;
      divTitulos.appendChild(p);
    }
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
