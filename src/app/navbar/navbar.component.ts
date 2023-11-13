import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // userInfo: any = {};
  // isLogin: boolean = false;
  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
    // this._AuthService.userData.subscribe({
    //   next: () => {
    //     if (this._AuthService.userData.getValue() != null) {
    //       this.isLogin = true;
    //       this.userInfo = this._AuthService.userData;
    //     } else {
    //       this.isLogin = false;
    //     }
    //   }
    // })
    $('nav ul li').click(function (e: any) {
      if (e.target['routerlink'] == e.target.text) {
        $(e.target).css({ 'border-bottom': 'solid 3px #24baef', 'padding-bottom': '6px' });
        $(e.target).parent().parent().siblings().children().children().css('border-bottom', 'none');
      }
    });
  }
  // logout() {
  //   this._AuthService.signOut()
  // }





}
