import React from 'react';
import { Mail, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Section className="py-20 lg:py-32 bg-transparent relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Let's Build Something Amazing</h1>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Ready to take your business to the next level? Send us an email directly for the fastest reply. We
                        usually respond within 24 hours.
                    </p>

                    <Card className="p-8 md:p-12 inline-block w-full max-w-2xl bg-white/60 backdrop-blur-md">
                        <div className="flex flex-col items-center">
                            <div className="bg-brand-100 p-4 rounded-full mb-6">
                                <Mail className="h-10 w-10 text-brand-600" />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Email Us Directly</h2>
                            <p className="text-slate-500 mb-8">Click below to send us a message</p>

                            <a
                                href="mailto:pixelweldstudios@gmail.com"
                                className="text-2xl sm:text-3xl font-bold text-brand-600 hover:text-brand-700 transition-colors break-all"
                            >
                                pixelweldstudios@gmail.com
                            </a>

                            <Button
                                to="mailto:pixelweldstudios@gmail.com"
                                size="lg"
                                className="mt-8 w-full sm:w-auto px-8 py-4 text-lg shadow-lg"
                            >
                                <Send className="h-5 w-5 mr-2" /> Send Message
                            </Button>
                        </div>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
