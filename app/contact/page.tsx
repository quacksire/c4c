'use client'
import { useState } from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
})

import { Check } from 'lucide-react'

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        setLoading(true);
        e.preventDefault();

        // Save the contact ticket to Supabase
        const { data, error } = await supabase.from('chats').insert([
            { name, email, message }
            
        ]);

        if (error) {
            console.error('Error submitting contact ticket:', error);
            // Handle error
        } else {
            console.log('Contact ticket submitted successfully:', data);
            // Show success message or redirect to a confirmation page
            setSuccess(true);

        }
    };

    return (
        <div className='flex w-screen h-screen items-center justify-center'>
            <div className="contact-page w-[50vw]">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4 space-y-1">
                        <label htmlFor="name" className="text-lg font-semibold">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            disabled={loading || success}
                            aria-disabled={loading || success}
                        />
                    </div>

                    <div className="form-group mb-4 space-y-1">
                        <label htmlFor="email" className="text-lg font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            disabled={loading || success}
                            aria-disabled={loading || success}
                        />
                    </div>

                    <div className="form-group mb-4 space-y-1">
                        <label htmlFor="subject" className="text-lg font-semibold">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            disabled={loading || success}
                            aria-disabled={loading || success}
                        />
                    </div>

                    <div className="form-group mb-4 space-y-1">
                        <label htmlFor="message" className="text-lg font-semibold">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            disabled={loading || success}
                            aria-disabled={loading || success}
                        ></textarea>
                    </div>

                    {!success && !loading && (<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>)}
                    {!success && loading && (<button type="submit" className="bg-grey-500 text-white px-4 py-2 rounded-md" disabled> <span className="loading loading-spinner loading-xs"></span></button>)}
                    {success && loading && (<button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" disabled>  <Check /> Sent </button>)}
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
