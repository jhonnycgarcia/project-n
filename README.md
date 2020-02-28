# Payroll Project

Proyecto para gestionar el cálculo de la nómina de los trabajadores, proyecto desarrollado con NodeJs + PostgresSQL

### Requisitos y Instalación
1. Ejecutar `npm install` para descargar las dependencias.
2. Es necesario configurar las variables de entorno para poder inicializar la aplicación, esto se debe realizar en: `src/environments/environments.env`:
    - Para conectar con la base de datos las variables a modificar son las que poseén el sufijo `PG`.
    - Esta aplicación tiene definido el puerto `3000` por defecto, si se desea realizar el cambio del mismo dentro de este archivo se encuentra la definición del mismo.
3. Ya con estos pasos realizados procedemos a ejecutar el comando `npm start` para inicializar la ejecucion del proyecto. Tambien podemos ejecutar el comando `npm run dev` para el modo de desarrollo.
4. Listo! ya se encuentra configurada la aplicación.

### Estatus
- [x] Inicializar proyecto
- [ ] Seguir desarrollando
- [ ] ...