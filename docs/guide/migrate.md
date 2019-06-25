# Migration

##  Introduction
做資料庫版本的控制

## 執行
    php artisan migrate

## Schema靜態方法
    ● Schema::create
    ● Schema::rename
    ● Schema::drop/dropIfExists
    ● Schema::table(table換成資料表名稱)

## ColumnType
    ● integer
    ● boolean
    ● string
    ● text
    ● enum
    ● date/dateTime/time
    ● json
    ● increments(UNSIGNED BIGINT)
    ● timestamp(created_at/upload_at)
    ● unsignedInteger
    ● softDeletes(delete_at)
    ●● Example: $table->increments('id')
    ●●● 其他可在 https://laravel.com/docs/5.7/migrations#colums 看到

## ColumModifier
    ● nullable
    ● after
    ● default
    ● useCurrent
    ● unsigned
    ● comment
    ●● Example: $table->text('content')->default('預設內容')