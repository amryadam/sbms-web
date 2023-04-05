import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private message: MessageService) {}

  showSuccess(message: string): void {
    this.message.add({
      severity: 'success',
      summary: 'Successful',
      detail: message,
      life: 1500,
    });
  }

  showFailed(message: string): void {
    this.message.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 1500,
    });
  }
}
