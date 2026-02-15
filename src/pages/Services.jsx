import React from 'react';
import { Smartphone, Gauge, Search, PenTool, Database, MessageSquare } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services = () => {
    const services = [
        {
            icon: <Smartphone className="h-6 w-6 text-brand-600" />,
            title: "Mobile-First Design",
            description: "Over 60% of web traffic comes from mobile. We design for the smallest screen first, ensuring your site looks perfect on phones, tablets, and desktops."
        },
        {
            icon: <Gauge className="h-6 w-6 text-brand-600" />,
            title: "Speed Optimization",
            description: "We build lightweight, fast-loading sites. Better speed means better Google rankings and happier customers."
        },
        {
            icon: <Search className="h-6 w-6 text-brand-600" />,
            title: "SEO Foundation",
            description: "Every site comes with essential SEO setup: proper meta tags, headings, and sitemaps so local customers can find you."
        },
        {
            icon: <PenTool className="h-6 w-6 text-brand-600" />,
            title: "Custom Branding",
            description: "We don't just use templates. We customize colors, fonts, and layouts to match your unique brand identity."
        },
        {
            icon: <Database className="h-6 w-6 text-brand-600" />,
            title: "Lead Generation",
            description: "Strategic placement of calls-to-action and contact forms to turn visitors into paying customers."
        },
        {
            icon: <MessageSquare className="h-6 w-6 text-brand-600" />,
            title: "AI Integration",
            description: "Leverage AI tools for content generation, chatbots, and customer support automation."
        }
    ];

    return (
        <>
            <Section className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Services That Grow Your Business</h1>
                    <p className="text-xl text-slate-600">
                        We specialize in creating high-performance websites for local businesses. No fluff, just results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <section className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to upgrade your online presence?</h2>
                    <Button to="/contact" variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                        Get a Quote
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Services;
