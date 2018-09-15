<?php namespace Sative\References\Components;

use Cms\Classes\ComponentBase;
use Redirect;
use Flash;
use Input;
use Mail;

class Form extends ComponentBase
{

    public function componentDetails()
    {
        return [
            'name'        => 'Form Component',
            'description' => 'No description provided yet...'
        ];
    }

    /*
    *
    * Form submit script
    *
    */
    protected function onFormSubmit()
    {

        $inputs = [
            'name'      => Input::get('name'),
            'company'   => Input::get('company'),
            'phone'     => Input::get('phone'),
            'email'     => Input::get('email'),
            'extra'     => Input::get('extra'),
        ];  

        Mail::send('searchit.jobs::mail.message', $inputs, function($message){

            $message->from('searchit@recruitment.com', 'Searchit VPS');
            $message->to('info@searchitrecruitment.com', 'Admin Searchit');
            $message->subject('Searchit Recruitment new job spec');

        });

        Flash::success('job');

        return Redirect::back();
        die();

    }

}