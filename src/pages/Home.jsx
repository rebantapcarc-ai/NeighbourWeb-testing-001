import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, LayoutTemplate, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Get More Customers with an <span className="text-brand-600">AI-Powered Website</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We build professional, high-converting websites for local businesses. Fast delivery, affordable pricing, and zero technical headaches.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button to="/contact" size="lg" className="w-full sm:w-auto">
                            Book a Free Call - It's Fast
                        </Button>
                        <Button to="/pricing" variant="secondary" size="lg" className="w-full sm:w-auto">
                            View Pricing
                        </Button>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 className="h-4 w-4 text-green-500" /> No credit card required for consultation
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-brand-200/50 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
                    <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-200/50 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-10 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase mb-6">Trusted by local businesses like yours</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="flex items-center justify-center font-bold text-xl text-slate-400">APEX GYM</div>
                        <div className="flex items-center justify-center font-bold text-xl text-slate-400">CITY DENTAL</div>
                        <div className="flex items-center justify-center font-bold text-xl text-slate-400">ELITE ROOFING</div>
                        <div className="flex items-center justify-center font-bold text-xl text-slate-400">FRESH BOWL</div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <Section className="bg-transparent">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Win Online</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don't just build websites; we build growth engines. Here is what you get with every package.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="hover:shadow-md transition-shadow">
                        <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <LayoutTemplate className="h-6 w-6 text-brand-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Design</h3>
                        <p className="text-slate-600 mb-4">
                            Clean, mobile-first designs that look great on any device and build instant trust with your visitors.
                        </p>
                        <Button to="/services" variant="ghost" size="sm" className="hidden">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Button>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                        <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="h-6 w-6 text-brand-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                        <p className="text-slate-600 mb-4">
                            Optimized for speed so your customers never wait. Google loves fast sites, and so do your users.
                        </p>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                        <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <ShieldCheck className="h-6 w-6 text-brand-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">AI Integration</h3>
                        <p className="text-slate-600 mb-4">
                            Smart usage of AI for content generation and basic chatbots to help capture leads 24/7.
                        </p>
                    </Card>
                </div>

                <div className="text-center mt-12">
                    <Button to="/services" variant="outline">Explore All Services</Button>
                </div>
            </Section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            No hidden fees. Choose the plan that fits your business stage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Basic Plan */}
                        <Card className="flex flex-col p-8 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-extrabold text-slate-900">$699</span>
                                <span className="ml-2 text-slate-500 text-sm">/one-time</span>
                            </div>
                            <p className="text-slate-600 mb-6 text-sm">For small businesses that just need to get online.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Professional 5-page website</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Mobile-friendly & fast</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Basic SEO setup</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">7-day delivery</span>
                                </li>
                            </ul>
                            <Button to="/contact" variant="outline" className="w-full">Get Started</Button>
                        </Card>

                        {/* Growth Plan */}
                        <div className="relative bg-white rounded-2xl shadow-xl border border-brand-500 flex flex-col p-8 scale-105 z-10 transition-transform duration-300">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase shadow-md whitespace-nowrap">
                                Best Value
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-extrabold text-slate-900">$1199</span>
                                <span className="ml-2 text-slate-500 text-sm">/one-time</span>
                            </div>
                            <p className="text-slate-600 mb-6 text-sm">For businesses that want a strong brand presence.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Everything in Basic</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Custom Logo Design</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">AI Website Assistant</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">14-day delivery</span>
                                </li>
                            </ul>
                            <Button to="/contact" className="w-full shadow-md">Get Started</Button>
                        </div>

                        {/* Premium Plan */}
                        <Card className="flex flex-col p-8 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Premium</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-extrabold text-slate-900">$1499</span>
                                <span className="ml-2 text-slate-500 text-sm">/one-time</span>
                            </div>
                            <p className="text-slate-600 mb-6 text-sm">For businesses that want done-for-you peace of mind.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Everything in Growth</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Priority delivery (7-10 days)</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">2 weeks post-launch support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">Full setup + deployment</span>
                                </li>
                            </ul>
                            <Button to="/contact" variant="outline" className="w-full">Get Started</Button>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-slate-900 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Grow Your Business Online?</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Don't let tech hold you back. Let's build something amazing together.
                    </p>
                    <Button to="/contact" size="lg" variant="primary" className="bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900">
                        Book Your Free Strategy Call
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Home;
