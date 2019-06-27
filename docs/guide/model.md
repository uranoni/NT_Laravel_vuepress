# Model and Eloquent
1. 在app的資料夾底下
2. 資料模型
## 建立model指令
laravel  convention 單數並且第一個字母大寫
    php artisan make:model Post

## Conventions
* Class Post 會自動找到 tabel是複數posts資料表
* 會默認primary key就是id

## Eloquent 是Laravel 的Active Record
Eloquent 就是 Active Record
Active Record 就是 ORM+Active Record pattern

###  ORM
物件導向映射到database table的技巧

### Active Record pattern
開發者的設計模式

1. CRUD   
    *   getter
    *   setter
    *   properties

2. Model -> table

3. Model -> model(relationships)

4. Validation

5. OOP style query

6. Convention >config