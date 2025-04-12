fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const livros = xmlDoc.getElementsByTagName('livro');
    const divAutoresAnos = document.getElementById('autores_anos');

    for (let i = 0; i < livros.length; i++) {
      const autor = livros[i].getElementsByTagName('autor')[0].textContent;
      const ano = livros[i].getElementsByTagName('ano')[0].textContent;
      const p = document.createElement('p');
      p.textContent = `Autor: ${autor}, Ano: ${ano}`;
      divAutoresAnos.appendChild(p);
    }
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
