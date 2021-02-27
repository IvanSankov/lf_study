import React from 'react';

import Client from "../../http/Client";

import {useForm} from "react-hook-form";

export default function UserForm() {
  const { register, handleSubmit, errors, formState } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    const requestData = {...data};
    requestData.status = 10;

    const client = new Client();
    await client.createNewUser(requestData)
      .then(console.log)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" name="name" ref={register({required: true})}/>
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <input type="text" name="discordNickname" ref={register({required: true, maxLength: 32})}/>
        {errors.discordName && <span>This field is required</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Create'}</button>
    </form>
  );
}