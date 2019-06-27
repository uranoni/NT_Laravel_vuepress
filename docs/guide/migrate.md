# Migration
做資料庫版本的控制
##  基本操作


### 建立migration
    php artisan make:migration create_posts_table
    檔名命名是convention  
### file name convention
動作_資料表名稱_資料表
* id
* timestamps(create , update)

### 操作
1.  Table
2.  Cloumn
3.  Index 

### Schema靜態方法
```php
* Schema::create  建立
* Schema::rename  重新命名
* Schema::drop/dropIfExists   丟掉/丟掉是否存在
* Schema::table(要針對資料表做修改)
```

### ColumnType
```php
* integer
* boolean
* string
* text
* enum
* date/dateTime/time
* json
* increments(UNSIGNED BIGINT)
* timestamp(created_at/upload_at)
* unsignedInteger
* softDeletes(delete_at) 軟性刪除 執行時只會更新這個時間
* Example: $table->increments('id')
* 其他可在 https://laravel.com/docs/5.7/migrations#colums 看到
```

### Colum Modifier
```php
* nullable  值可以不填
* after     可以插在特定值得後面
* default   預測值
* useCurrent 現在時間
* unsigned  可以把 int轉unsign
* comment   註解
* Example: $table->text('content')->default('預設內容')
```

## 修改Modifung Cloumns
### 指令
    composer require doctrine/dbal

### 修改

*   change 
有使用change表示修改，如果不加上change表示新增

```php
    Schema::table('users', function ($table) {
    $table->renameColumn('from', 'to');
});
```



* rename
使用rename改變欄位名稱

```php
    Schema::table('users', function ($table) {
    $table->dropColumn('votes');
    });
```

* dropcloumn
從users table刪除多個欄位

```php
    Schema::table('users', function ($table) {
    $table->dropColumn(['votes', 'avatar', 'location']);
    });
```