<?php namespace Sative\References\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSativeReferences5 extends Migration
{
    public function up()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->integer('sort_order')->nullable(false)->unsigned(false)->default(1)->change();
        });
    }
    
    public function down()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->string('sort_order', 191)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
