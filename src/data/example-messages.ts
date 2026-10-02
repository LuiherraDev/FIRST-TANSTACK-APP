export type ExampleMessage = {
  label: string
  text: string
}

export const EXAMPLE_MESSAGES: ExampleMessage[] = [
  {
    label: 'Paquete retenido',
    text: 'Correos: su paquete está retenido. Pague 1,99€ de tasas en https://correos-envio.xyz antes de 24h o será devuelto.',
  },
  {
    label: 'Cuenta bloqueada',
    text: 'BBVA: hemos bloqueado su cuenta por actividad sospechosa. Verifique sus datos urgentemente en bbva-seguro.net',
  },
  {
    label: 'Familiar en apuros',
    text: 'Hola mamá, se me ha roto el móvil y este es mi número nuevo. Necesito que me hagas un bizum de 300€ hoy, luego te explico.',
  },
  {
    label: 'Premio',
    text: '¡Enhorabuena! Has ganado un iPhone. Haz clic en el enlace para reclamar tu premio antes de que caduque: http://premios-gratis.win',
  },
  {
    label: 'Publicidad',
    text: '¡Rebajas de verano en Zara! Hasta 50% en toda la tienda online.',
  },
  {
    label: 'Mensaje personal',
    text: 'Oye, ¿quedamos mañana a las 8 para cenar? Llevo el vino.',
  },
  {
    label: 'Cita médica',
    text: 'Le recordamos su cita en el centro de salud el martes 14 a las 10:30. Si no puede acudir, llame al 900 123 456.',
  },
]