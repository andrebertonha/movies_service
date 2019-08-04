# Movies Service
### Arquitetura microservice integrado com cinema-catalog-service

### Instruções
  
  + npm install
  + Schema:
  ```
  {
      titulo: { type: String, required: true },
      sinopse: String,
      duracao: { type: Number, required: true, min: [90, 'duracao minima 1h 30min'] },
      dataLancamento: { type: Date },
      imagem: String,
      categorias: [String]
  }
  ```
  + docker start movie_service
  + npm start
  + npm test

