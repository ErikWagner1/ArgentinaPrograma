import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  isLogged = false;

  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    //this.datosPortfolio.obtenerDatos().subscribe(data=>{
      //console.log("Datos personales"+ JSON.stringify(data));
      //this.miPortfolio=data[0];
    //});
      if (this.tokenService.getToken()) {
      this.isLogged = true;
      } else this.isLogged = false;
  }

}
