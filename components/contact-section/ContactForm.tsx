'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-[30rem] text-lg pt-8 space-y-2'
    >
      <div className='flex gap-2'>
        <input
          {...register('name')}
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          className='contactInput'
        />
        <input
          {...register('email')}
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className='contactInput'
        />
      </div>
      <div>
        <input
          {...register('subject')}
          type='text'
          placeholder='Subject'
          className='contactInput'
        />
      </div>
      <div>
        <textarea
          {...register('message')}
          placeholder='Message...'
          className='contactInput '
        />
      </div>
      <button className='contactBtn'>Submit</button>
    </form>
  )
}
export default ContactForm
