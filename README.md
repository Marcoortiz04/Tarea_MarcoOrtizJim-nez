# Tarea_MarcoOrtizJimenez_Tarea1
Respuestas:

A - Datos en formato JSON.
B - Se encuentra tanto en la dirección URL (/posts/1) como dentro del cuerpo del JSON ("id": 1).
C - No, ya que usar curl sin opciones extra solo imprime el cuerpo y omite los códigos de respuesta.
D - Significa "OK", lo que confirma que la solicitud fue procesada correctamente.
E - Respuestas exitosas (grupo 2xx).
F - 400 (Bad Request), 404 (Not Found), 500 (Internal Server Error) y 201 (Created).
G - Un navegador web intentaría leer y renderizar la respuesta como una página tradicional en vez de procesarlo como datos de API.
H - Sí, este encabezado muestra la cantidad exacta de bytes que pesa el cuerpo de la respuesta.
I - Al usar keep-alive, se mantiene la conexión abierta para futuras peticiones, lo que evita el desgaste del servidor de abrir y cerrar conexiones a cada rato.
J - Código 404 Not Found.
K - Sí, la API responde con un objeto JSON vacío ({}).
L - Al no existir el recurso, obtenemos un error de cliente (4xx) y el cuerpo ya no trae la información solicitada.
M - 201 Created.
N - Confirma que la solicitud POST funcionó y el servidor generó el recurso nuevo exitosamente.
O - Los encabezados Location, Content-Length y Content-Type.
P - No, esta API es de prueba (mock) así que aprueba la petición sin validar realmente el token.
Q - 401 Unauthorized (No autorizado).
R - 401 indica que no tienes credenciales válidas (falta autenticación). 403 significa que el servidor te reconoce, pero no te da permiso para esa acción.
S - Para revisar los metadatos o confirmar la existencia de una ruta sin consumir los datos de red que implica descargar el recurso entero.
T - Es útil para hacer "ping" a los servidores y saber si están activos consumiendo el mínimo ancho de banda posible.

U - Tabla completada:
Código - Categoría - Significado
200 - Success - OK. La petición fue recibida y aceptada correctamente.
201 - Success - Created. La acción se completó y se generó el nuevo recurso en el servidor.
400 - Client Error - Bad Request. Fallo por culpa del cliente (ej. sintaxis incorrecta).
401 - Client Error - Unauthorized. Se requieren credenciales y estas fallaron o no se enviaron.
403 - Client Error - Forbidden. El servidor reconoce al cliente pero este carece de permisos.
404 - Client Error - Not Found. No se halló el recurso solicitado en el sistema.
500 - Server Error - Internal Server Error. Fallo general por un problema inesperado del lado del servidor.
