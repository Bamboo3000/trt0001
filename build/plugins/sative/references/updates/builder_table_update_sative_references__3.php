<?php namespace Sative\References\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSativeReferences3 extends Migration
{
    public function up()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->string('sort_order')->nullable()->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->integer('sort_order')->nullable()->unsigned(false)->default(null)->change();
        });
    }
}
