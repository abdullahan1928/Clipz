import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.registerModal('auth');
    // this.modalService.registerModal('test');
  }

  ngOnDestroy(): void {
    this.modalService.unregisterModal('auth');
    // this.modalService.unregisterModal('test');
  }

}
