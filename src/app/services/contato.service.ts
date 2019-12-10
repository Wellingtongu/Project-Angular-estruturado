import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = 'https://localhost:44366/api/usuarios/';
  // contatosUrl = 'http://localhost:3000/produtos/?id=';
  constructor(
    private http: Http
  ) { }


  getdados() {
    return this.http.get(`${this.contatosUrl}Getusuario/`);
  }

  postdados(dado) {
    return this.http.post(`${this.contatosUrl}Postusuario/`, dado);
  }

  editdados(dado) {
    return this.http.get(`${this.contatosUrl}GetusuarioID/?id=` + dado.id);
  }

  atualizadados(dado) {
    return this.http.put(`${this.contatosUrl}Putusuario/?id=` + dado.id , dado);
  }

  deleteusuario(dado) {
    return this.http.delete(`${this.contatosUrl}Deleteusuario/?id=` + dado.id);
  }


}
