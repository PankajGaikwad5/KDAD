'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(50, 'Username must be at most 50 characters'),
  email: z.string().email('Invalid email address').min(2).max(50),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message cannot exceed 500 characters'),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className='relative w-full overflow-hidden md:pt-32 px-4 tracking-widest'>
      <Navbar isBgBlack={true} />
      <div className='w-full text-gray-200 flex justify-center items-center flex-col'>
        <div className='w-full max-w-lg tracking-widest p-6 flex flex-col border shadow-md rounded-lg'>
          <p className='font-sans text-xs font-bold mb-2'>
            By appointment only*
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4 font-sans'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your username' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Enter your message'
                        className='input textarea'
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='bg-white text-gray-900 hover:bg-black hover:text-gray-300 transition-all duration-500 ease-in-out'
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className='w-full max-w-lg text-xs font-thin p-4 flex flex-col space-y-2 my-12 py-10'>
          <div className='flex gap-8'>
            <p className='flex flex-col justify-items-start font-sans'>
              Via Villa Mirabello 6 <a href='tel:+3902603048'>+3902603048</a>
            </p>
            <h1 className='text-4xl tracking-widest '>karan</h1>
            <p>&nbsp;</p>
          </div>
          <div className='flex gap-10 items-center'>
            <a
              href='mailto:info@karandesai.in'
              className='flex flex-col  font-sans'
            >
              info@karandesai.in
            </a>
            <h1 className='text-4xl ml-20 tracking-widest '>desai</h1>
            <p className='font-sans'>
              Give us a call at:{' '}
              <a href='tel:+917977112242' className='font-semibold'>
                +917977112242
              </a>
            </p>
          </div>
          <div className='flex gap-6 font-sans'>
            <p>
              Non siamo un team normale di architetti ed interior designer, ma
              un movimento unificato di innovatori e creatori di esperienze di
              design uniche. Offriamo straordinarie soluzioni di design
            </p>
            <p>
              che contribuiscono al benessere dei nostri clienti e apportano un
              valore reale alla loro vita e al loro lavoro. Entrando nello
              spazio che abbiamo creato, vi sentirete come se foste nella vostra
              immaginazione.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
