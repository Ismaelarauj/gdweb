fetch('livros.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');
    const livro = xmlDoc.getElementsByTagName('livro')[0];
    const id = livro.getAttribute('id');
    const titulo = livro.getElementsByTagName('titulo')[0].textContent;
    const autor = livro.getElementsByTagName('autor')[0].textContent;
    const ano = livro.getElementsByTagName('ano')[0].textContent;
    const divLivro = document.getElementById('livro_especifico');

    divLivro.innerHTML = `ID: ${id}, Título: ${titulo}, Autor: ${autor}, Ano: ${ano}`;
  })
  .catch(error => console.error('Erro ao carregar XML:', error));
