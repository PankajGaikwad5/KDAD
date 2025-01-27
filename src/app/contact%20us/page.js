'use client';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'name must be at least 2 characters')
    .max(50, 'name must be at most 50 characters'),
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
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // console.log(values);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative w-full overflow-hidden md:pt-32 px-4 tracking-widest'>
        <Navbar isBgBlack={true} />
        <div className='w-full text-gray-200 flex justify-center items-center flex-col'>
          <div className='w-full max-w-lg tracking-widest p-6 flex flex-col border shadow-md rounded-lg'>
            <p className='font-sans text-xs font-bold mb-2'>
              By appointment only*
            </p>
            <Form {...form}>
              <form
                // action='https://getform.io/f/bjjjprgb'
                // method='POST'
                className='space-y-4 font-sans'
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className='text-black'
                          placeholder='Enter your name'
                          {...field}
                        />
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
                        <Input
                          className='text-black'
                          placeholder='Enter your email'
                          {...field}
                        />
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
                          className='input textarea text-black'
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
          {/*  */}
          <div className='w-full max-w-lg text-xs font-thin p-4 flex flex-col space-y-4 my-12 py-10'>
            <div className='flex flex-wrap items-center gap-8 text-center '>
              <a
                href='mailto:info@karandesai.in'
                className='flex flex-col underline pt-2 font-sans text-xl md:text-xs'
              >
                info@karandesai.in
              </a>
              <h1 className='text-3xl sm:text-4xl tracking-widest hidden md:flex -mb-4'>
                karan
              </h1>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-12 items-start sm:items-center pb-4 text-start sm:text-left'>
              <p className='flex flex-col font-sans text-xl md:text-xs'>
                <a
                  href='https://maps.app.goo.gl/LDt3TN9yLwB5n6yg7'
                  className='underline'
                  target='_blank'
                >
                  Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West,
                  Mumbai, Maharashtra 400053
                </a>
              </p>
              <div className='flex  gap-4'>
                <h1 className='text-3xl sm:text-4xl tracking-widest md:hidden'>
                  karan
                </h1>
                <h1 className='text-3xl sm:text-4xl tracking-widest md:-mr-4'>
                  desai
                </h1>
              </div>
              <div className='font-sans flex items-center space-x-2 justify-center sm:justify-start'>
                <a href='https://wa.me/+917977112242' target='_blank'>
                  <FaWhatsapp size={25} className='text-green-700' />
                </a>
                <a
                  href='https://wa.me/+917977112242'
                  className='font-semibold text-sm sm:text-md'
                  target='_blank'
                >
                  +917977112242
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row sm:gap-6 font-sans text-center sm:text-left'>
              <p>
                We are not a normal team of architects and interior designers,
                but a unified movement of innovators and creators of unique
                design experiences. We offer extraordinary design solutions
              </p>
              <p>
                which contribute to the well-being of our customers and bring
                real value to their life and work. By entering the space we
                created, you will feel as if you were in your imagination.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
