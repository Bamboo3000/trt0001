<?php namespace Sative\References\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateSativeReferences extends Migration
{
    public function up()
    {
        Schema::create('sative_references_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('summary');
            $table->string('author');
            $table->boolean('featured')->default(0);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('sative_references_');
    }
}
