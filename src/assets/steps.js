const validateName = (value) => {
  const nameRegex = /^[a-zA-Z\s]+$/
  return nameRegex.test(value)
}

export const steps = [
  {
    id: 'Greet',
    message: '¡Hola! ¡Bienvenidos a ide Pinturerias! ¿En qué puedo ayudarte?',
    trigger: 'Ask Name'
  },
  {
    id: 'Ask Name',
    message: 'Por favor ingrese su nombre',
    trigger: 'validateName'
  },
  {
    id: 'validateName',
    user: true,
    validator: (value) => {
      if (validateName(value)) {
        return true
      } else {
        return 'Por favor ingrese un Nombre valido'
      }
    },
    trigger: 'Name'
  },
  {
    id: 'Name',
    message: 'Hola {previousValue}, ¿En qué puedo ayudarte hoy?',
    trigger: 'issues'
  },
  {
    id: 'Name',
    message: 'Hola {previousValue}, ¿En qué puedo ayudarte hoy?',
    trigger: 'issues'
  },
  {
    id: 'issues',
    options: [
      { value: 'Comprar', label: 'Comprar', trigger: 'Shop' },
      { value: 'Contatc', label: 'Contacto', trigger: 'Contatc' },
      { value: 'account', label: 'Cuenta', trigger: 'account' },
      { value: 'Location', label: 'Ubicacion', trigger: 'Location' }
    ],
    validator: (value) => {
      if (value) {
        return true // Validation passes if an option is selected
      } else {
        return 'Por favor seleccione una Opción' // Validation fails if no option is selected
      }
    }
  },
  {
    id: 'Shop',
    message:
      'Para realizar una compra, comienza por buscar tus productos en nuestra tienda y agrégalos a tu carrito. Luego, ve a la página de pago para finalizar tu compra.',
    trigger: 'more_help'
  },
  {
    id: 'Contatc',
    message:
      'Puedes contactarnos llamando al +54 351 306 1350. Estamos aquí para ayudarte.',
    trigger: 'more_help'
  },
  {
    id: 'account',
    message:
      'Para acceder a tu cuenta, puedes hacerlo en la esquina superior derecha.',
    trigger: 'more_help'
  },
  {
    id: 'Location',
    message:
      'La ubicacion de nuestro Local fisico es en la Ruta 5 - Esquina La Isla Anisacate, Córdoba.',
    trigger: 'more_help'
  },
  {
    id: 'more_help',
    message: '¿Puedo colaborarte en algo más?',
    trigger: 'More_Help_Options'
  },
  {
    id: 'More_Help_Options',
    options: [
      { value: 'Yes', label: 'Sí', trigger: 'issues' },
      { value: 'No', label: 'No', trigger: 'Goodbye' }
    ]
  },
  {
    id: 'Goodbye',
    message: '¡Fue un placer ayudarte! Nuestro chat ha finalizado.',
    end: true
  }
]
