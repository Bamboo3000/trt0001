<?php namespace Sative\References\Components;

use Cms\Classes\ComponentBase;
use Redirect;
use Session;
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
            'extra'     => Input::get('extra')
        ];  

        if(Session::token() === Input::get('_token')) {
            
            Mail::send('sative.references::mail.message', $inputs, function($message){

                $message->from('web@trainingretail.nl', 'Training Retail Website');
                $message->to('info@trainingretail.nl', 'Admin');
                $message->subject('Training Retail new message');
    
            });
    
            Flash::success('job');
    
            return Redirect::back();
            die();
            
        } else {

            return Redirect::back();
            die();

        }

        

    }

}