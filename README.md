Local Develop (This Guide is for distributions based on Debian)
------

## <a name="index"></a> Index

* [Prerequirements](#pre-requirements)
* [OS Requirements](#os-requirements)
* [Setting up the project](#project-setup)

### <a name="pre-requirements"></a> Prerequirements.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

1. Python 2.7
2. Git

### <a name="os-requirements"></a> OS Requirements.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

Installing Dependencies

```bash
$ sudo apt-get install python-pip python-dev libjpeg-dev
```

### <a name="project-setup"></a> Setting up the project.<sub><sub><sub><sub>[Index](#index)</sub></sub></sub></sub>

```bash
$ git clone <code_repository>
$ pip install virtualenv
$ virtualenv  ~/.venv_vre
$ source ~/.venv_vre/bin/activate
$ cd vre/
$ pip install -r requirements/local.txt
```

To setup the env variables

```bash
$ cp .env-sample .env
```

Fill the env variables, ask to the project leader for the values

```bash
$ source .env
```

To setup the database

```bash
$ ./manage.py migrate
```

Create a superuser for the admin site

```bash
$ ./manage.py createsuperuser
```

NOTE: On 'user type' option use 'investor'

Finally run the project using

```bash
$ ./manage.py runserver 8000
```
