# INTRODUCCION
Se asignó una tecnología a cada grupo, a fin de realizar un proyecto pequeño de desarrollo de software (con persistencia) para demostrar esa tecnología y una exposición corta en video. 
La aplicación se debe desplegar en la nube de Amazon AWS usando los recursos asignados de AWS Educate. El código debe publicarse en Github. El video debe publicase en Youtube, enfocándose en las instrucciones para el despliegue y los detalles relevantes de la tecnología y la aplicación desarrollada.
En clase se podrá revisar aleatoriamente pidiendo que se exponga y explique.

# Tecnología 
PHP (Usar frameworks tipo laravel o Symfony) (Libre bd)

# Framework usado  Laravel

# Herramientas utilizadas:

- Composer: sistema de gestión de paquetes para programar en PHP el cual provee los formatos estándar necesarios para manejar dependencias y librerías de PHP
- Xampp: paquete de software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl.
- Fullcalendar: es un plugin de jQuery que ofrece un calendario de tamaño completo, con la función de 'arrastrar y soltar'. Se utiliza AJAX para traer eventos en la marcha cada mes y se puede configurarlo fácilmente.
 
# CONFIGURACION DE ENTORNO: 

Para la creación del proyecto se instalaron las herramientas necesarias para que el trabajo fuera acorde con la tecnología asignada y el framework que se escogió, además de también escoger el gestor de base de datos para trabajar.

•	Instalación de XAMPP https://www.apachefriends.org/es/index.html 

•	Instalación de composer https://getcomposer.org/ 

•	Creación
En la creación del proyecto se adapto en el directorio htdocs de la aplicación xampp, para ir trabajando a la par con el gestor. 
Se creo con los comandos: 
Composer create-project laravel/laravel agenda

•	Configuración de base de datos y migración de tablas
Una vez teniendo el proyecto creado se configuro el archivo “.env” para la base de datos a manejar con el usuario la contraseña y el nombre de la base de datos creada previamente.
Una vez configurado el archivo se ejecutó el comando
php artisan migrate

Para la creación automática de las tablas de bases de datos proporcionadas por el proyecto.
•	Integración de Bootstrap y Auth del aplicativo
Para la integración de estilos proporcionados por Bootstrap y una autenticación en la aplicación que incluyen estos estilos, se ejecutó el comando para la preparación de las ui de laravel
composer require laravel/ui

Y después para la instalación de estos
php artisan ui bootstrap --auth

•	Instalación de los módulos de node y ejecución del ambiente de desarrollo
Para instalar los modulos de node en el aplicativo y que se puede ejecutar el ambiente de desarrollo del aplicativo se ejecutaron los comandos:
npm install && npm run dev

Una vez preparado el entorno, se accede por medio de la URL: http://localhost/agenda/public/ 
•	Integración de fullcalendar
Para integrar fullcalendar al proyecto, se accedió al sitio web https://fullcalendar.io/docs/getting-started donde por medio de los CDNs se añaden los servicios 
 
Al archivo app.blade.php, ubicado en “resources/views/layout/”

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
