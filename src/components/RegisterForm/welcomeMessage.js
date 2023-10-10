export const welcomeMessage = (name) => (`<html lang="en">

<head>
    <meta charset="UTF-8">
        <title>Bienvenido a Ide Pinturerias</title>
</head>

<body>
    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
                <a href="http://localhost:5173"
                    style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Ide Pintureria</a>
            </div>
            <h3>Hola ${name}!</h3>
            <p>Bienvenido a la familia de Ide Pintureria.</p>
            <p>Puedes ir a modificar tus datos en la seccion de <a href=" ">Mi Cuenta</a></p>
            <p>En esta sección tambien encontrarás tu pedidos, tus favoritos y podrás cerrar sesión. <br />

            Ante cualquier cosa, no dudes en contactarnos a través de nuestro formulario de <a href=" ">contacto</a>.
                
            <p style="font-size:0.9em;">¡Saludos!</p>
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

</html>`)
