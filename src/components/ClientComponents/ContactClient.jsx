'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { FaWhatsapp } from 'react-icons/fa';
import { Poppins, Montserrat, Work_Sans } from 'next/font/google';
import Link from 'next/link';

// fonts
const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const worksans = Work_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

// Updated schema
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(10).max(500),
  type: z.enum(['connect', 'career']),
  position: z.string().optional(),
});

const ContactClient = () => {
  const [selectedType, setSelectedType] = useState('connect');
  const [file, setFile] = useState(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Form card slides up + fades in on load
    gsap.fromTo(
      formRef.current,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', delay: 0.15 }
    );

    // Info section items stagger up on scroll
    if (infoRef.current) {
      const items = infoRef.current.querySelectorAll('[data-gsap-info]');
      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      type: 'connect',
      position: '',
    },
  });

  async function onSubmit(values) {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('message', values.message);
      formData.append('type', values.type);
      if (values.position) {
        formData.append('position', values.position);
      }
      if (selectedType === 'career' && file) {
        formData.append('file', file);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message sent successfully!');
        window.location.reload();
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full text-gray-200 flex justify-center items-center flex-col min-h-[85vh]'>
      <div ref={formRef} className='w-full max-w-lg 2xl:max-w-2xl tracking-widest p-6 flex flex-col border shadow-md rounded-lg'>
        <p
          className={`text-xs font-bold mb-2 ${montserrat.className} uppercase font-light`}
        >
          By appointment only*
        </p>

        <Form {...form}>
          <form
            className={`space-y-4 ${popins.className}`}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* TYPE SELECT (Radio Buttons) */}
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason</FormLabel>
                  <FormControl>
                    <div className='flex gap-6 text-sm text-white'>
                      <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='radio'
                          value='connect'
                          checked={field.value === 'connect'}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            setSelectedType(e.target.value);
                          }}
                          className='h-4 w-4'
                        />
                        Connect with Designers
                      </label>

                      <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                          type='radio'
                          value='career'
                          checked={field.value === 'career'}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            setSelectedType(e.target.value);
                          }}
                          className='h-4 w-4'
                        />
                        Apply for Career
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* POSITION TITLE - only for career */}
            {selectedType === 'career' && (
              <FormField
                control={form.control}
                name='position'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Title</FormLabel>
                    <FormControl>
                      <Input
                        className='text-black'
                        placeholder='Enter position title'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* FILE UPLOAD - only for career */}
            {selectedType === 'career' && (
              <FormItem>
                <FormLabel>Resume/Portfolio (Max 5MB)</FormLabel>
                <FormControl>
                  <Input
                    type='file'
                    className='text-black bg-white file:text-black file:bg-gray-100 hover:file:bg-gray-200 file:border-0 file:rounded-md file:px-2 file:cursor-pointer p-0 h-auto'
                    accept='.pdf,.doc,.docx,.jpg,.jpeg,.png'
                    onChange={(e) => {
                      const selectedFile = e.target.files[0];
                      if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
                        alert('File size exceeds 5MB limit.');
                        e.target.value = null; // Reset input
                        setFile(null);
                      } else {
                        setFile(selectedFile);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

            {/* NAME */}
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

            {/* EMAIL */}
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

            {/* MESSAGE */}
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

            <p className="text-[10px] text-gray-400 mt-2 tracking-normal leading-normal font-light normal-case">
              By submitting this form, you acknowledge that your data will be processed in accordance with our{' '}
              <Link href="/privacy-policy" className="underline hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>{' '}
              and agree to our{' '}
              <Link href="/terms-and-conditions" className="underline hover:text-white transition-colors duration-300">
                Terms & Conditions
              </Link>.
            </p>

            <Button
              type='submit'
              className='bg-white uppercase text-gray-900 hover:bg-black hover:text-gray-300 transition-all duration-500 ease-in-out rounded-full px-5 tracking-normal font-medium'
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>

      {/* FOOTER SECTION */}
      <div ref={infoRef} className='w-full max-w-lg 2xl:max-w-3xl text-xs font-thin p-4 flex flex-col space-y-4 my-12 py-10'>
        <div data-gsap-info className='flex flex-wrap items-center gap-8 text-center'>
          <a
            href='mailto:info@karandesai.in'
            className={`flex flex-col underline pt-2 text-xl md:text-xs ${worksans.className} font-extralight`}
          >
            info@karandesai.in
          </a>
          <h1 className='text-3xl sm:text-4xl tracking-widest hidden md:flex -mb-4'>
            karan
          </h1>
        </div>

        <div data-gsap-info className='flex flex-col sm:flex-row gap-4 sm:gap-12 items-start sm:items-center pb-4 text-start sm:text-left'>
          <p
            className={`flex flex-col ${worksans.className} text-sm md:text-xs font-light`}
          >
            <a
              href='https://maps.app.goo.gl/LDt3TN9yLwB5n6yg7'
              className='underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West, Mumbai,
              Maharashtra 400053
            </a>
          </p>

          <div className='flex gap-4'>
            <h1 className='text-3xl sm:text-4xl tracking-widest md:hidden'>
              karan
            </h1>
            <h1 className='text-3xl sm:text-4xl tracking-widest md:-mr-4'>
              desai
            </h1>
          </div>

          <div className='font-sans flex items-center space-x-2 justify-center sm:justify-start'>
            <a
              href='https://wa.me/+917977112242'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp size={25} className='text-green-700' />
            </a>
            <a
              href='https://wa.me/+917977112242'
              className='font-semibold text-sm sm:text-md'
              target='_blank'
              rel='noopener noreferrer'
            >
              +917977112242
            </a>
          </div>
        </div>

        <div
          data-gsap-info
          className={`flex flex-col gap-4 sm:flex-row sm:gap-6 font-light sm:text-left 2xl:text-lg 2xl:leading-5 ${worksans.className} tracking-widest`}
        >
          <p className='text-green-400'>
            We are not a normal team of architects and interior designers, but a
            unified movement of innovators and creators of unique design
            experiences.
          </p>
          <p className='text-blue-400'>
            We offer extraordinary design solutions which contribute to the
            well-being of our customers and bring real value to their life and
            work. By entering the space we created, you will feel as if you were
            in your imagination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
