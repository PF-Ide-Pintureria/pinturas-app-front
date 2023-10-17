export const validationBlog = ({ title, image, description }) => {
  const errors = {}

  if (!title) errors.title = 'El titulo es requerido'
  if (!image) errors.image = 'La imagen es requerida'
  if (!description) errors.description = 'La descripcion es requerida'

  return errors
}
