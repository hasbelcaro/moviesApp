// Clase para formatear numeros en dolares

export class Formatter {

  static currency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }

}