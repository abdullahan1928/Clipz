import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  constructor() { }

  private modals: IModal[] = []

  registerModal(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregisterModal(id: string) {
    this.modals = this.modals.filter(m => m.id !== id);
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find(m => m.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find(m => m.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
