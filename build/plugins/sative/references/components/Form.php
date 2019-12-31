<?php namespace Sative\References\Components;

use Cms\Classes\ComponentBase;
use Redirect;
use Session;
use Flash;
use Input;
use Mail;
use Validator;
use Validation;
use ValidationException;
use \Anhskohbo\NoCaptcha\NoCaptcha;

class Form extends ComponentBase
{

    public function componentDetails()
    {
        return [
            'name'        => 'Form Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function onRun()
    {
        $this->page['appCaptcha'] = app('captcha')->display(['data-callback' => 'appCaptchaCallback']);
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

        $rules = [
			'name'	    => 'required|min:3',
			'email'		=> 'required|email',
			'g-recaptcha-response'  => 'required|captcha',
        ];

        $validator = Validator::make(Input::all(), $rules);

        if($validator->fails()){
            $messages = $validator->messages();
            foreach ($messages->all() as $message) {
                Flash::error($message);
            }
		} else {

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

}