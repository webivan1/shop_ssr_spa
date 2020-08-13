<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTableProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('heading', 200);
            $table->string('title', 200)->nullable();
            $table->string('slug', 200)->unique();
            $table->string('description', 255)->nullable();
            $table->text('keywords')->nullable();
            $table->text('content')->nullable();
            $table->integer('quantity')->default(0);
            $table->decimal('price');
            $table->decimal('price_old')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->on('categories')->references('id')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
