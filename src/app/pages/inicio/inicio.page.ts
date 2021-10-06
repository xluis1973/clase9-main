import { Component, OnInit } from '@angular/core';
interface Componente{
  icon:string,
  name:string,
  redirectTo:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

rutas:Componente[]=[

  {
    icon:'caret-back-outline',
    name:'Alert',
    redirectTo:'/alert'
  },
  {
    icon:'caret-back-outline',
    name:'Action-Sheet',
    redirectTo:'/action-sheet'
  },
  {
    icon:'caret-back-outline',
    name:'Avatar',
    redirectTo:'/avatar'
  },
  {
    icon:'caret-back-outline',
    name:'Botones',
    redirectTo:'/botones'
  }

]


  // rutas:any[]=[
  //   {
  //     titulo:'Alert',
  //     ruta:'/alert'
  //   },
  //   {
  //     titulo:'Action-Sheet',
  //     ruta:'/action-sheet'
  //   }
  // ]
  constructor() { }

  ngOnInit() {
  }

}
