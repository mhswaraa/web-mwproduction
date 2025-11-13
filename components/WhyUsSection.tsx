
import React from 'react';
import type { Feature } from '../types';

const QualityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const SupportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 .75.75Zm-1.06-9.06a1.5 1.5 0 1 1 2.12 0 1.5 1.5 0 0 1-2.12 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /></svg>;
const LicenseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>;


const features: Feature[] = [
    {
        id: 1,
        icon: <QualityIcon />,
        title: 'Unmatched Quality',
        description: 'Every digital asset is meticulously crafted by industry professionals to meet the highest standards of quality and usability.'
    },
    {
        id: 2,
        icon: <SupportIcon />,
        title: 'Lifetime Support',
        description: 'Purchase with confidence. We offer dedicated lifetime support and free updates for all our digital products.'
    },
    {
        id: 3,
        icon: <LicenseIcon />,
        title: 'Flexible Licensing',
        description: 'Our straightforward licensing allows you to use our products in both personal and commercial projects without hassle.'
    }
];

export const WhyUsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose DigiFutura?</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We are more than just a marketplace; we're your partners in digital creation.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map(feature => (
                        <div key={feature.id} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center">
                            <div className="flex justify-center items-center mb-6 text-cyan-400">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
