<?php namespace Sative\References\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSativeReferences2 extends Migration
{
    public function up()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->integer('sort_order')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->dropColumn('sort_order');
        });
    }
}
