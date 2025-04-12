fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const livro = xmlDoc.getElementsByTagName('livro')[0];
    const titulo = livro.firstChild.nodeType === 3 ? livro.firstChild.nextSibling : livro.firstChild;
    const autor = titulo.nextSibling.nodeType === 3 ? titulo.nextSibling.nextSibling : titulo.nextSibling;
    const autorNome = autor.firstChild.nodeValue;
    document.getElementById('primeiro_autor').textContent = autorNome;
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
