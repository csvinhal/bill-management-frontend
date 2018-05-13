declare let toastr: any;
import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {

  private options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-right',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  constructor() { }

  success(message: string, title = 'Success', options?: any) {
    toastr.options = { ...this.options, ...options };
    toastr.success(message, title);
  }

  error(message: string, title = 'Error',  options?: any) {
    toastr.options = { ...this.options, ...options };
    toastr.error(message, title);
  }
}
