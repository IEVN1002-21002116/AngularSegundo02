export class zodiacochino {
  nombreUsuario: string = '';
  apellidoPUsuario: string = '';
  apellidoMUsuario: string = '';
  diaNacimiento: number = 0;
  mesNacimiento: number = 0;
  anioNacimiento: number = 0;
  sexoUsuario: string = '';

  textoSaludo: string = '';
  textoEdadFinal: string = '';
  textoSignoFinal: string = '';
  imagenURL: string = '';

  ejecutarCalculos(): void {
    const anioReferencia = 2025;
    const mesReferencia = 10;
    const diaReferencia = 10;
    let aniosCumplidos = anioReferencia - this.anioNacimiento;

    if (this.mesNacimiento > mesReferencia) {
      aniosCumplidos = aniosCumplidos - 1;
    } else if (this.mesNacimiento == mesReferencia && this.diaNacimiento > diaReferencia) {
      aniosCumplidos = aniosCumplidos - 1;
    }

    const residuoAnio = this.anioNacimiento % 12;
    let nombreSigno = '';
    let linkImagen = '';

    if (residuoAnio === 0) {
      nombreSigno = 'Mono';
      linkImagen = 'https://www.hola.com/horizon/square/2d10e56a60a0-mono-horoscopo-chino.jpg';
    } else if (residuoAnio === 1) {
      nombreSigno = 'Gallo';
      linkImagen = 'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg';
    } else if (residuoAnio === 2) {
      nombreSigno = 'Perro';
      linkImagen = 'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg';
    } else if (residuoAnio === 3) {
      nombreSigno = 'Cerdo';
      linkImagen = 'https://peopleenespanol.com/thmb/3_4ezJWMT8DtQSEuV5vMg3X8DUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg';
    } else if (residuoAnio === 4) {
      nombreSigno = 'Rata';
      linkImagen = 'https://peopleenespanol.com/thmb/UxHrBxQcgZhtsm9klxjASGK83fU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967831-2000-0b5df0ef22b14788998815d899e6a97f.jpg';
    } else if (residuoAnio === 5) {
      nombreSigno = 'Buey';
      linkImagen = 'https://peopleenespanol.com/thmb/9yOzS_4WbqBfxAQOlPwffgt4d8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165942187-2000-f810031b206d4fa7b64e5f8ad9f2bedd.jpg';
    } else if (residuoAnio === 6) {
      nombreSigno = 'Tigre';
      linkImagen = 'https://peopleenespanol.com/thmb/zw_-Zz1KUqaaj5f_rXDg-ZVKgyw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965551-2000-c9be7d6705b84cf99cdc8b32126e32bb.jpg';
    } else if (residuoAnio === 7) {
      nombreSigno = 'Conejo';
      linkImagen = 'https://peopleenespanol.com/thmb/-ekXDGhFH6Baw6C29OGuDxf8iDQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165927323-2000-c6361314aab74b7485a5ea677666ba83.jpg';
    } else if (residuoAnio === 8) {
      nombreSigno = 'Dragón';
      linkImagen = 'https://peopleenespanol.com/thmb/blSccuj1LqAcyBOI-SNWH1k_9LE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165942305-2000-8fe379790e0e4ccba8ea80e33697647e.jpg';
    } else if (residuoAnio === 9) {
      nombreSigno = 'Serpiente';
      linkImagen = 'https://peopleenespanol.com/thmb/Who-b06dJwjtqnuJ406zgMaq4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg';
    } else if (residuoAnio === 10) {
      nombreSigno = 'Caballo';
      linkImagen = 'https://peopleenespanol.com/thmb/NmX4UUt1APhp__iVTPZtQJim9t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967001-2000-57bb5c0eac9247e4a6b9afe14505f364.jpg';
    } else if (residuoAnio === 11) {
      nombreSigno = 'Cabra';
      linkImagen = 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg';
    }

    this.textoSaludo = `Hola ${this.nombreUsuario} ${this.apellidoPUsuario} ${this.apellidoMUsuario}`;
    this.textoEdadFinal = `Tienes ${aniosCumplidos} años.`;
    this.textoSignoFinal = `Tu signo del zodiaco chino es: ${nombreSigno}`;
    this.imagenURL = linkImagen;
  }
}
