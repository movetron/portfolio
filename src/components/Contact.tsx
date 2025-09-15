import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EarthCanvas } from './canvas';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
//fZeaBTuBznWzN8QLF
//template_9h8xblr
//service_fjbht7v
const Contact = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_fjbht7v', // replace with your EmailJS service ID
        'template_9h8xblr', // replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: 'Михаил', // replace with your name
          from_email: form.email,
          to_email: 'movkata6@mail.ru', // replace with your email
          message: form.message,
        },
        'fZeaBTuBznWzN8QLF', // replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Спасибо. Я свяжусь с вами как можно скорее.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
        },
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Связаться со мной</p>
        <h3 className={styles.sectionHeadText}>Контакт</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваше имя</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ваше имя?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваш email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ваш email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваше сообщение</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Что вы хотите сказать?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
