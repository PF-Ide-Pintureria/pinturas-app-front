import { postContactEmail } from '../../redux/actions/Mail/postContactEmail'
import Swal from 'sweetalert2'

export const formatAndSend = async ({ name, email, message }, dispatch) => {
  try {
    const formatedEmail = `
        <html lang="en" >
            <head>
                <meta charset="UTF-8">
                    <title>Contacto desde Ide Pinturerias</title>
            </head>
            <body>
                <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                    <div style="margin:50px auto;width:70%;padding:20px 0">
                        <div style="border-bottom:1px solid #eee">
                            <a href="http://localhost:5173" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Ide Pintureria</a>
                        </div>
                        <h3>Cliente: ${name}</h3>
                        <h3>Email: ${email}</h3>
                        <p style="font-size:1.1em">Hola!,</p>
                        <p>Has recibido un nuevo mensaje desde el formulario de contacto.</p>
                        <p>Puedes responder este mensaje para comunicarte con ${name}</p>
                        <p>Mensaje: <br/>
                        ${message}<br/></p>
                        <p style="font-size:0.9em;">Saludos,<br />Ide Pintureria</p>
                        <hr style="border:none;border-top:1px solid #eee" />
                        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                            <p>Ide Pintureria</p>
                            <p>Ruta 5 - Esquina La Isla
                            Anisacate, Córdoba</p>
                            <p>Argentina</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>`

    const emailToBeSend = {
      name,
      message: formatedEmail,
      replyTo: email
    }

    await postContactEmail(emailToBeSend)(dispatch).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          text: 'Correo enviado correctamente'
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: 'El mensaje no ha sido enviado'
        })
      }
    }).catch((err) => {
      console.error(err)
    })
  } catch (error) {
    console.error(error)
  }
}
