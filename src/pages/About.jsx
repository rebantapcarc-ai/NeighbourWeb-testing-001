import React from 'react';
import Section from '../components/ui/Section';
import { Rocket, Target, Users } from 'lucide-react';

const About = () => {
    return (
        <>
            <Section className="bg-white">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">About NeighborWeb Studios</h1>
                    <p className="text-xl text-slate-600">
                        We are on a mission to help local businesses compete in the digital age without breaking the bank.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto prose prose-lg text-slate-600">
                    <p className="mb-6">
                        Starting a business is hard. Getting customers online shouldn't be. At NeighborWeb Studios, we combine professional web design with modern AI tools to build websites that look great and actually convert visitors into customers.
                    </p>
                    <p className="mb-6">
                        We believe that every local business—whether it's a bakery, a contractor, or a clinic—deserves a website that works as hard as they do. That's why we focus on speed, simplicity, and results.
                    </p>
                </div>
            </Section>

            <Section className="bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Target className="h-8 w-8 text-brand-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                            <p className="text-slate-600">To make professional web presence accessible and affordable for every local business owner.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Rocket className="h-8 w-8 text-brand-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach</h3>
                            <p className="text-slate-600">We use the latest technology to cut down development time and pass the savings on to you.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Users className="h-8 w-8 text-brand-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Promise</h3>
                            <p className="text-slate-600">No jargon, no hidden fees. Just a partner who cares about your business success.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
