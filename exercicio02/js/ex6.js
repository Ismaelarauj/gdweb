fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const segundoLivro = xmlDoc.getElementsByTagName('livro')[1];
    const autor = segundoLivro.getElementsByTagName('autor')[0];
    const livroPai = autor.parentNode;
    const titulo = livroPai.firstChild.nodeType === 3 ? livroPai.firstChild.nextSibling : livroPai.firstChild;
    document.getElementById('navegacao').textContent = titulo.textContent;
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
