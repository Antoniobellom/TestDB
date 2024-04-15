# TestDB
Credenciales de MYSQL

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nombre_de_tu_base_de_datos',
        'USER': 'root',
        'PASSWORD': '12345678',
        'HOST': 'localhost',  # O la IP del servidor de base de datos si no es local
        'PORT': '3306',  # El puerto por defecto de MySQL
    }
}

para ver los datos en la Base de datos

SELECT * FROM users_user;


igual hay un requirement.txt para instalar las dependencias necesarias en el back, aunque el proyecto es sencillo


El front hay que hacer un npm i e instalar axios es lo unico extra que instale
