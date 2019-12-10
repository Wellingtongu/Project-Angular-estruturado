import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Router } from '@angular/router';
import { DadosUsuario } from '../../models/contato-listagem.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.sass']
})
export class ContatosListagemComponent implements OnInit {
  public dado_usuario = new DadosUsuario;

  Form: FormGroup;
  public message_required = "Campo obrigatório";
  public email_invalid = "Email Invalido";
  public message_minLength = "digite no minimo 3 caracteres";
  public message_maxlength = "maximo de 30 caracteres";
  errors: any = [];

  contatos = [];

  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.contatoService.getdados()
      .subscribe(data => {
        const response = (data as any);
        this.contatos = JSON.parse(response._body);
        // this.contatos.forEach(element => {
        //   console.log(element);
        // });
      });

    this.Formfuncionario();
  }

  onSubmit(data) {
    console.log(data);
    this.contatoService.postdados(data)
      .subscribe((result: any) => {
        // resolve(result.json());
        alert("sucessso");
        this.ngOnInit();
      },
        (error) => {
          // reject(error.json());
          alert(error);
        });

    // this.router.navigateByUrl('/lista')
  }

  Edit(dado) {
    console.log(dado.id);
    this.contatoService.editdados(dado)
      .subscribe(data => {
        const response = (data as any);
        const resposta = JSON.parse(response._body);
        console.log(resposta);
        this.dado_usuario.id = resposta.id;
        this.dado_usuario.nome = resposta.nome;
        this.dado_usuario.senha = resposta.senha;
      });
  }

  Atualizar(data) {
    console.log(data.id);
    console.log(data.nome);
    console.log(data.senha);
    
    this.contatoService.atualizadados(data)
      .subscribe((result: any) => {
        alert("sucessso");
        this.ngOnInit();
      },
        (error) => {
          alert("error");
        });
        
  }


  Delete(dado) {

    this.contatoService.deleteusuario(dado)
        .subscribe((result: any) => {
          alert("sucessso");
          this.ngOnInit();
        },
          (error) => {
            alert("error");
          });
  

  }












  Cancel() {
    this.dado_usuario = { id: null, nome: '', senha: '' };
  }









  Formfuncionario() {
    // demo message to show
    this.Form = this.fb.group({

      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])
      ],
      senha: ['', Validators.required],
      // codigo: ['', Validators.required],
      // cpf: ['', Validators.required],
      // cargo: ['', Validators.required],
      // filial: ['', Validators.required]

    });
  }

  /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.Form.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }


  cadastrar() {
    // this.router.navigate(['cadastro']);
    this.router.navigateByUrl('/cadastro');
  }



}

