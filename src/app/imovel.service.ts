import { Injectable } from '@angular/core';
import { Imovel } from './imovel';


@Injectable({
  providedIn: 'root'
})


export class ImovelService {

 private imoveisDB = [
  {
      "id": 1,
      "url_foto": "1.jpg",
      "nome": "Casa 01",
      "cidade": "Saltinho",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.8457824",
      "longitude": "-47.6760854",
      "adicionais": [
          {
              "chave":"Quartos disponíveis",
              "valor": 6
          },
          {
              "chave":"Piscina",
              "valor":"sim"
          }
      ],
      "aluguel": [
        {
            "chave": "Aluguel Mensal",
            "valor": 4500.00
        },
        {
            "chave": "Aluguel Anual",
            "valor": 50000.00
        }
      ]
  },

  {
      "id": 2,
      "url_foto": "2.jpg",
      "nome": "Casa 02",
      "cidade": "Charqueada",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"apartamento",
      "latitude": "-22.5104659",
      "longitude": "-47.7765656",
      "adicionais": [
          {
              "chave":"Banheiro",
              "valor": 1
          }  
      ],
      "aluguel": [
        {
            "chave": "Aluguel Mensal",
            "valor": 1800.00
        },
        {
            "chave": "Aluguel Anual",
            "valor": 3000.00
        }
      ]

  },

  {
      "id": 3,
      "url_foto": "3.jpg",
      "nome": "Casa 03",
      "cidade": "Americana",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.7274743",
      "longitude": "-47.3080925",
      "adicionais": [
          {
              "chave":"Quartos disponíveis",
              "valor": 10
          },
          {
              "chave":"Piscina",
              "valor":"sim"
          },
          {
              "chave":"Quintal",
              "valor":"Muito grande"
          },
          {
              "chave":"Árvores",
              "valor":"Frutiferas"
          }

      ],
      "aluguel": []
  },

  {
      "id": 4,
      "url_foto": "4.jpg",
      "nome": "Casa 04",
      "cidade": "São Pedro",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.5770379",
      "longitude": "-47.927497",
      "adicionais":[],
      "aluguel": []
  },

  {
      "id": 5,
      "url_foto": "5.jpg",
      "nome": "Casa 05",
      "cidade": "Nova Odessa",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.7964492",
      "longitude": "-47.2957863",
      "adicionais":[],
      "aluguel": []
  },


  {
      "id": 6,
      "url_foto": "6.jpg",
      "nome": "Casa 06",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.7139054",
      "longitude": "-47.6656525",
      "adicionais":[],
      "aluguel": []
  },

  {
      "id": 7,
      "url_foto": "7.jpg",
      "nome": "Casa 07",
      "cidade": "Jundiaí",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-23.0987878",
      "longitude": "-47.0075033",
      "adicionais":[],
      "aluguel": []
  },

  {
      "id": 8,
      "url_foto": "8.jpg",
      "nome": "Casa 08",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.8304558",
      "longitude": "-47.2675766",
      "adicionais":[],
      "aluguel": []
  },
  {
      "id": 9,
      "url_foto": "9.jpg",
      "nome": "Casa 09",
      "cidade": "Rio Claro",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"apartamento",
      "latitude": "-22.3848445",
      "longitude": "-47.5469755",
      "adicionais":[],
      "aluguel": []
  },

  {
      "id": 10,
      "url_foto": "10.jpg",
      "nome": "Casa 10",
      "cidade": "Saltinho",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "latitude": "-22.8446977",
      "longitude": "-47.6797359",
      "adicionais":[],
      "aluguel": []
  },

] 



 buscarTodosImoveis(): Imovel[]{
  return this.imoveisDB
}

 buscaImovelPeloId(id:number) : Imovel|undefined{
  let imovel;

  for(let i=0;i< this.imoveisDB.length;i++){
      imovel = this.imoveisDB[i];
      if(imovel.id == id){
          break
      }
  }
  return imovel
}

}


