export const MENU = {
  pinturas: {
    titulo: 'Pinturas',
    href: '/',
    items: [
      {title: 'ACUARELAS', id: 0, route: 'acuarelas/verano-2021'},
      {title: 'ÓLEO/ ACRÍLICOS', id: 1, route: 'oleos-acrilicos'},
      {title: 'UCQM/ PICTOMAQUÍNICA', id: 2, route: 'pictomaquinica'}
    ]
  },
  acuarelas: {
    titulo:'Acuarelas',
    href: '/pinturas',
    items: [
      {title: 'VERANO 2021', id: 0, route: 'acuarelas/verano-2021'},
      {title: 'VERANO 2022', id: 1, route: 'acuarelas/verano-2022'},
      {title: 'VERANO 2023', id: 2, route: 'acuarelas/verano-2023'}
    ]
  }
}
