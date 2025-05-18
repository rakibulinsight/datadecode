import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormType = 'consultation' | 'transformation' | 'audit';

type FormData = {
  name: string;
  email: string;
  company: string;
  whatsapp?: string;
  projectDescription: string;
  problemStatement: string;
  preferredDate: string;
  preferredTime: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formType, setFormType] = useState<FormType>('consultation');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log({ ...data, formType });
    setIsSuccess(true);
    reset();
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormType('consultation');
    }, 3000);
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'transformation':
        return 'Start Your Transformation';
      case 'audit':
        return 'Book Free Data Audit';
      default:
        return 'Schedule a Free Consultation';
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 w-full max-w-2xl bg-dark-300 rounded-2xl shadow-2xl border border-primary/20 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-dark-50 mb-3">Thank You!</h3>
                <p className="text-dark-50/70 text-lg">We'll contact you soon to confirm your {formType}.</p>
              </motion.div>
            ) : (
              <div className="p-8">
                <div className="flex justify-center gap-4 mb-8">
                  {['consultation', 'transformation', 'audit'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormType(type as FormType)}
                      className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                        formType === type
                          ? 'bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/10'
                          : 'bg-dark-400/50 text-dark-50/70 border-dark-100/10 hover:bg-dark-400/70'
                      } border`}
                    >
                      {type === 'consultation' ? 'Consultation' :
                       type === 'transformation' ? 'Transformation' : 'Data Audit'}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-dark-50 flex items-center">
                    <span className="text-primary mr-2">⚡</span>
                    {getFormTitle()}
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-dark-50/70 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-50/70 mb-2">Name *</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-dark-50/30"
                        placeholder="Your full name"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-50/70 mb-2">Email *</label>
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-dark-50/30"
                        placeholder="your@email.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1">Required</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-50/70 mb-2">Company *</label>
                      <input
                        {...register('company', { required: true })}
                        className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-dark-50/30"
                        placeholder="Company name"
                      />
                      {errors.company && <span className="text-red-500 text-xs mt-1">Required</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-50/70 mb-2">
                        WhatsApp <span className="text-dark-50/40">(Optional)</span>
                      </label>
                      <input
                        {...register('whatsapp')}
                        type="tel"
                        className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-dark-50/30"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-50/70 mb-2">Project Description *</label>
                    <textarea
                      {...register('projectDescription', { required: true })}
                      rows={3}
                      className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-dark-50/30"
                      placeholder="Tell us about your project..."
                    />
                    {errors.projectDescription && <span className="text-red-500 text-xs mt-1">Required</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-50/70 mb-2">Problem Statement *</label>
                    <textarea
                      {...register('problemStatement', { required: true })}
                      rows={3}
                      className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-dark-50/30"
                      placeholder="What challenges are you facing?"
                    />
                    {errors.problemStatement && <span className="text-red-500 text-xs mt-1">Required</span>}
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-50/70 mb-2">Preferred Date *</label>
                      <input
                        {...register('preferredDate', { required: true })}
                        type="date"
                        className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      />
                      {errors.preferredDate && <span className="text-red-500 text-xs mt-1">Required</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-50/70 mb-2">Preferred Time *</label>
                      <input
                        {...register('preferredTime', { required: true })}
                        type="time"
                        className="w-full bg-dark-400/50 border border-primary/20 rounded-lg px-4 py-2.5 text-dark-50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      />
                      {errors.preferredTime && <span className="text-red-500 text-xs mt-1">Required</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 mt-8"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}