fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const livros = xmlDoc.getElementsByTagName('livro');
    const ultimoLivro = livros[livros.length - 1];
    const ano = ultimoLivro.lastChild.nodeType === 3 ? ultimoLivro.lastChild.previousSibling : ultimoLivro.lastChild;
    const anoValor = ano.firstChild.nodeValue;
    document.getElementById('ultimo_ano').textContent = anoValor;
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
