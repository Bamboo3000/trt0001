<?php namespace Sative\References\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSativeReferences extends Migration
{
    public function up()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->string('img')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('sative_references_', function($table)
        {
            $table->dropColumn('img');
        });
    }
}
