<?php namespace Sative\References;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Sative\References\Components\Form' => 'form',
        ];
    }

    public function registerSettings()
    {
    }
}
