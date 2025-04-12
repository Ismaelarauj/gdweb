fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const livros = xmlDoc.getElementsByTagName('livro');
    const divIds = document.getElementById('ids');

    for (let i = 0; i < livros.length; i++) {
      const idNode = livros[i].getAttributeNode('id');
      const p = document.createElement('p');
      p.textContent = idNode.nodeValue;
      divIds.appendChild(p);
    }
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
