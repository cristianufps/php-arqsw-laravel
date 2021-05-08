# INTRODUCCION
Se asignó una tecnología a cada grupo, a fin de realizar un proyecto pequeño de desarrollo de software (con persistencia) para demostrar esa tecnología y una exposición corta en video. 

La aplicación se debe desplegar en la nube de Amazon AWS usando los recursos asignados de AWS Educate. El código debe publicarse en Github. El video debe publicase en Youtube, enfocándose en las instrucciones para el despliegue y los detalles relevantes de la tecnología y la aplicación desarrollada.

En clase se podrá revisar aleatoriamente pidiendo que se exponga y explique.

# Tecnología 
PHP (Usar frameworks tipo laravel o Symfony) (Libre bd)

# Framework usado -> Laravel

# Herramientas utilizadas:

- Xampp: paquete de software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl.

- Composer: sistema de gestión de paquetes para programar en PHP el cual provee los formatos estándar necesarios para manejar dependencias y librerías de PHP

- Laravel: es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP

- Fullcalendar: es un plugin de jQuery que ofrece un calendario de tamaño completo, con la función de 'arrastrar y soltar'. Se utiliza AJAX para traer eventos en la marcha cada mes y se puede configurarlo fácilmente.

- Una vez instalado Composer ejecutaremos el siguiente comando "composer global require laravel/installer" para instarlar laravel dentro de nuestro proyecto

 
# CONFIGURACION DE ENTORNO: 

•	Instalación de xampp

Desde el sitio https://www.apachefriends.org/es/index.html descargar xampp segun el sistema operativo

•	Clonacion del proyecto

Para poder ejecutar el proyecto desde su equipo, clone el repositorio o descargue el .zip en el directorio "c:/xampp/htdocs"

•	Configuracion de la base de datos

Crear una base de datos llamada "agenda" en phpMyAdmin o cualquier gestor de base de datos MySQL y correr el comando

<code>php artisan migrate</code>

•   Instalacion de composer

Desde el sitio https://getcomposer.org/download/ descargar composer segun el sistema operativo y una vez ejecutado el setup, en la version de php poner la del directorio "xampp/php/php.exe", el proxy se deja predeterminado y se añade la variable al path. Si este no es añadido ir a las variables de entorno del sistema y añadir al PATH la ruta "C:\Users\User\AppData\Roaming\Composer\vendor\bin"

•	Instalacion de laravel

Para poder correr la aplicacion se debe instalar laravel en el equipo con el comando

<code>composer global require laravel/installer</code>

•	Instalacion de modulos de composer 

Para que el proyecto tenga el directorio "vendor" y las configuraciones que consigo trae composer, ejecutar

<code>composer install</code>

•	Instalacion de node

Desde el sitio https://nodejs.org/es/ descargar node lts (version estable) e instalarlo en el sistema, una vez instalado verificar su version mediante el comando

<code>node --version</code>

Para los modulos de node se deben instalar globalmente en el equipo mediante

<code>npm install npm -g</code>

Una vez instalado globalmente, dentro del proyecto correr el siguiente comando en la terminal para añadir los modulos de node al mismo

<code>npm install</code>

Y para correr el entorno con node, ejecutar

<code>npm run dev</code>

# PROCESO DE DESARROLLO:
Sobre el proyecto se crearon los diversos controladores y modelos para que cumpliera con el objetivo de la agenda de citas, la visualización del calendario y sus otras funcionalidades
Como lo fue:
-	Eventos 
-	Etc

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
