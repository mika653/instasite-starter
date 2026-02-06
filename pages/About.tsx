
import React from 'react';
import { DOCTOR_NAME } from '../constants';
import { ModularBadge } from '../components/ModularBadge';

const About = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ModularBadge label="Professional Profile Module" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-10">About Dr. Santos</h1>
      <div className="prose prose-stone lg:prose-xl">
        <p className="text-xl text-stone-600 leading-relaxed mb-8">
          Dr. Maria Santos, MD, FCP, is a board-certified Internist dedicated to providing exceptional medical care for the Filipino community.
          With a focus on preventative healthcare and chronic disease management, she combines her clinical expertise with a compassionate bedside manner.
        </p>
        <h3 className="text-2xl font-bold mb-4">Education & Training</h3>
        <ul className="space-y-4 text-stone-600 mb-10">
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2010</span>
            <span>Residency in Internal Medicine, Makati Medical Center</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2007</span>
            <span>Doctor of Medicine, University of Santo Tomas</span>
          </li>
        </ul>
        <h3 className="text-2xl font-bold mb-4">Professional Philosophy</h3>
        <p className="text-stone-600 leading-relaxed italic">
          "I believe that the best medicine is a partnership. My goal is to listen deeply, diagnose accurately, and work together with patients to build a sustainable path to health."
        </p>
      </div>
    </div>
  );
};

export default About;
