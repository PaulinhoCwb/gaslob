## Environment
**Configuração Inicial**  
```cp .env.example .env```  
Configure .env file

**Start Docker**  
```docker-compose up -d --build``` 

**Stop Docker**  
```docker-compose stop``` 

**Entrar dentro do container PHP**  
```docker-compose exec php bash```  

## Desenvolvimento
**Gerando Seeds **  
```php artisan db:seed```


**Vue Hot Editing**  
```npm run hot```

**Build Production**  
```npm run prod```

### Referências
https://docs.docker.com/  
https://docs.docker.com/compose/  
https://laravel.com/docs   
https://vuejs.org/v2/guide/  
https://vuetifyjs.com/getting-started/quick-start   
