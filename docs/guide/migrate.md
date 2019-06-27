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

### 修改欄位
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

### Indexes
```php
    * primary 主鍵
    * unique 唯一值
    * index 索引值
    * dropPrimary 丟掉主鍵
    * dropUnique 丟掉索引值
    * dropIndex 丟掉索引值
```

### 修改索引、主鍵
把users的 id 主鍵刪除
兩種方法都可以
```php
$table->dropPrimary(['id']); //陣列表該資料表欄位刪除

$table->dropPrimary('users_id_primary'); // laravle慣例
```

### 建立連結 foreign key

posts的資料表 建立user_id 
並且建立外來鍵對應到 users tables的 id這個欄位
1. 建立基本連結
```php
Schema::table('posts', function ($table) {
    $table->integer('user_id')->unsigned();

    $table->foreign('user_id')->references('id')->on('users');
});
```
2.  約束資料表關聯的應用

當文章刪除的時候使用者 是否被刪除'cascade'表示刪除使用者時連同文章刪除
```php
$table->foreign('user_id')
      ->references('id')->on('users')
      ->onDelete('cascade');
```

參數設定
* CASCADE - 會將有所關聯的紀錄行也會進行刪除或修改。

* SET NULL - 會將有所關聯的紀錄行設定成 NULL。

* NO ACTION - 不鳥你，想刪就刪

* RESTRICT - 有存在的關聯紀錄行時，會禁止父資料表的刪除或修改動作。

3. 丟掉foreign_key
刪掉post的user_id 的key

```php
$table->dropForeign('posts_user_id_foreign');
```

```php
$table->dropForeign(['user_id']);
```