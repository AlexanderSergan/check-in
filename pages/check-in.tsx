import Button from '@atlaskit/button/standard-button';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Spinner from '@atlaskit/spinner';
import Textfield from '@atlaskit/textfield';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';

const congratulations = name => <>

<div className="fade-in">
    
        <h3>Thanks, {name}!🎉</h3>
        <h3>You have successfully checked in👍🏼</h3>
        <br/>
    
        <h4>browse <Link href='/'>
            <a className="link">checked in people</a>
        </Link>
        </h4>
</div>

</>

const TextFieldFormExample = ({ setCheckInSuccess, setName }) => {
    
    const [loading, setLoading] = useState(false)
    
    const saveUser = async ( user ) => await fetch('api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    
    const handleSubmit = async (submit) => {
        setLoading(true)
        try {
            let res = await saveUser(submit)
        } catch (err) {
            console.error('smth bad')
        }
        setName(submit.name)
        setLoading(false)
        setCheckInSuccess(true)
        console.log('form submit')
    }
    
    return (
        
        
        
        <Form
        onSubmit={(formState: unknown) => handleSubmit(formState)}
        >
            {({ formProps }: any) => (
                <form {...formProps}>
                    <Field label="Name" name="name">
                        {({ fieldProps }: any) => (
                            <Fragment>
                                <Textfield
                                    placeholder="Enter your name here"
                                    {...fieldProps}
                                    />
                                {/* <HelperMessage>
                                    Help or instruction text goes here
                                </HelperMessage> */}
                            </Fragment>
                        )}
                    </Field>
                    <Field label="Phone" name="phone">
                        {({ fieldProps }: any) => (
                            <Fragment>
                                <Textfield
                                    placeholder="Your phone number"
                                    {...fieldProps}
                                    />
                                {/* <HelperMessage>
                                    Help or instruction text goes here
                                </HelperMessage> */}
                            </Fragment>
                        )}
                    </Field>
                    <FormFooter>
                        <Button type="submit" appearance="primary">
                            {
                                loading ? 
                                <Spinner appearance='invert'/> :
                                'Submit'
                            }
            </Button>
                    </FormFooter>
                </form>
            )}
        </Form>
    );
}


const CheckIn = () => {
    
    const [name, setName] = useState('')
    const [checkInSuccess, setCheckInSuccess] = useState(false)
    
    return <>
        <div className="container main check-in fade-in">

            { checkInSuccess ? 
                 congratulations(name)
                : <>
                <h2>Please provide your data to check in:</h2>
        
                <TextFieldFormExample 
                    setCheckInSuccess={setCheckInSuccess}
                    setName={setName}
                    ></TextFieldFormExample>
                
                </> 

        }


        </div>
    </>
}


export default CheckIn