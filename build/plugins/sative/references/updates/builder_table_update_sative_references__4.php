<?php namespace Sative\References\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSativeReferences4 extends Migration
{
    public function up()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->string('sort_order', 191)->nullable(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->string('sort_order', 191)->nullable()->change();
        });
    }
}
