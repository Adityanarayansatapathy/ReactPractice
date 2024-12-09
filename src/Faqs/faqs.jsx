import React from "react";
import { useState } from "react"
import { faqs } from './faqs.css';

export const questions = [
    {
        id: 1,
        question: "Popular Articles",
        answer: "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur eget.",
    },
    {
        id: 2,
        question: "Fix problems & request removals",
        answer: "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur eget.",
    },
    {
        id: 3,
        question: "Browse the web",
        answer: "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur eget.",
    },
    {
        id: 4,
        question: "Search on your phone or tablet",
        answer: "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur eget.",
    },
];

export function FrequentQuestions() {
    let [faqStatus, setFaqStatus] = useState(false);
    return (
        <div>
            <h1 className="faq-heading">-:Frequently Asked Questions:-</h1>
            <div className="faqOuter">
                <div className="faqItems">
                    <h2>Popular Articles</h2>
                    <p>Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris.</p>
                </div>
            </div>
        </div>
    )
}
