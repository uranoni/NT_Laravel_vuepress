# Controllers

除了在單一的 routes.php 檔案中定義所有的請求處理邏輯，你可能希望使用控制器類別來組織此行為。控制器可將相關的 HTTP 請求處理邏輯組成一個類別。控制器一般存放在  app/Http/Controllers 目錄下。

## 路由控制
### routes/wep.php設定
Route
1. 第一個參數是路徑
2. 第二個參數可以設定controller名稱 後面是 其方法
```php
Route::get('user/{id}', 'UserController@showProfile');
```

## 指令
### 建立controller
使用指令建立controller 第一個字母大寫，單數體
```php
    php artisan make:controller PhotoController
```

### 建立CRUD controller 指令
可快速建立CRUD的methods
```php
    php artisan make:controller PhotoController --resource
```

1. resource 可以建立CRUD 的方法
```php
Route::resource('photo', 'PhotoController');
```
2. only可決定用哪些方法，except是相反
```php
Route::resource('photo', 'PhotoController', ['only' => [
    'index', 'show'
]]);

Route::resource('photo', 'PhotoController', ['except' => [
    'create', 'store', 'update', 'destroy'
]]);
```
### 建立controller 順帶建立MODEL

```php
php artisan make:controller PhotoController --resource --model=Photo
```
### 控制行為
動詞      | 路徑                  | 行為    | 路由名稱
----------|:--------------------:|:-------:| ----
GET       | /photo               | index   | photo.index 
GET       | /photo/create        | create  | photo.create
POST      | /photo               | store   | photo.store   
GET       | /photo/{photo}       | show    | photo.show
GET       | /photo/{photo}/edit  | edit    | photo.edit
PUT/PATCH | /photo/{photo}       | update  | photo.update
DELETE    | /photo/{photo}       | destroy | photo.destroy

## 方法注入
### Request Clcass
1. 第一個注入request Class 
2. 帶入參數id

```php
use Illuminate\Http\Request;
   public function update(Request $request, $id)
    {
        
    }
```